import React, {useState, useCallback} from 'react'
import CounterChild from './CounterChild';

const Counter = (): JSX.Element => {
    const [counter, setcounter] = useState<number>(0);
    const [input, setInput] = useState<string>("")

    //const addition = ():void => setcounter(counter + 1);
    const addition = useCallback(():void => setcounter(counter + 1),[counter]);

    //const substraction = ():void => setcounter(counter - 1);
    const substraction = useCallback(():void => setcounter(counter - 1),[counter]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>):void => setInput(e.target.value);

  return (
    <div style={{textAlign:"center"}}>
        <h2>Counter</h2>
        <nav>
            <button onClick={addition}>+</button>
            <button onClick={substraction}>-</button>
        </nav>
        <h3>{counter}</h3>
        <input type="text" onChange={handleInput} value={input}/>
        <CounterChild counter={counter} add={addition} substract={substraction}/>
    </div>
  )
}

export default Counter