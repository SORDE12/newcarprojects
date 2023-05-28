import React, { useEffect, useState } from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import FilterSec from "../Components/dealers/FilterSec";
import SingleCar from "../Components/dealers/SingleCar";
import PaginationD from "../Components/dealers/PaginationD";
import { getCars } from "../Components/ApiRequest";
import Navbar from "../Components/Navbar";

let products = [
  {
    name: "honda",
    year: "2015",
    price: 2541,
    colors: ["red", "green", "yellow"],
    mileage: 25,
    manufacturedBy: "Honda Cars",
    power: 25,
    maxspeed: 1145,
  },
  {
    name: "maruti suzuki",
    year: "2015",
    price: 2541,
    colors: ["red", "green", "yellow"],
    mileage: 25,
    manufacturedBy: "maruti suzuki Cars",
    power: 25,
    maxspeed: 1145,
  },
];

const Dealers = () => {
  const [page, setPage] = useState(1);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  let fetchCarsAndUpdate = async () => {
    setLoading(true);
    try {
      let res = await getCars();
      setCars(res);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCarsAndUpdate();
  }, []);

  let getVal = async () => {
    let res = await getCars();
     return res
  };

  let handleFilterChange = async(a,b) => {
    let data =await getVal();
    
 
    if(b==="title"){
       setTimeout(() => {
        let val = data.filter((e) => e.title === a);
         setCars(val);
         console.log(val)
       }, 1000);
    }
    else{
      setTimeout(() => {
        let val = data.filter((e) => e.color === a);
         setCars(val);
       }, 1000);
    }
 
  };

  let handleChange = (p) => {
    setPage(p);
  };
  let totalPage;
  if (cars.length < 9) {
    totalPage = true;
  }
  return (
    <Box>
      <Navbar />
      <Flex
        width="95%"
        gap={2}
        margin="auto"
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
      >
        <FilterSec handleFilterChange={handleFilterChange} />
        <Box width={{ base: "99%", sm: "99%", md: "80%", lg: "80%" }}>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} gap={2}>
            {cars &&
              cars.map((e) => (
                <SingleCar
                  key={e._id}
                  {...e}
                  fetchCarsAndUpdate={fetchCarsAndUpdate}
                />
              ))}
          </SimpleGrid>
          <PaginationD
            handleChange={handleChange}
            page={page}
            totalPage={totalPage}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Dealers;
