import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import UpdateCar from "./UpdateCar";

const UpdateModal = ({id,fetchCarsAndUpdate}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody backgroundColor="black">
            <UpdateCar id={id} fetchCarsAndUpdate={fetchCarsAndUpdate} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default UpdateModal;
