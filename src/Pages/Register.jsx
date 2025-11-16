import { Box, Input, Stack ,useToast} from "@chakra-ui/react";
import React, { useState } from "react";
import { apiBase } from "../Api/api";

const Register = () => {

  const init ={
    name:"",
    email:"",
    password:""
  }
  const [formData , setFormData] = useState(init);
  const [backendResponse, setBackendResponse] = useState(null)
  const toast = useToast();
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
    let response =await apiBase("users/register", "post", formData);
     console.log("response register",response)
     if(response?.message){
      setBackendResponse(response?.message)
     }
  }
 

  return (
    <Box >
      <Box  width={"30%"} margin={"auto"} mt={"100px"}>
          <form onSubmit={handleSubmit}>
        <Stack gap="2">
            <Input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="enter the name" />
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
  );
};

export default Register;
