import {useEffect, useState} from 'react'

function UseEffectHook() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const resizeHandler = () => {
    console.log("resizing")
  }
  const getData = async () => {
    const resData = await fetch("https://jsonplaceholder.typicode.com/users")
    const resdata = await resData.json();
    setData(resdata)
    console.log(resdata)
  }
  useEffect(() => {
    // window.addEventListener("resize" , resizeHandler)
    console.log("useEffect hook is start")
    getData() // ‌api side effect function 
    return() => {
      // window.removeEventListener("resize", resizeHandler)
    }
  },[count])
  
  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={()=> {
        setCount(prev => prev + 1)
      }}>Increase</button>
    </div>
  )
}

export default UseEffectHook
