import { useEffect, useRef } from 'react'

function UseRefHook() {
  const inputRef = useRef("")
  const changeHandler = (e) => {
    inputRef.current = e.target.value
    console.log(inputRef.current)
  }
  useEffect(() => {
    console.log("component render")
  }, [])
  return (
    <div>
      <input type="text" ref={inputRef} onChange={changeHandler} placeholder='Enter text' />
    </div>
  )
}

export default UseRefHook

