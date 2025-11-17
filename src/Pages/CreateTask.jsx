import { Box, Input, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { apiBase } from '../Api/api';
import { useNavigate } from 'react-router-dom';

const CreateTask = () => {

  const init = {
        title:"",
        description:"",
        status:"",
        dueDate:"",
        updatedAt:null,
  }

  const [formData ,setFormData ] = useState(init);
  const navigate = useNavigate()

  const handleChange = (e) =>{
      const {name,value} = e.target;

      const payload = {
        ...formData, 
        [name]:value
      }

      setFormData(payload)
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();

    let response = await apiBase("tasks/create", "post" , formData)

     if(response?.status === 201){
       navigate("/tasks")
     }
  }

   return (
    <>
    <Box  width={"30%"} margin={"auto"} mt={"100px"}>
          <form onSubmit={handleSubmit}>
        <Stack gap="2">
            <Input name="title" value={formData.title} onChange={handleChange} type="text" placeholder="enter the title" />
            <Input name="description" value={formData.description} onChange={handleChange} type="text" placeholder="enter the description" />
            <Input name="status" value={formData.status} onChange={handleChange} type="text" placeholder="enter the status" />
            <Input bgColor={"#9c27b0"} color={"white"} type="submit" />
        </Stack>
          </form>
      </Box>
    </>
  )
}

export default CreateTask