import { Box, Input, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { apiBase } from '../Api/api';
import { useParams } from 'react-router-dom';

const EditTask = () => {

    const [edit, setEdit] = useState({})

const {id} = useParams();

console.log("id in the edit", id)

  const fetchData = async(id)=>{
    let res =await apiBase(`tasks/${id}`, "get");
     if(res) setEdit(res)
  }

  useEffect(()=>{
    fetchData(id)
  },[id])
 
    

  const handleChange = (e) =>{
      const {name,value} = e.target;

      const payload = {
        ...edit, 
        [name]:value
      }

      setEdit(payload)
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();

    let response = await apiBase(`tasks/${id}`, "patch" , edit)

    console.log("EditTask",response)
  }

   return (
    <>
    <Box  width={"30%"} margin={"auto"} mt={"100px"}>
          <form onSubmit={handleSubmit}>
        <Stack gap="2">
            <Input name="title" value={edit.title} onChange={handleChange} type="text" placeholder="enter the title" />
            <Input name="description" value={edit.description} onChange={handleChange} type="text" placeholder="enter the description" />
            <Input name="status" value={edit.status} onChange={handleChange} type="text" placeholder="enter the status" />
            <Input bgColor={"#9c27b0"} color={"white"} type="submit" />
        </Stack>
          </form>
      </Box>
    </>
  )
}

export default EditTask