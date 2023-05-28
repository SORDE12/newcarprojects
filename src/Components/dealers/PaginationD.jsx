import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Center, Flex } from "@chakra-ui/react";
import React from "react";

const PaginationD = ({ page, handleChange, totalPage }) => {
  return (
    <Center>
      <Flex margin="auto">
        <Button isDisabled={page === 1} onClick={() => handleChange(page - 1)}>
          <ChevronLeftIcon />
        </Button>
        <Button>{page}</Button>
        <Button
          isDisabled={true === totalPage}
          onClick={() => handleChange(page + 1)}
        >
          <ChevronRightIcon />
        </Button>
      </Flex>
    </Center>
  );
};

export default PaginationD;
