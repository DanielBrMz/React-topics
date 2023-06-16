import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, add5, reset, substract, substract5 } from '../actions/counterActions';
import { ICounterReducer } from '../ts/interfaces/global_interfaces';

const Counter = () => {
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();
  return (
    <div>
        <h2>Counter</h2>
        <h3>{state.counter}</h3>
        <nav>
            <button onClick={()=>dispatch(add5())}>+5</button>
            <button onClick={()=>dispatch(add())}>+</button>
            <button onClick={()=>dispatch(reset())}>0</button>
            <button onClick={()=>dispatch(substract())}>-</button>
            <button onClick={()=>dispatch(substract5())}>-5</button>
        </nav>
    </div>
  )
}

export default Counter