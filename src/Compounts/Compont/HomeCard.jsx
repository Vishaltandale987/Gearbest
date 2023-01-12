import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { CardContext } from "../Context/CartContext/CartContextProvider";
import { addToCart } from "../Context/CartContext/action";
import { BsHeartFill } from "react-icons/bs";
import { Grid, Text, Button, VStack } from "@chakra-ui/react";
import Pagination from "./Pagination";
import Filtering from "./Filtering";

const getData = ({ page, limit, sort, user }) => {
  return axios.get(`https://backend-ruddy-omega.vercel.app/data`, {
    params: {
      _page: page,
      _limit: limit,
      _sort: user,
      _order: sort,
    },
  });
};

function HomeCard() {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);
  const [error, seterror] = useState(false);
  const { state, dispatch } = useContext(CardContext);
  const [page, setpage] = useState(1);
  const [Sortss, setSortss] = useState("");
  // console.log("asasaas", Sortss);

  useEffect(() => {
    setloading(true);
    getData({ page: page, limit: 9, sort: Sortss, user: "price" }).then(
      (res) => {
        setdata(res.data);
        //   seterror(false);
      }
    );
    // .catch(() => {
    //   seterror(true);
    //   setdata([]);
    // })
    // .finally(() => {
    //   setloading(false);
    // });
  }, [page, Sortss]);

  // console.log(data.title)

  const sort_asc = () => {
    setSortss("asc");
  };

  const sort_desc = () => {
    setSortss("desc");
  };

  const perPage = () => {
    setpage((page) => page - 1);
    console.log("per");
  };
  const nextPage = () => {
    setpage((page) => page + 1);
    console.log("sds");
  };

  return (
    <div>
      <Filtering sort_asc={sort_asc} sort_desc={sort_desc} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {data.map((p) => (
          <div key={p.id}>
            <VStack alignItems="center" p="2" rounded="20" h="auto">
              <BsHeartFill
                style={{ marginLeft: "10em" }}
                onClick={() => dispatch(addToCart(p))}
              />

              <img src={p.image} alt="prod - img" style={{ width: "5em" }} />

              <Text as="b">{p.title.substring(0, 20)}</Text>
              <Text as="b">INR: {p.price}</Text>

              <Button
                // colorScheme="blackAlpha"
                size="md"
                border="2px"
                borderColor="blue"
                onClick={() => dispatch(addToCart(p))}
              >
                Add TO Cart
              </Button>
            </VStack>
          </div>
        ))}
      </Grid>
      <Pagination perPage={perPage} nextPage={nextPage} page={page} />
    </div>
  );
}

export default HomeCard;
