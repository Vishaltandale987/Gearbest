import React from "react";
import { Box, HStack, VStack, Input, Select,Heading} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {AppContext} from "../Context/AuthContext/AuthContext"

function Navbar() {
  const { state } = useContext(AppContext);
  return (
    <div >
      <HStack spacing="24px">
        <Box  h="5em">
          <Link to="/">
          <img
            src="https://www.gearbest.com/u_file/2211/10/photo/logogearbest-5cd0.webp"
            alt=""
            style={{ width: "11em" , "paddingTop":"20px", paddingLeft:"20px"}}
          />
          </Link>
        </Box>

        <Box   >
          <VStack >
            <Box ml="30em">
            <Heading size="md">
            <h3 style={{"color":"black"}}>Token:- {state.token}</h3>
            {/* <h1 >ass</h1> */}
          </Heading>
            </Box>

            <Box w="100%"  color="white" pl="7em">
              <HStack>
                <Select
                  placeholder="All"
                  size="sm"
                  w="4em"
                  color="black"
                  border="2px"
                  borderColor="yellow.400"
                  borderRight="none"
                  _hover="none"
                  mr="-1em"
                  style={{
                    borderTopLeftRadius: "0.9em",
                    borderBottomLeftRadius: "0.9em",
                  }}
                />

                <Input
                  placeholder="Enter Product"
                  size="sm"
                  w="22em"
                  border="2px"
                  borderLeft="none"
                  borderColor="yellow.400"
                  _hover="none"

                />

                <Box
                  style={{
                    marginLeft: "-0.5em",
                    borderTopRightRadius: "0.9em",
                    borderBottomRightRadius: "0.9em",
                    
                  }}
                  border="2px"
                  p="1"
                  px="3"
                  borderLeft="none"
                  bg="yellow.400"
                  //  ml="-1em"
                >
                  <Search2Icon color="black" w={5} h={5} />
                </Box>

                <Link to="/login" >
                  <HStack pl="1em">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1lJysbI0bqFlMIoCNeMdBP16eWU9nw4VNbw&usqp=CAU"
                      alt=""
                      style={{ width: "1em" }}
                    />
                    <h1 style={{ color: "black" }}>login</h1>
                  </HStack>
                </Link>

                <Link to="/wishlist">
                  <HStack pl="1em">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYSpy36Bz8Wy2dt8zv2HyCpUJl4kMM5YVZkQ&usqp=CAU"
                      alt=""
                      style={{ width: "1.7em" }}
                    />
                    <h1 style={{ color: "black" }}>Favorites</h1>
                  </HStack>
                </Link>

                <Link to="/cart">
                  <HStack pl="1em">
                    <img
                      src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-shopping-cart_90604.png"
                      alt=""
                      style={{ width: "1.4em" }}
                    />
                    <h1 style={{ color: "black" }}>Cart</h1>
                  </HStack>
                </Link>
              </HStack>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </div>
  );
}

export default Navbar;
