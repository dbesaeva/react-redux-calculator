import "./App.css";
import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

function Numbers(props) {
  const nums = Array.from(Array(10).keys()).map((number) => {
    return (
      <Button
        onClick={(e) => {
          if (props.data != "0") props.onClick(props.data + e.target.innerHTML);
          else props.onClick(e.target.innerHTML);
        }}
        key={number}
        w="40px"
        h="40px"
        margin="4px"
      >
        {number}
      </Button>
    );
  });
  return (
    <Box display="flex" flexWrap="wrap" w="150px">
      {" "}
      {nums}{" "}
    </Box>
  );
}

function App() {
  const [counts, setCounts] = useState("0");
  const [result, setResult] = useState("");
  return (
    <div className="App">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        h="100vh"
      >
        <Box
          display="flex"
          gap="5px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          w="200px"
        >
          <Box display="flex" justifyContent="between" w="100%">
            <Text
              display="flex"
              flexDirection="column"
              justifyContent="start"
              alignItems="center"
              bg="gray.50"
              w="100%"
              h="38px"
              px="4px"
              borderRadius="8px"
            >
              {counts}
            </Text>
            <Text textColor="tomato" w="fix-content" h="38px">
              {result}
            </Text>
          </Box>
          <Numbers data={counts} onClick={setCounts} />
        </Box>
      </Box>
    </div>
  );
}

export default App;
