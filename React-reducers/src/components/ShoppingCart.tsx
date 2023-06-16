import React, { useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducer'
import { IProduct } from '../ts/interfaces/global_interfaces';
import ProductItem from './ProductItem';
import CartItem from './CartItem';
import { TYPES } from '../actions/shoppingActions';

const ShoppingCart = (): JSX.Element => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const { products, cart } = state;

    const addToCart = (id: number) => {
        dispatch({type: TYPES.ADD_TO_CART, payload: id});
        console.log(cart)
    }

    const removeFromCart = (id: number, all: boolean = false) => {
        if(all) dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload: id});
        else dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload: id});
    }

    const clearCart = () => {
        dispatch({type: TYPES.CLEAR_CART});
    }

  return (
    <div>
        <h2>Shopping Cart</h2>
        <h3>Products</h3>
        <article className="box grid-responsive">
            {products.map((product: IProduct) => <ProductItem key={product.id} data={product} addToCart={addToCart}/>)}
        </article>
        <h3>Cart</h3>
        <article className="box">
            <button onClick={clearCart}>Clear Cart</button>
            {cart.map((item: IProduct) => <CartItem key={item.id} data={item} removeFromCart={removeFromCart}/>)}
        </article>
    </div>
  )
}

export default ShoppingCart