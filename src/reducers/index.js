import { combineReducers } from "redux";
import counterReducer from "./smscounter";
import loginReducer from "./login";
const allReducers = combineReducers({
    smscounter: counterReducer,
    login: loginReducer,
})

export default allReducers;