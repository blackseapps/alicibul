import {combineReducers} from "redux";
import {masterReducer} from "./masterReducer";


export const allReducer = combineReducers({
    master: masterReducer,

})
