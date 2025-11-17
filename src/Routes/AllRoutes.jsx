import React from 'react'
import {Routes ,Route} from "react-router-dom"
import Homepage from "../Pages/HomePage"
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import CreateTask from '../Pages/CreateTask'
import PrivateRoute from '../Private/PrivateRoute'
import Tasks from '../Pages/Tasks'
import EditTask from '../Pages/EditTask'
const AllRoutes = () => {
  return (
    <>
    <Routes>
       <Route path='/' element={<PrivateRoute><Homepage/></PrivateRoute> }/>
       <Route path='/register' element={<Register/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/tasks' element={<Tasks/>} />
        <Route path='/createtasks' element={ <PrivateRoute><CreateTask/></PrivateRoute> } />
        <Route path='/edittask/:id' element={ <PrivateRoute><EditTask/></PrivateRoute> } />
    </Routes>
    </>
  )
}

export default AllRoutes