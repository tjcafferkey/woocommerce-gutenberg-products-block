/**
 * External dependencies
 */
import {
	createContext,
	useContext,
	useReducer,
	useRef,
	useMemo,
	useEffect,
} from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { actions } from './actions';
import { reducer } from './reducer';
import { DEFAULT_STATE, STATUS } from './constants';
import {
	EMIT_TYPES,
	emitterSubscribers,
	emitEvent,
	emitEventWithAbort,
	reducer as emitReducer,
} from './event-emit';
import { useValidationContext } from '../validation';

/**
 * @typedef {import('@woocommerce/type-defs/checkout').CheckoutDispatchActions} CheckoutDispatchActions
 * @typedef {import('@woocommerce/type-defs/contexts').CheckoutDataContext} CheckoutDataContext
 */

const CheckoutContext = createContext( {
	submitLabel: '',
	onSubmit: () => void null,
	isComplete: false,
	isIdle: false,
	isCalculating: false,
	isProcessing: false,
	hasError: false,
	redirectUrl: '',
	orderId: 0,
	onCheckoutCompleteSuccess: ( callback ) => void callback,
	onCheckoutCompleteError: ( callback ) => void callback,
	onCheckoutProcessing: ( callback ) => void callback,
	dispatchActions: {
		resetCheckout: () => void null,
		setRedirectUrl: ( url ) => void url,
		setHasError: ( hasError ) => void hasError,
		incrementCalculating: () => void null,
		decrementCalculating: () => void null,
		setOrderId: ( id ) => void id,
	},
	hasOrder: false,
	isCart: false,
} );

/**
 * @return {CheckoutDataContext} Returns the checkout data context value
 */
export const useCheckoutContext = () => {
	return useContext( CheckoutContext );
};

/**
 * Checkout state provider
 * This provides provides an api interface exposing checkout state for use with
 * cart or checkout blocks.
 *
 * @param {Object}  props                     Incoming props for the provider.
 * @param {Object}  props.children            The children being wrapped.
 * @param {string}  props.redirectUrl         Initialize what the checkout will
 *                                            redirect to after successful
 *                                            submit.
 * @param {string}  props.submitLabel         What will be used for the checkout
 *                                            submit button label.
 * @param {boolean} props.isCart              If context provider is being used
 *                                            in cart context.
 */
export const CheckoutStateProvider = ( {
	children,
	redirectUrl,
	isCart = false,
	submitLabel = __( 'Place Order', 'woo-gutenberg-product-block' ),
} ) => {
	// note, this is done intentionally so that the default state now has
	// the redirectUrl for when checkout is reset to PRISTINE state.
	DEFAULT_STATE.redirectUrl = redirectUrl;
	const [ checkoutState, dispatch ] = useReducer( reducer, DEFAULT_STATE );
	const [ observers, subscriber ] = useReducer( emitReducer, {} );
	const currentObservers = useRef( observers );
	const { setValidationErrors } = useValidationContext();
	// set observers on ref so it's always current.
	useEffect( () => {
		currentObservers.current = observers;
	}, [ observers ] );
	const onCheckoutCompleteSuccess = useMemo(
		() => emitterSubscribers( subscriber ).onCheckoutCompleteSuccess,
		[ subscriber ]
	);
	const onCheckoutCompleteError = useMemo(
		() => emitterSubscribers( subscriber ).onCheckoutCompleteError,
		[ subscriber ]
	);
	const onCheckoutProcessing = useMemo(
		() => emitterSubscribers( subscriber ).onCheckoutProcessing,
		[ subscriber ]
	);

	/**
	 * @type {CheckoutDispatchActions}
	 */
	const dispatchActions = useMemo(
		() => ( {
			resetCheckout: () => void dispatch( actions.setPristine() ),
			setRedirectUrl: ( url ) =>
				void dispatch( actions.setRedirectUrl( url ) ),
			setHasError: ( hasError ) =>
				void dispatch( actions.setHasError( hasError ) ),
			incrementCalculating: () =>
				void dispatch( actions.incrementCalculating() ),
			decrementCalculating: () =>
				void dispatch( actions.decrementCalculating() ),
			setOrderId: ( orderId ) =>
				void dispatch( actions.setOrderId( orderId ) ),
		} ),
		[]
	);

	// emit events.
	useEffect( () => {
		const status = checkoutState.status;
		if ( status === STATUS.PROCESSING ) {
			emitEventWithAbort(
				currentObservers.current,
				EMIT_TYPES.CHECKOUT_PROCESSING,
				{}
			).then( ( response ) => {
				if ( response !== true ) {
					setValidationErrors( response );
					dispatchActions.setHasError();
				}
				dispatch( actions.setComplete() );
			} );
		}
		if ( status === STATUS.COMPLETE ) {
			if ( checkoutState.hasError ) {
				emitEvent(
					currentObservers.current,
					EMIT_TYPES.CHECKOUT_COMPLETE_WITH_ERROR,
					{}
				);
			} else {
				emitEvent(
					currentObservers.current,
					EMIT_TYPES.CHECKOUT_COMPLETE_WITH_SUCCESS,
					{}
				).then( () => {
					// all observers have done their thing so let's redirect
					// (if no error).
					if ( ! checkoutState.hasError ) {
						window.location = checkoutState.redirectUrl;
					}
				} );
			}
		}
	}, [
		checkoutState.status,
		checkoutState.hasError,
		checkoutState.isComplete,
		checkoutState.redirectUrl,
	] );

	const onSubmit = () => {
		dispatch( actions.setProcessing() );
	};

	/**
	 * @type {CheckoutDataContext}
	 */
	const checkoutData = {
		submitLabel,
		onSubmit,
		isComplete: checkoutState.status === STATUS.COMPLETE,
		isIdle: checkoutState.status === STATUS.IDLE,
		isCalculating: checkoutState.status === STATUS.CALCULATING,
		isProcessing: checkoutState.status === STATUS.PROCESSING,
		hasError: checkoutState.hasError,
		redirectUrl: checkoutState.redirectUrl,
		onCheckoutCompleteSuccess,
		onCheckoutCompleteError,
		onCheckoutProcessing,
		dispatchActions,
		isCart,
		orderId: checkoutState.orderId,
		hasOrder: !! checkoutState.orderId,
	};
	return (
		<CheckoutContext.Provider value={ checkoutData }>
			{ children }
		</CheckoutContext.Provider>
	);
};