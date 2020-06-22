export const removeItem = (id, arr) => {
    const filteredArr = arr.filter(arrItem => arrItem.id === id);
    const existingItem = arr.find(arrItem => arrItem.id === id);
    if(existingItem.count === 1) return filteredArr;
    
    const updatedItem = { ...existingItem, count: existingItem.count - 1 };
    return [...filteredArr, updatedItem];
}

export const addItem = (item, arr) => {
    const existingItem = arr.find(arrItem => arrItem.id === item.id);
    if(!existingItem) return [...arr, {...item, count: 1}];
    
    const updatedItem = { ...existingItem, count: existingItem.count + 1 };
    const filteredArr = arr.filter(arrItem => arrItem.id !== item.id);
    return [...filteredArr, updatedItem];
}