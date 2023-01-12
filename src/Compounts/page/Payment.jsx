import React, { useContext, useState } from "react";
import { CardContext } from "../Context/CartContext/CartContextProvider";
import {
  Container,
  Text,
  Input,
  VStack,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Payment() {
  const FormRef = React.useRef();

  const [name, setname] = useState("");

  console.log("name", name);

  const { state, dispatch } = useContext(CardContext);

  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true })

  let adds = 0;

  for (let i = 0; i < state.length; i++) {
    adds = adds + state[i].price;
  }

  const data = (aa) => {
    setname(aa);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  

  return (
    <div>
      <h1>
        <b>Payment</b>
      </h1>
      <Container maxW="2xl" centerContent mt="1">
        <form onSubmit={handleSubmit} ref={FormRef}>
          <VStack b alignItems="center" p="10" rounded="20">
            <Text fontSize="30px" as="b"></Text>

            <div>
              <Input
                isInvalid
                width="auto"
                errorBorderColor="red.300"
                placeholder="Name"
                type="name"
                onChange={(e) => data(e.target.value)}
              />
            </div>

            <div>
              <Input
                isInvalid
                width="auto"
                m="2"
                errorBorderColor="red.300"
                placeholder="Enter Address"
                type="address"
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Input
                isInvalid
                width="auto"
                m="2"
                errorBorderColor="crimson"
                placeholder="Enter Card No"
                type="number"
                // onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link to="/oderplace">
              <Button colorScheme='green' >place order</Button>
            </Link>

            <div>
            </div>
          </VStack>
        </form>
      </Container>
      {/* <OderPlace name={name}/> */}
    </div>
  );
}

export default Payment;
