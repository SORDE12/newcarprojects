import { Box, Button, Flex, Heading, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

let initialState = {
  url: "",
  title: "",
  price: "",
  color: "",
  mileage: "",
  model: "",
  year: "",
  accidents: "",
  buyers:"",
  km: "",
  scratches: "",
};

const UpdateCar = ({ id , fetchCarsAndUpdate}) => {
  const [carState, setCarState] = useState(initialState);
  const [image, setImage] = useState("");
  const toast = useToast();

  let uploadImage = () => {
    
    
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "gvbxzzst");
    data.append("cloud_name", "dfxgyin6i");

    fetch(`https://api.cloudinary.com/v1_1/dfxgyin6i/image/upload`, {
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

  let handleChange = (e) => {
    const val =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setCarState({ ...carState, [e.target.name]: val });
  };
  let obj={}

  if(carState.url !==""){
   obj.url=carState.url
  }
  if(carState.title !==""){
    obj.title=carState.title
   }
   if(carState.price !==""){
    obj.price=carState.price
   }
   if(carState.color !==""){
    obj.color=carState.color
   }
   if(carState.mileage !==""){
    obj.mileage=carState.mileage
   }
   if(carState.model !==""){
    obj.model=carState.model
   }

   if(carState.year !==""){
    obj.year=carState.year
   }
   if(carState.accidents !==""){
    obj.accidents=carState.accidents
   }
   if(carState.buyers !==""){
    obj.buyers=carState.buyers
   }
   if(carState.km !==""){
    obj.km=carState.km
   }
   if(carState.scratches !==""){
    obj.scratches=carState.scratches
   }

   console.log("obj")

  let handleSubmit = async (e) => {
    e.preventDefault();

    fetch(`https://zany-plum-bee-garb.cyclic.app/car/update/${id}`, {
      method: "PATCH",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        toast({
          title: `updated car successfully`,
          description: `added old car successfully`,
          status: "success",
          duration: 6000,
          isClosable: true,
          position: "top",
        });
        fetchCarsAndUpdate()
      })
      .catch((err) => console.log(err));
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
      m="auto"
      width={{ base: "80%", sm: "80%", md: "60%", lg: "50%" }}
      color="white"
    >
      <Heading fontSize="20px">Update Second Hand Cars</Heading>
      {/* <form onSubmit={handleSubmit}> */}
      <label>
        {" "}
        Upload Image on Cloudnary
        <Flex
          flexDirection="column"
        >
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
      </form>
    </Box>
  );
};

export default UpdateCar;
