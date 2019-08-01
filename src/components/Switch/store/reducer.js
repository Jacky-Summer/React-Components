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
    if(action.type === 'toggle_disbable'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.isSwitchDisabled = !action.isDisabled
        return newState
    }
    return state;
}