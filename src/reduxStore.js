import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import allReducers from "./reducers";


// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(allReducers,applyMiddleware(thunk))
export default store