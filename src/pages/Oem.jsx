import { Box, Flex, Input, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Singleoem from "../Components/singleoem";
import Pagination from "../Components/Pagination";
import Navbar from "../Components/Navbar";
import { getOems } from "../Components/ApiRequest";

const Oem = () => {
  const [page, setPage] = useState(1);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCarsData();
  }, []);

  let fetchCarsData = async () => {
    setLoading(true);
    try {
      let res = await getOems();
      setCars(res);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  let handleChange = (p) => {
    setPage(p);
  };
  let totalPage;
  if (cars.length < 9) {
    totalPage = true;
  }
  console.log(cars);
  return (
    <Box>
      <Navbar />
      <Flex
        m="5px"
        flexDirection="row"
        gap="10px"
        justifyContent="center"
        alignItems="center"
      >
        <Text width="100px">Search Cars</Text>{" "}
        <Input width="250px" border="2px solid gray" placeholder="search car" />
      </Flex>
      <Box
        margin="auto"
        width={{ base: "99%", sm: "99%", md: "95%", lg: "95%" }}
      >
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 4 }} gap={2}>
          {cars && cars.map((e) => <Singleoem key={e.id} {...e} />)}
        </SimpleGrid>
        <Pagination
          handleChange={handleChange}
          page={page}
          totalPage={totalPage}
        />
      </Box>
    </Box>
  );
};

export default Oem;
