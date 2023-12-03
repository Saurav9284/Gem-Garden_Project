import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk'
import {reducer as cartReducer} from './cart_page/reducer' 
 


const rootReducer = combineReducers({
    cartReducer,
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))