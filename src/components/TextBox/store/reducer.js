const defaultState = {
    focus:false
}
export default (state = defaultState,action) => {
    if(action.type === 'focus_input'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.focus = true
        return newState
    }
    if(action.type === 'blur_input'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.focus = false
        return newState
    }
    return state;
}