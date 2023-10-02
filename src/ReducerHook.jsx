import { useReducer } from 'react'

function ReducerHook() {
  const initailCount = 0;
  const reducer = (state ,action) => {
    switch(action.type){
      case "INCREASE": {
        return state + action.payload
      }
      default : {
        return state
      }
    }
  }
  const [count, dispatch] = useReducer(reducer, initailCount)
  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={() => {
        dispatch({type: "INCREASE" , payload:1})
      }}>Increase 1</button>
      <button onClick={() => {
        dispatch({type: "INCREASE", payload: 5})
      }}>Increase By Amount</button>
    </div>
  )
}

export default ReducerHook

