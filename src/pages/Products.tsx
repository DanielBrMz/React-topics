import React from 'react'
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom'

const Products = () => {
  const LIMIT = 20;
  let {search} = useLocation(),
        query: URLSearchParams = new URLSearchParams(search),
        start:number = parseInt(query.get('inicio')!) || 1,
        end:number = parseInt(query.get('fin')!) || LIMIT;
  
  let navigate: NavigateFunction = useNavigate();
  
  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>): void => {
    navigate(`/productos?inicio=${start - LIMIT}&fin=${end - LIMIT}`);
  }

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>): void => {
    navigate(`?inicio=${start + LIMIT}&fin=${end + LIMIT}`);
  }


  return (
    <div>
        <h3>Productos</h3>
        <p>Mostrando productos del <b>{start}</b> al <b>{end}</b></p>
        {start > LIMIT && <button onClick={handlePrev}>Atras</button>}
        <button onClick={handleNext}>Siguiente</button>
    </div>
  )
}

export default Products