import { Button } from "@chakra-ui/react";
import React from "react";

function Filtering({ sort_desc, sort_asc }) {
  return (
    <div style={{marginTop:"2em"}}>
      <Button
        onClick={sort_asc}
        size="md"
        border="2px"
        borderColor="red"
        mr="1em"
      >
        Sort Price In Ascending order
      </Button>
      <Button onClick={sort_desc} size="md"
        border="2px"
        borderColor="red">
        Sort Price In Decending order
      </Button>
    </div>
  );
}

export default Filtering;
