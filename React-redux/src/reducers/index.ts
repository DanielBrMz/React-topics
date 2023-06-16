import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import { shoppingCartReducer } from "./shoppingCartReducer";
import crudReducer from "./crudReducer";

const reducer = combineReducers({
    counter: counterReducer, 
    shoppingCart: shoppingCartReducer,
    crudApi: crudReducer
});

export type RootState = ReturnType<typeof reducer>;
export default reducer;