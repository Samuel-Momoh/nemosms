const optionsSwitch = (state = false, action) =>{
    switch(action.type){
        case 'TOGGLE':
            return state = !state
        case 'RESTORE':
            return state = false
        default:
            return state
    }
}
export default optionsSwitch;
