import React, { useReducer } from 'react'
import { IProduct, IShoppingCartState } from '../ts/interfaces/global_interfaces';
import ProductItem from './ProductItem';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, removeFromCart } from '../actions/shoppingCartActions';

const ShoppingCart = (): JSX.Element => {
    const state = useSelector((state: any) => state);
    const {products, cart} = state.shoppingCart;   
    const dispatch = useDispatch();

  return (
    <div>
        <h2>Shopping Cart</h2>
        <h3>Products</h3>
        <article className="box grid-responsive">
            {products.map((product: IProduct) => <ProductItem key={product.id} data={product} addToCart={()=>dispatch(addToCart(product.id))}/>)}
        </article>
        <h3>Cart</h3>
        <article className="box">
            <button onClick={()=> dispatch(clearCart())}>Clear Cart</button>
            {cart.map((item: IProduct) => <CartItem key={item.id} data={item} removeFromCart={(id: number, all: boolean = false)=> dispatch(removeFromCart(id, all))}/>)}
        </article>
    </div>
  )
}

export default ShoppingCart