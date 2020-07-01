import OrderActionTypes from './order.types';
import UserActionTypes from '../user/user.types.js';

const INITIAL_STATE = {
    address: {
        fullName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        postalCode: '',
        province: '',
        country: 'Canada'
    },
    paymentComplete: false
}

const orderReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case OrderActionTypes.SET_ADDRESS:
            return {
                ...state,
                address: action.address
            };
        case OrderActionTypes.SET_COMPLETE_PAYMENT:
            return {
                ...state,
                paymentComplete: action.complete
            }
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                address: {
                    ...state.address,
                    fullName: action.user? action.user.displayName: ''
                }
            }
        default:
            return state;
    }
}

export default orderReducer;