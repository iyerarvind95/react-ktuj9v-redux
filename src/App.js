import React from "react"
import {useSelector,useDispatch} from "react-redux"
import {increment} from "./actions"

function App() {
  const counter = useSelector(state =>{
    return state.counter;
  })
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  
  return(

    <div>
    <h1>Counter {counter}</h1>
    <button onClick = {() => dispatch(increment())}> + </button>
    <button> - </button>
    {isLogged ? <h3>Informationnot able to see </h3> : ''}

    </div>
  )
}

export default App;