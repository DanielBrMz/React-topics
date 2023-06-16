import React, {memo, useMemo} from 'react'

const CounterChild = ({counter, add, substract}: {counter: number, add: ()=>void, substract: ()=>void}): JSX.Element => {
  // let superNum: number = 0;

  // for (let i = 0; i < 1000000000; i++) {
  //   superNum++;
  // }

  const superNum = useMemo(() => {
    let superNum: number = 0;

    for (let i = 0; i < 1000000000; i++)
      superNum++;

    return superNum;
  }, []);

  return (
    <div style={{border:"thin solid #000", margin: "1rem", padding: "1rem"}}>
        <h2>Counter child</h2>
        <h3>{counter}</h3>
        <nav>
            <button onClick={add}>+</button>
            <button onClick={substract}>-</button>
        </nav>
        {/* <h3>{superNum}</h3> */}
    </div>
  )
}

export default CounterChild