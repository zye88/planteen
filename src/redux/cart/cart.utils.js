export const addItem = (item, arr) => {
    const existingItem = arr.find(arrItem => arrItem.id === item.id);
    if(existingItem) return updateItem(existingItem.id, existingItem.quantity + 1, arr);
    return [...arr, {...item, quantity: 1}];
}

export const removeItem = (id, arr) => arr.filter(item => item.id !== id);

export const updateItem = (id, newQty, arr) => {
    if(newQty > 0) return arr.map(item => item.id === id? 
        {...item, quantity: newQty }
        : item );
    return removeItem(id, arr);
}