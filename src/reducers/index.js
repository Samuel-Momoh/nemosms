import { combineReducers } from "redux";
import counterReducer from "./smscounter";
import loginReducer from "./login";
import optionsSwitch from "./pops";
import popMenue from "./popMenue";
const allReducers = combineReducers({
    smscounter: counterReducer,
    login: loginReducer,
    optionsSwitch: optionsSwitch,
    popMenue: popMenue
})

export default allReducers;