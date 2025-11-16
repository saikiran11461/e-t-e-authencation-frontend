import React from 'react'
import {Routes ,Route} from "react-router-dom"
import Homepage from "../Pages/HomePage"
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import PrivateRoute from '../Private/PrivateRoute'
const AllRoutes = () => {
  return (
    <>
    <Routes>
       <Route path='/' element={<PrivateRoute><Homepage/></PrivateRoute> }/>
       <Route path='/register' element={<Register/>} />
       <Route path='/login' element={<Login/>} />
    </Routes>
    </>
  )
}

export default AllRoutes