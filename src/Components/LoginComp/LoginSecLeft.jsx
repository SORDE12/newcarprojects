import { Box, Heading, Input, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
//import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
// import { authLoginUser } from "../../redux/Auth/authAction";

const LoginSecLeft = () => {
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let navigate = useNavigate();

  console.log(pass);
  let toast = useToast();

  let signinSub = (e) => {
    e.preventDefault();
    let obj = {
      email: email,
      pass: pass,
    };

    if (email === "" || pass === "") {
      toast({
        title: "Please enter all data",
        description: "Not added details to all Inputs",
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
      setEmail("");
      setPass("");
    } else {
      fetch("https://zany-plum-bee-garb.cyclic.app/dealers/login", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((res) => {
          localStorage.setItem("token", res.token);
          console.log(res);
          toast({
            title: "Login Successfull",
            description: "User Logged In Successfully",
            status: "success",
            duration: 6000,
            isClosable: true,
            position: "top",
          });
          navigate("/newcars");
        })
        .catch((err) => {
          console.log(err);
          toast({
            title: "Wrong Credentials",
            description: "User Not Logged In Successfully",
            status: "error",
            duration: 6000,
            isClosable: true,
            position: "top",
          });
        });
    }
  };

  return (
    <Box
      width={{ base: "90%", sm: "90%", md: "100%", lg: "50%" }}
      margin="auto"
      color="white"
      textAlign={{ base: "center", sm: "center", md: "center", lg: "left" }}
    >
      {/* //color="black" */}
      <Heading textAlign="center" mb="26px" color="white">
        Sign In
      </Heading>

      <Text fontSize="16px" pl="30px" pt="20px">
        If you already have an account with us, sign in below
      </Text>
      <form onSubmit={signinSub}>
        <Box pl="30px">
          <Text fontSize="16px">Email Address</Text>
          <Input
            type="email"
            w="300px"
            mt="10px"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email ID"
            color="black"
          />
        </Box>
        <Box pl="30px" mt="15px">
          <Text fontSize="16px">Password</Text>
          <Input
            type="password"
            w="300px"
            mt="10px"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Enter Password"
            color="black"
          />
        </Box>
        <Text pl="30px" mt="15px" color="blue">
          Forget Password?
        </Text>
        <Input
          mt="15px"
          mb="15px"
          width="200px"
          color="white"
          backgroundColor="black"
          type="submit"
          ml={{ base: "20px", sm: "20px", md: "30px", lg: "70px" }}
        />
      </form>
    </Box>
  );
};

export default LoginSecLeft;
