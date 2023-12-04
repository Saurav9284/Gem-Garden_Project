import React from 'react'
import {Routes, Route} from "react-router-dom"
import { Homepage } from '../Pages/Homepage'
import {Login} from '../Pages/Login'
import { SignUp } from '../Pages/Signup'

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Homepage/>}></Route>
        <Route path={"/login"} element={<Login/>}></Route>
        <Route path={"/signup"} element={<SignUp/>}></Route>
      </Routes>
    </div>
  )
}
