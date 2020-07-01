import ShippingActionTypes from './shipping.types';
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
    }
}

const shippingReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ShippingActionTypes.SET_ADDRESS:
            return {
                ...state,
                address: action.address
            };
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

export default shippingReducer;