import Child from "./Child"
import Input from "./Input"
import ListRendering from "./ListRendering"
import ConditionalRendering from "./ConditionalRendering"
import Lifecycle from "./Lifecycle"
import ComponentA from "./ComponentA"
import UseEffectHook from "./useEffectHook"
import Component from "./component/Component"
import { createContext } from "react"

export const NameContext = createContext();
export const AgeContext = createContext();

function App() {

  return (
    <>
      {/* <Child name="Bate Thar"></Child>
      <Input></Input>
      <ListRendering /> */}
      {/* <ConditionalRendering></ConditionalRendering> */}
      {/* <Lifecycle/> */}
      {/* <ComponentA /> */}
      {/* <UseEffectHook /> */}
      <NameContext.Provider value={"Bate Thar"}>
        <AgeContext.Provider value={27}>
          <Component />
        </AgeContext.Provider>
      </NameContext.Provider>
    </>
  )
}

export default App
