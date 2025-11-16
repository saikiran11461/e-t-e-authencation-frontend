import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Box bgColor={"#9c27b0"} display="flex" boxSizing='border-box' padding={"10px 20px"} justifyContent={"space-between"}>
        <Link to={"/"}><Heading color={"white"} fontSize="3xl">Welcome to the App</Heading></Link>  
       <Box display={"flex"} gap={"20px"}>
         <Link to={"/register"}><Button>Register</Button></Link> 
         <Link to={"/login"}><Button>Login</Button></Link> 
       </Box>
    </Box>
  )
}

export default NavBar