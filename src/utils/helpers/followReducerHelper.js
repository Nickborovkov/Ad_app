export let reducerHelper = (items, itemId, newObjProps) => {
    return items.map(i => {
        if(i.id === itemId){
            return {...i, ...newObjProps}
        }
        return i
    })
}