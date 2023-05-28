import {
  Box,
  Flex,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box backgroundColor="gray" width="100%" height="50px">
      <Flex
        flexDirection={{ base: "row", sm: "row", md: "row", lg: "row" }}
        justifyContent="space-around"
        alignItems="center"
      >
        <Link to="/newcars">
          <Image src={logo} alt="logo" width="100px" height="50px" />
        </Link>


        <Link to="/newcars">
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
              color: "blue",
            }}
          >
            New Car Details
          </Text>
        </Link>
        <Link to="/cars/create">
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
              color: "blue",
            }}
          >
            Add Old Cars
          </Text>
        </Link>
        <Link to="/cars">
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
              color: "blue",
            }}
          >
            Old Cars
          </Text>
        </Link>
        <Link
          to="/"
          style={{ fontWeight: "bold", fontSize: "20px", color: "black" }}
        >
          <Text>Logout</Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
