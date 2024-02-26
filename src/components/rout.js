import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './login'
import Signin from './signin'

export const Rout = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<Login/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
    </Routes>
    </>
  )
}

export default Rout
