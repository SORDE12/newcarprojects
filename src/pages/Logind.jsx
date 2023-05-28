import React from 'react'
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import LoginSecLeft from '../Components/LoginComp/LoginSecLeft';
import LoginSecRight from '../Components/LoginComp/LoginSecRight';
import logo from "../image/logo.png";

const Logind = () => {
  return (
    <Box
      margin="auto"
      width={{ base: "95%", sm: "95%", md: "80%", lg: "70%" }}
      pb="50px"
      pt="10px"
    >
      <Center>
      <Image boxSize='100px' src={logo}  />
      </Center>
      
      <Text 
        mt="15px"
        mb="15px"
        fontSize="34px"
        width={{ base: "90%", sm: "90%", md: "95%", lg: "100%" }}
        mx="auto"
        fontWeight="bold"
        color="white"
      >
        Sign In or Sign Up
      </Text>
      <Box
        width={{ base: "90%", sm: "90%", md: "95%", lg: "100%" }}
        border="2px solid white"
        mb="15px"
        mx="auto"
      
      ></Box>
      <Flex
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
        justifyContent="space-around"
      >
        <LoginSecLeft/>
        <LoginSecRight />
      </Flex>
    </Box>
  )
}

export default Logind