const loginReducer = (state = null, action) =>{
    switch(action.type){
        case 'LOGIN':
            return state = action.playload
        case 'LOGOUT':
            return state = ''
        default:
            return state
    }
}
export default loginReducer;