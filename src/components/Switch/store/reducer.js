const defaultState = {
    isSwitchChecked:false,
    isSwitchDisbaled:false
}
export default (state = defaultState,action) => {
    if(action.type === 'change_switch_checked'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.isSwitchChecked = !action.isChecked
        return newState
    }
    return state;
}