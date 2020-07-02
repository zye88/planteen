import { updateCartDoc } from '../../firebase/firebase.utils';

const updateItem = (id, newQty, arr) => 
    arr.map(item => item.id === id? {...item, quantity: newQty }: item );

export const updateCartStorage = (uid, cart) => {
    uid? updateCartDoc(uid, cart): 
        localStorage.setItem('cartItems', JSON.stringify(cart));
}

export const toTwoDecimals = num => Math.round(num * 100) / 100;

export const addItem = (item, arr, uid) => {
    const existingItem = arr.find(arrItem => arrItem.id === item.id);
    const newCartItems = existingItem? 
        updateItem(existingItem.id, existingItem.quantity + 1, arr):
        [...arr, {...item, quantity: 1}];
    updateCartStorage(uid, newCartItems);
    return newCartItems;
}

export const removeItem = (itemId, arr, uid) => {
    const existingItem = arr.find(arrItem => arrItem.id === itemId);
    const newCartItems = existingItem.quantity === 1?
        arr.filter(item => item.id !== itemId):
        updateItem(existingItem.id, existingItem.quantity - 1, arr);
    updateCartStorage(uid, newCartItems);
    return newCartItems;
}

export const clearItem = (itemId, arr, uid) => {
    const newCartItems = arr.filter(item => item.id !== itemId);
    updateCartStorage(uid, newCartItems);
    return newCartItems;
}

export const mergeCarts = (cart1, cart2) => {
    const result = JSON.parse(JSON.stringify(cart1));
    cart2.forEach(item2 => {
        const match = result.find(item => item.id === item2.id);
        match? match.quantity += item2.quantity: result.push(item2);
    });
    return result;
}