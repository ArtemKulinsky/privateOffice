import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { privateOfficeReducer } from "./privateOffice-reducer";
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({
   privateOffice: privateOfficeReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

window.store = store;

export default store;