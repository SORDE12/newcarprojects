import React, { useState } from "react";
import { Box, Button, Flex, Heading, Select, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FilterSec = ({ handleFilterChange }) => {
  let handlechange = (e) => {
    let a=e.target.value.split("-")

    handleFilterChange(a[0],a[1]);
  };
  return (
    <Box width={{ base: "99%", sm: "99%", md: "35%", lg: "25%" }}>
      <Box pl="25px">
        <Heading mb="20px" fontSize="25px">
          Filter by Cars
        </Heading>

        <Flex my="10px" gap={1}>
          <Select value="title" onChange={handlechange}>
            <option value="-">sort by Company</option>
            <option value="Honda-title">Honda</option>
            <option value="Suzuki-title">Suzuki</option>
            <option value="Toyota-title">Toyota</option>
            <option value="Bmw-title">Bmw</option>
            <option value="Tata-title">Tata</option>
          </Select>
        </Flex>

        <Flex my="10px" gap={1}>
          <Select value="color" onChange={handlechange}>
            <option value="-">sort by Color</option>
            <option value="red-color">Red</option>
            <option value="green-color">Green</option>
            <option value="blue-color">Blue</option>
            <option value="black-olor">Black</option>
          </Select>
        </Flex>
      </Box>
    </Box>
  );
};

export default FilterSec;
