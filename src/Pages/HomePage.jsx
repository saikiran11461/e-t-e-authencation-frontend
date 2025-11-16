import { Box, Button } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="95vh">
      <Box mr={"10px"} fontFamily={"cursive"} color={"#9c27b0"} fontSize={"xl"}>Welcome user have a greate Day </Box>
      <Button bgColor={"#9c27b0"} color={"white"}> View Tasks</Button>
    </Box>
  )
}

export default HomePage