"use client"
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
    <>
    <p>Count: {count}</p>
      <button onClick={()=>{setCount(count+1)}}>
        Incrementar
      </button>

    </>
    )
}

export default Counter;