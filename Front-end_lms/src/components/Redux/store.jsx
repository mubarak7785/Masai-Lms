import { createStore } from "redux";
import { Data_Reducer } from "./Data_Redux/Data_Reducer";
import { combineReducers } from "redux";
import {Loginreducer} from "./Login_Redux/Login_Redux"


const rootreducer=combineReducers({Login:Loginreducer,Data:Data_Reducer})
export const store= createStore(rootreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
