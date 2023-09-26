import { NameContext,AgeContext } from "../../../App"
import { useContext } from "react"

function GrandChild() {
  const name = useContext(NameContext)
  const age = useContext(AgeContext)
  return (
    <h1>My name is {name} and {age} years old</h1>
  )
}

export default GrandChild

