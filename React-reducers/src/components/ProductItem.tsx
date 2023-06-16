import React from 'react'
import { IProduct } from '../ts/interfaces/global_interfaces'

const ProductItem = ({data, addToCart}: {data: IProduct, addToCart: (id: number)=>void}) => {
  let { id, name, price} = data;


  return (
    <div style={{border:"thin solid gray", padding: "1rem"}}>
        <h4>{name}</h4>
        <h5>${price}.00</h5>
        <button onClick={() => addToCart(id)}>Add to cart</button>
    </div>
  )
}

export default ProductItem