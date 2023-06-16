import { IProduct, IReducer, IShoppingCartState } from "../ts/interfaces/global_interfaces";
import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART, UPDATE_CART } from "../types";

const initialState: IShoppingCartState = {
    products: [
        {id: 1, name: 'Product 1', price: 100, description: 'Product 1 description'},
        {id: 2, name: 'Product 2', price: 200, description: 'Product 2 description'},
        {id: 3, name: 'Product 3', price: 300, description: 'Product 3 description'},
        {id: 4, name: 'Product 4', price: 400, description: 'Product 4 description'},
        {id: 5, name: 'Product 5', price: 500, description: 'Product 5 description'},
        {id: 6, name: 'Product 6', price: 600, description: 'Product 6 description'}
    ],
    cart: [],
}

export const shoppingCartReducer = (state: IShoppingCartState = initialState, action: IReducer): IShoppingCartState => {
    switch (action.type) {
        case ADD_TO_CART:{
            let newItem = state.products.find((item: IProduct) => item.id === action.payload) as IProduct;
            
            let itemInCart = state.cart.find((item: IProduct) => item.id === newItem.id);

            return itemInCart 
                ? {
                    ...state,
                    cart: state.cart.map((item: IProduct) => item.id === newItem.id ? {...item, quantity: item.quantity ? item.quantity + 1 : 1} : item)
                } 
                : {
                    ...state,
                    cart: [...state.cart, {...newItem, quantity: 1}] 
                }
        }
        case REMOVE_ONE_FROM_CART:{
            let itemToRemove = state.cart.find((item: IProduct) => item.id === action.payload);

            return itemToRemove && itemToRemove.quantity && itemToRemove.quantity > 1 ? {
                ...state,
                cart: state.cart.map((item: IProduct) => item.id === action.payload ? {...item, quantity: item.quantity ? item.quantity - 1 : 1} : item)
            }:{
                ...state,
                cart: state.cart.filter((item: IProduct) => item.id !== action.payload)
            }
        }
        case REMOVE_ALL_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter((item: IProduct) => item.id !== action.payload)
            }
        }
        case CLEAR_CART:
            break;
        case UPDATE_CART:
            break;
        default:
            return state;
    }
    return state;
}