import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: rootReducer
});


store.subscribe(() => {console.log(store)});

export type RootState = ReturnType<typeof store.getState>;
export default store;
