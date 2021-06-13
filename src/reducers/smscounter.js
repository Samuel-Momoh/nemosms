const counterReducer = (state = 160, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return state = action.playload
        case 'AUTO_INCREAMENT':
            return state = 100
        default:
            return state
    }
}
export default counterReducer;