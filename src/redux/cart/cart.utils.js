export const addItem = (item, arr) => {
    const existingItem = arr.find(arrItem => arrItem.id === item.id);
    if(!existingItem) return [...arr, {...item, quantity: 1}];
    
    const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 };
    const filteredArr = arr.filter(arrItem => arrItem.id !== item.id);
    return [...filteredArr, updatedItem];
}

export const updateItem = (id, newQty, arr) => {
    if(newQty < 0 || isNaN(newQty)) return;

    const item = arr.find(arrItem => arrItem.id === id);
    const updatedItem = {...item, quantity: newQty };
    const filteredArr = arr.filter(arrItem => arrItem.id !== id);
    
    return [...filteredArr, updatedItem];
}