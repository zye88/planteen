export const addItem = (item, arr) => {
    const existingItem = arr.find(arrItem => arrItem.id === item.id);
    if(existingItem) return updateItem(existingItem.id, existingItem.quantity + 1, arr);
    return [...arr, {...item, quantity: 1}];
}

export const removeItem = (id, arr) => {
    const existingItem = arr.find(arrItem => arrItem.id === id);
    if(existingItem.quantity === 1) return arr.filter(item => item.id !== id);
    return updateItem(existingItem.id, existingItem.quantity - 1, arr);
}

const updateItem = (id, newQty, arr) => 
    arr.map(item => item.id === id? {...item, quantity: newQty }: item );

export const toTwoDecimals = num => Math.round(num * 100) / 100;