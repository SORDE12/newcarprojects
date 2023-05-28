import { Box, Button, Center, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const LoginSecRight = () => {
  return (
    <Box
      textAlign="center"
      width={{ base: "90%", sm: "90%", md: "100%", lg: "50%" }}
      marginX="auto"
      fontSize="20px"
      mb="30px"
      mt="35px"
      color="white"
      pb="20px"
    >
      <Heading mt="10px">Sign Up</Heading>
      <Text fontSize="16px" mb="6px" pt="30px">
        Create an account to access the best of your favorite store
      </Text>

      <Center pt="20px">
        <Image  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZLNH1UySmuyDPRd-ImodjCqQAkWHCycKPQ&usqp=CAU" />
      </Center>
      <Center>
        <Link to="/signupd">
          <Button px="25px" mt="35px" py="5px" background="black" color="white">
            Create Account
          </Button>
        </Link>
      </Center>
    </Box>
  );
};

export default LoginSecRight;
