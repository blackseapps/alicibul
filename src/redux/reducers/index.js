import {combineReducers} from "redux";
import {masterReducer} from "./masterReducer";
import { homeReducer } from "./homeReducer";


export const allReducer = combineReducers({
    master: masterReducer,
    home: homeReducer,

})
