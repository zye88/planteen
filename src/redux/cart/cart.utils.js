const updateItem = (id, newQty, arr) => 
    arr.map(item => item.id === id? {...item, quantity: newQty }: item );

export const toTwoDecimals = num => Math.round(num * 100) / 100;

export const addItem = (item, arr) => {
    const existingItem = arr.find(arrItem => arrItem.id === item.id);
    const newCartItems = existingItem? 
        updateItem(existingItem.id, existingItem.quantity + 1, arr):
        [...arr, {...item, quantity: 1}];
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    return newCartItems;
}

export const removeItem = (id, arr) => {
    const existingItem = arr.find(arrItem => arrItem.id === id);
    const newCartItems = existingItem.quantity === 1?
        arr.filter(item => item.id !== id):
        updateItem(existingItem.id, existingItem.quantity - 1, arr);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    return newCartItems;
}

export const clearItem = (id, arr) => {
    const newCartItems = arr.filter(item => item.id !== id);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    return newCartItems;
}