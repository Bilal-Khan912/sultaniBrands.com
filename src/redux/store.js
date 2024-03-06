import { createStore } from "redux";
import comReducer from "./rootReducer/mainReducer";

const store = createStore(comReducer)

export default store