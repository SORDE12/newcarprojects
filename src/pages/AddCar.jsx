import { Box, Button, Flex, Heading, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

let initialState = {
  url: "",
  title: "",
  price: "",
  color: "",
  mileage: "",
  model: "",
  year: "",
  accidents: "",
  buyers: "",
  km: "",
  scratches: "",
};

const AddCar = () => {
  const [carState, setCarState] = useState(initialState);
  const [image, setImage] = useState("");
  const Navigate = useNavigate();

  const toast = useToast();

  let handleChange = (e) => {
    const val =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setCarState({ ...carState, [e.target.name]: val });
  };

  let uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "gvbxzzst");
    data.append("cloud_name", "dfxgyin6i");

    fetch("https://api.cloudinary.com/v1_1/dfxgyin6i/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.url);
        toast({
          title: `Get image url successfully`,
          description: `${res.url}`,
          status: "success",
          duration: 6000,
          isClosable: true,
          position: "top",
        });
      })

      .catch((err) => console.log(err));
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    const {
      url,
      title,
      price,
      color,
      mileage,
      model,
      year,
      accidents,
      buyers,
      km,
      scratches,
    } = carState;
    console.log(carState);
    if (
      url === "" ||
      title === "" ||
      price === "" ||
      color === "" ||
      mileage === "" ||
      model === "" ||
      year === "" ||
      accidents === "" ||
      buyers === "" ||
      km === "" ||
      scratches === ""
    ) {
      toast({
        title: "Please enter all data",
        description: "Not added details to all Inputs",
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
      setCarState({
        ...carState,
        url: "",
        title: "",
        price: "",
        color: "",
        mileage: "",
        model: "",
        year: "",
        accidents: "",
        buyers: "",
        km: "",
        scratches: "",
      });
    } else {
      fetch("https://zany-plum-bee-garb.cyclic.app/car/create", {
        method: "POST",
        body: JSON.stringify(carState),
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          toast({
            title: `added car successfully`,
            description: `added old car successfully`,
            status: "success",
            duration: 6000,
            isClosable: true,
            position: "top",
          });
        })
        .catch((err) => console.log(err));
    }
  };

  const {
    url,
    title,
    price,
    color,
    mileage,
    model,
    year,
    accidents,
    buyers,
    km,
    scratches,
  } = carState;
  return (
    <Box
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/2433985/pexels-photo-2433985.jpeg")`,
      }}
    >
      <Navbar />
      <Box
        m="auto"
        padding="20px"
        width={{ base: "80%", sm: "80%", md: "60%", lg: "50%" }}
        color="white"
      >
        <Heading mb="20px">Add Second Hand Cars</Heading>
        {/* <form onSubmit={handleSubmit}> */}
        <label>
          {" "}
          Upload Image on Cloudnary
          <Flex>
            <Input
              name="name"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              placeholder="Add Image"
            />
            <Button backgroundColor="black" onClick={uploadImage}>
              Upload Image
            </Button>
          </Flex>
        </label>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <Flex
            flexDirection={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
            }}
            justifyContent="space-around"
          >
            <Box>
              <label>
                {" "}
                IMAGE
                <Input
                  name="url"
                  type="text"
                  value={url}
                  onChange={handleChange}
                  placeholder="Add URL"
                />
              </label>
              <br />
              <br />
              <label>
                {" "}
                TITLE
                <Input
                  name="title"
                  type="text"
                  onChange={handleChange}
                  value={title}
                  placeholder="Enter Title"
                />
              </label>
              <br />
              <br />
              <label>
                {" "}
                PRICE
                <Input
                  name="price"
                  type="number"
                  onChange={handleChange}
                  value={price}
                  placeholder="Enter Price"
                />
              </label>
              <br />
              <br />

              <label>
                {" "}
                COLOR
                <Input
                  name="color"
                  type="text"
                  onChange={handleChange}
                  value={color}
                  placeholder="Enter Colors"
                />
              </label>

              <br />
              <br />
              <label>
                {" "}
                MILEAGE
                <Input
                  name="mileage"
                  type="text"
                  onChange={handleChange}
                  value={mileage}
                  placeholder="Enter Password"
                />
              </label>
              <br />
              <br />
              <label>
                {" "}
                MODEL
                <Input
                  name="model"
                  type="number"
                  onChange={handleChange}
                  value={model}
                  placeholder="Enter Model Number"
                />
              </label>
              <br />
              <br />
            </Box>
            <Box>
              <label>
                {" "}
                YEAR
                <Input
                  name="year"
                  type="number"
                  value={year}
                  onChange={handleChange}
                  placeholder="Add YEAR"
                />
              </label>
              <br />
              <br />
              <label>
                {" "}
                ACCIDENTS
                <Input
                  name="accidents"
                  type="number"
                  value={accidents}
                  onChange={handleChange}
                  placeholder="Add no of Accidents"
                />
              </label>
              <br />
              <br />
              <label>
                {" "}
                BUYERS
                <Input
                  name="buyers"
                  type="number"
                  value={buyers}
                  onChange={handleChange}
                  placeholder="Add no of Buyers"
                />
              </label>
              <br />
              <br />
              <label>
                {" "}
                DOMETER KM
                <Input
                  name="km"
                  type="number"
                  value={km}
                  onChange={handleChange}
                  placeholder="Add odometer km"
                />
              </label>
              <br />
              <br />
              <label>
                {" "}
                SCRATCHES
                <Input
                  name="scratches"
                  type="number"
                  value={scratches}
                  onChange={handleChange}
                  placeholder="Add no of Scratches"
                />
              </label>
              <br />
              <br />
              <br />

              <Input
                color="white"
                backgroundColor="black"
                type="submit"
                value="submit"
              />
            </Box>
          </Flex>
        </form>
      </Box>
    </Box>
  );
};

export default AddCar;
