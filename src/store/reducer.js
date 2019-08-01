import { combineReducers } from 'redux'
import { reducer as switchReducer } from '../components/Switch/store'
import { reducer as textboxReducer } from '../components/TextBox/store'
const reducer = combineReducers({
    switch:switchReducer,
    textbox:textboxReducer
})

export default reducer;