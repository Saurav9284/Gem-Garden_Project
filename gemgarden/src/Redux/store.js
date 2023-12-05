import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk'
import {reducer as productReducer} from './Products/reducer' 
import {reducer as authReducer} from "./Authentication/reducer"
 import {reducer as cartReducer} from './cart_page/reducer' 
 


const rootReducer = combineReducers({
    cartReducer,authReducer,productReducer,
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))