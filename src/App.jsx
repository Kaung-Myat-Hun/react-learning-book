import Child from "./Child"
import Input from "./Input"
import ListRendering from "./ListRendering"
import ConditionalRendering from "./ConditionalRendering"
import Lifecycle from "./Lifecycle"
import ComponentA from "./ComponentA"
import UseEffectHook from "./useEffectHook"
import Component from "./component/Component"
import ReducerHook from "./ReducerHook"
import Styling from "./Styling"
import Functional from "./Functional"
import Home from "./Home"
import About from "./About"
import Product from "./Product"
import DynamicRoute from "./DynamicRoute"
import ChildProps from "./ChildProps"
import { createContext } from "react"

import {Routes , Route, Link , NavLink} from 'react-router-dom'
import { useNavigate } from "react-router-dom"

export const NameContext = createContext();
export const AgeContext = createContext();

function App() {
  const navigate = useNavigate()
  const clickHandler = () => {
    // rest of code 
    navigate("/home")
  }
  return (
    <>
      {/* <Child name="Bate Thar"></Child>
      <Input></Input>
      <ListRendering /> */}
      {/* <ConditionalRendering></ConditionalRendering> */}
      {/* <Lifecycle/> */}
      {/* <ComponentA /> */}
      {/* <UseEffectHook /> */}
      {/* <NameContext.Provider value={"Bate Thar"}>
        <AgeContext.Provider value={27}>
          <Component />
        </AgeContext.Provider>
      </NameContext.Provider> */}
      {/* <ReducerHook></ReducerHook> */}
      {/* <Styling></Styling> */}
      {/* <Functional></Functional> */}

      {/* <ChildProps>
        Hello
        <p>Hello</p>
      </ChildProps> */}
      
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/product">Product</NavLink>

      <button onClick={clickHandler}>Redirect to route home</button>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:id" element={<DynamicRoute />}></Route>
      </Routes>
    </>
  )
}

export default App
