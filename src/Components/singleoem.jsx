import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Singleoem = ({ url, title, color, price, _id, mileage }) => {
  return (
    <Box
      m="auto"
      mt="15px"
      //width="300px"
      w={{ base: "250px", sm: "250px", md: "250px", lg: "300px" }}
      p="10px"
      border="1px solid #E5E4E2"
      backgroundColor="#FFFFFF"
      borderRadius="15px"
    >
      <Flex justifyContent="space-between">
        <Heading mt="15px" px={2} fontSize="16px">
          {title}
        </Heading>

        <Image
          boxSize="50px"
          mt="8px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDYfeXX39cR7pik2P332vU2MovtChCmeHBAQ&usqp=CAU"
        />
      </Flex>
      <Center>
        <Image width="300px" height="200px" mt="8px" src={url} />
      </Center>

      <Text px={2}>Price : {price}</Text>
      <Text px={2}>Color :{color[0]}</Text>
      <Text px={2}>Mileage :{mileage}</Text>
    </Box>
  );
};

export default Singleoem;
