import { combineReducers } from 'redux'
import { reducer as switchReducer } from '../components/Switch/store'
const reducer = combineReducers({
    switch:switchReducer
})

export default reducer;