import React from 'react'
import {Routes, Route} from "react-router-dom"
import { Homepage } from '../Pages/Homepage'
import {Login} from '../Pages/Login'
import { SignUp } from '../Pages/Signup'
import  Cart from '../Pages/Cart'

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Homepage/>}></Route>
        <Route path={"/login"} element={<Login/>}></Route>
        <Route path={"/signup"} element={<SignUp/>}></Route>
        <Route path={"/cart"} element={<Cart/>}></Route>
        
      </Routes>
    </div>
  )
}
