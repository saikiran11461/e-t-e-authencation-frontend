import { Box, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import TasksComponent from '../Components/TasksComponent'
import { Link } from 'react-router-dom'
import { apiBase } from '../Api/api'

const Tasks = () => {
    const [tasks , setTasks ] = useState([]);

   useEffect(() => {
  

  const fetchTasks = async () => {
    try {
      const response = await apiBase("tasks");
      if ( response) {
        setTasks(response?.data);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  fetchTasks();

  
}, []);

   



const handleDelete = async (id) => {
  try {
    const res = await apiBase(`tasks/${id}`, "delete");
    setTasks((prev) => prev.filter((task) => task._id !== id));
  } catch (error) {
    console.error("Delete error:", error);
  }
};



  return (
    <Box boxSizing='border-box' padding={"10px"}>
        <Box boxSizing='border-box' padding={"2"} display={"flex"} justifyContent={"right"}>
           <Link to={"/createtasks"}> <Button >Add Tasks</Button> </Link> 
        </Box>
        <Box display={"flex"} gap={5} flexFlow={"wrap"}>
              {
                tasks && tasks.map(item=>(
                    <TasksComponent title={item.title} description={item.description} status={item.status} id={item._id} onDelete={handleDelete}/>
                ))
            }
        </Box>
          
    </Box>
  )
}

export default Tasks