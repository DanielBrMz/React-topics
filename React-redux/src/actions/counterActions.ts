import { ICounterReducer } from "../ts/interfaces/global_interfaces";
import { DECREMENT, DECREMENT_5, INCREMENT, INCREMENT_5, RESET } from "../types";


export const add = ():ICounterReducer => ({type: INCREMENT});

export const substract = ():ICounterReducer => ({type: DECREMENT});

export const add5 = ():ICounterReducer => ({type: INCREMENT_5, payload: 5});

export const substract5 = ():ICounterReducer => ({type: DECREMENT_5, payload: 5});

export const reset = ():ICounterReducer => ({type: RESET});