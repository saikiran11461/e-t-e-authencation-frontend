import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { apiBase } from "../Api/api";

const TasksComponent = ({title, description, status,id}) => {

  
  const handleDelete = async(id)=>{
    let res =await apiBase(`tasks/${id}`, "delete")
    console.log(res)
  }




 
  return (
    <Box
      border={"2px solid red"}
      width={"20%"}
      borderRadius={"20px"}
      boxSizing="border-box"
      padding={"10px"}
    >
      <Box height={"200px"} position={"relative"}>
        <Box>
          <Image
            borderRadius={"20px"}
            src="https://images.pexels.com/photos/4586902/pexels-photo-4586902.jpeg"
          />
        </Box>
        <Box position={"absolute"} top={"4"} right={"4"}>
          <Link to={`/edittask/${id}`}><BiSolidMessageSquareEdit size={25} color="red" /></Link>
        </Box>
        <Box position={"absolute"} top={"10"} right={"4"}>
          <MdDelete onClick={()=>handleDelete(id)} size={27} color="red" />
        </Box>
      </Box>
      <Box>
        <Heading fontSize={"2xl"}>{title}</Heading>
        <Text mt={"1"} fontSize={"small"}>
          Lorem {description} ipsum dolor sit amet consectetur adipisicing elit. Eius quae
          veritatis sed, ipsam quo laborum pariatur illo explicabo, !
        </Text>
      </Box>
    </Box>
  );
};

export default TasksComponent;
