import React from 'react'
import { IProduct, IShoppingCartState } from '../ts/interfaces/global_interfaces'
import { useDispatch, useSelector } from 'react-redux';

const ProductItem = ({data, addToCart}: {data: IProduct, addToCart: ()=>void}) => {
  let { id, name, price} = data;

  return (
    <div style={{border:"thin solid gray", padding: "1rem"}}>
        <h4>{name}</h4>
        <h5>${price}.00</h5>
        <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}

export default ProductItem