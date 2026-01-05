import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, multiply2 } from './Redux/Counter/CounterSlice'

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <button onClick={()=>dispatch(decrement())}>-</button>
      {`  ${count}  `}
      <button onClick={() => dispatch(increment())}>+</button>
      <br />
      <button onClick={()=>dispatch(multiply2())}>*</button>

    </>
  )
}

export default App
