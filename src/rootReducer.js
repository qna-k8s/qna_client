import {combineReducers} from 'redux'
import userReducer from './redux/user/reducer'
export default combineReducers({
    userDetails:userReducer
})