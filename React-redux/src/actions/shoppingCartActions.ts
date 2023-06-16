import { IReducer } from "../ts/interfaces/global_interfaces";
import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../types";

export const addToCart = (id: number): IReducer => ({type: ADD_TO_CART, payload: id});

export const removeFromCart = (id: number, all: boolean = false): IReducer => {
    if(all) return {type: REMOVE_ALL_FROM_CART, payload: id};
    else return {type: REMOVE_ONE_FROM_CART, payload: id};
}

export const clearCart = (): IReducer => {
    return {type: CLEAR_CART};
}