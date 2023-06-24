import React, { useState } from 'react'

const Counter = () => {
  const [counter, setcounter] = useState<number>(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button disabled={counter == 0} onClick={()=>setcounter((prev)=>prev-1)}>-</button>
      <button onClick={()=>setcounter((prev)=>prev+1)}>+</button>
    </div>
  )
}

export default Counter