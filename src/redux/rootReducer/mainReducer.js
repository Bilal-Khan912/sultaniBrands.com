import { combineReducers } from "redux";
import { cartReducer } from "../reducers/reducer";


const comReducer = combineReducers ({
    cartReducer,
})

export default comReducer