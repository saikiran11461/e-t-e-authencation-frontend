import React, { useState } from 'react'
import { Box, Input, Stack, useToast } from "@chakra-ui/react";
import { apiBase } from '../Api/api';
import {useNavigate} from "react-router-dom"
import LoadingSpinner from '../Components/LoadingSpinner';
const Login = () => {

  const init ={
      email:"",
      password:""
    }
    const [formData , setFormData] = useState(init);
    const [backendResponse, setBackendResponse] = useState(null);
    const [loading ,setLoading] = useState(false)
    const toast = useToast();
    const navigate = useNavigate()
  
    const handleChange = (e) =>{
      const {name, value} = e.target;
      let payload = {
        ...formData,
        [name]:value
      }
  
      setFormData(payload)
    }
  
  
    const handleSubmit =async(e)=>{
      e.preventDefault()
      setLoading(true)
      let response = await apiBase("users/login", "post", formData);
      if(response?.message){
        setBackendResponse(response?.message)
      }

      setLoading(false)

      if(response.status === 200){
         navigate("/")
      }

    }
   
  
  return (
     <Box >
      {loading && <LoadingSpinner/>}
      <Box  width={"30%"} margin={"auto"} mt={"100px"}>
          <form onSubmit={handleSubmit}>
        <Stack gap="2">
            <Input name="email" value={formData.email} onChange={handleChange} type="text" placeholder="enter the email" />
            <Input name="password" value={formData.password} onChange={handleChange} type="text" placeholder="enter the password" />
            <Input bgColor={"#9c27b0"} color={"white"} type="submit" />
        </Stack>
          </form>
      </Box>
      {
          backendResponse && toast({  
                  description: backendResponse,
                  duration: 5000,
                  isClosable: true,
          })
        }
    </Box>
  )
}

export default Login