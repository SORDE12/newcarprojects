import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import UpdateModal from "../UpdateModal";

const SingleCar = ({
  url,
  title,
  color,
  price,
  _id,
  mileage,
  model,
  year,
  accidents,
  buyers,
  km,
  scratches,
  fetchCarsAndUpdate,
}) => {
  let toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  let handleDelete = (id) => {
    try {
      fetch(`https://zany-plum-bee-garb.cyclic.app/car/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          toast({
            title: `deleted car successfully`,
            description: `deleted old car successfully`,
            status: "success",
            duration: 6000,
            isClosable: true,
            position: "top",
          });
          fetchCarsAndUpdate();
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      m="auto"
      w={{ base: "300px", sm: "300px", md: "300px", lg: "350px" }}
      p="10px"
      border="1px solid #E5E4E2"
      backgroundColor="#FFFFFF"
      borderRadius="15px"
      my="15px"
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
        <Image width="300px" height="250px" mt="8px" src={url} />
      </Center>

      <Text px={2}>Price : {price}</Text>
      <Text px={2}>Color :{color}</Text>
      <Text px={2}>Mileage :{mileage}</Text>
      <Button my="10px" onClick={onOpen}>
        Description
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Description</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            backgroundColor="whiteSmoke"
            m="10px"
            textAlign="center"
            m="auto"
          >
            <Text px={2}>Price : {price}</Text>
            <Text px={2}>Color :{color}</Text>
            <Text px={2}>Mileage :{mileage}</Text>
            <Text px={2}>Model :{model}</Text>
            <Text px={2}>Year :{year}</Text>
            <Text px={2}>Accidents :{accidents}</Text>
            <Text px={2}>Buyers :{buyers}</Text>
            <Text px={2}>Km :{km}</Text>
            <Text px={2}>Scratches :{scratches}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Flex flexDirection="row" justifyContent="space-around">
        <UpdateModal id={_id} fetchCarsAndUpdate={fetchCarsAndUpdate} />

        <Button onClick={() => handleDelete(_id)}>Delete Car</Button>
      </Flex>
    </Box>
  );
};

export default SingleCar;
