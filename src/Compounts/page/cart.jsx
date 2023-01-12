import React from "react";
import { useContext } from "react";
import { CardContext } from "../Context/CartContext/CartContextProvider";
import { removeFromCart } from "../Context/CartContext/action";
import { AiFillDelete } from "react-icons/ai";

import {
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  Container,
  Grid,
  Text,
  Button,
  VStack,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Payment from "./Payment";
import { useEffect } from "react";

function Cart() {
  let { state, dispatch } = useContext(CardContext);

  useEffect(()=>{
    console.log(state)

  },[state])

  let adds = 0;

  for(let i=0;i<state.length;i++){
    
    adds= adds + state[i].price
  }
  return (
    <div>
      <Box>
      <h1>
          <b>Cart</b>
        </h1>

        <TableContainer>
          <Table variant="simple">
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr style={{ display: "flex", justifyContent: "space-between" }}>
                <Th>Title</Th>
                <Th ml="13em">price (INR)</Th>
                <Th>remove</Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                {state.map((c,index) => (
                  <div
                    key={index}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <Td>
                        <b> {c.title.substring(0, 20)}</b>
                      </Td>
                    </div>
                    <div>
                      <Td>
                        <b>{c.price} </b>
                      </Td>
                    </div>
                    <div>
                      <Box>
                        <Td>
                          <AiFillDelete
                            onClick={() => dispatch(removeFromCart(index))}
                          />
                        </Td>
                      </Box>
                    </div>
                  </div>
                ))}
              </Tr>
            </Tbody>
            
          </Table>
        </TableContainer>
        <h1><b>Total Price:  {adds} $</b></h1>

      </Box>

                  {/* <Payment add={adds}/> */}
      <Link to="/payment">


      <Button colorScheme="teal" size="lg">
        Place Order
      </Button>
      </Link>

    </div>
  );
}

export default Cart;
