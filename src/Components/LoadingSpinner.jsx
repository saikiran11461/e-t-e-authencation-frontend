import React from "react";
import { Flex, Spinner, Text } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      bg="white"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Text mt={4} color="blue.600" fontWeight="medium">
        Loading...
      </Text>
    </Flex>
  );
};

export default LoadingSpinner;
