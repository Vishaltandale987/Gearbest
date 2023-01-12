import React from "react";
import axios from "axios";
import { useState, useRef, useContext } from "react";
import { login_failuer, login_success } from "../Context/AuthContext/action";
import { AppContext } from "../Context/AuthContext/AuthContext";
import { Navigate } from "react-router-dom";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Container,
  Text,
  Input,
  VStack
} from "@chakra-ui/react";


function loginUser({ email, password }) {
  if (!email || !password) {
    return Promise.reject("email or password is missing");
  }

  return axios.post("https://reqres.in/api/login", {
    email,
    password,
  });
}

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const FormRef = React.useRef();
  const { state, dispatch } = useContext(AppContext);

  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ email, password })
      .then((res) => {
        dispatch(login_success(res.data.token));
        state.isAuth = true
      })
      .catch((err) => {
        dispatch(login_failuer());
      });
  };

  if (state.isAuth) {
    return (
      <div>
        <h1> Welcome to the dashboard </h1>
        <h3> Token: {state.token} </h3>
        return <Navigate to="/" />;
      </div>
    );
  }

  if (state.isError) {
    return (
      <div>
        <Container maxW="2xl" centerContent pt="5em">
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Something Went Wrong. Please Refresh.</AlertTitle>
          </Alert>
        </Container>
        
      </div>
    );
  }
  
  return (
    <div >
      <Container maxW="2xl" centerContent  mt="10">
        <form onSubmit={handleSubmit} ref={FormRef}>
        <VStack  boxShadow="dark-lg" alignItems="center" p="10" rounded='20'> 
        
          <Text fontSize="30px" as="b" >
            Login
          </Text>

          {state.isLoading ? "Loading..." : null}
          {state.isError && "something went wrong"}
          
            <div>
              <Input
                isInvalid
                width="auto"
                m="2"
                errorBorderColor="red.300"
                placeholder="EnterRreqres Email ID"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Input
                isInvalid
                width="auto"
                m="2"
                errorBorderColor="crimson"
                placeholder="Enter Reqres Passward"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
      
            <div  >
              <Input
                isInvalid
                width="auto"
                m="2"
                errorBorderColor="crimson"
                type="submit"
                onClick={() => FormRef.current.reset()}
              />
            </div>
          
        </VStack>

        </form>
      </Container>
    </div>
  );
}

export default Login;
