import React from 'react'
import { IProduct } from '../ts/interfaces/global_interfaces'

const CartItem = ({data, removeFromCart}:{data:IProduct , removeFromCart: (id: number, all?: boolean) => void}): JSX.Element => {
  const { id, name, price, quantity } = data;
  return (
    <div style={{borderBottom:"thind solid gray"}}>
        <h4>{name}</h4>
        <p>${price}.00 x {quantity} = ${price*quantity!}.00</p>
        <button onClick={()=>removeFromCart(id)}>Remove One</button>
        <br />
        <button onClick={()=>removeFromCart(id, true)}>Remove All</button>
        <br /><br />
    </div>
  )
}

export default CartItem