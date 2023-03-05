import "./App.css";
import { Box, Button, Text, Input, Flex } from "@chakra-ui/react";
import { useState } from "react";
import InputCalc from "./components/InputCalc";
import Calculator from "./components/Calculator";

function Numbers(props) {
  const nums = Array.from(Array(10).keys()).map((number) => {
    return (
      <Button
        onClick={(e) => {
          if (props.data !== "0")
            props.onClick(props.data + e.target.innerHTML);
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

function CountButton(props) {
  const expressions = /\+|\-|\/|\*| /;
  const lastNumber = props.data[props.data.length - 1];
  function checkExpressionType() {
    if (expressions.test(lastNumber)) return;
    props.onClick(props.data + props.expression);
  }
  return (
    <Button
      onClick={() => {
        checkExpressionType();
      }}
    >
      {props.expression}
    </Button>
  );
}

function App() {
  const [counts, setCounts] = useState("0");
  const [result, setResult] = useState("");

  function applyExpression(countedNumber) {
    setCounts(countedNumber);
    setResult(eval(counts));
  }
  return (
    <div className="App">
      <Calculator />
      <Flex
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        h="100vh"
      >
        <Flex
          display="flex"
          gap="5px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          w="200px"
        >
          <InputCalc />
          <Flex display="flex" justifyContent="between" w="100%">
            <Text
              display="flex"
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
          </Flex>
          <Flex display="flex">
            <Numbers data={counts} onClick={setCounts} />
            <Flex display="flex" flexDirection="column">
              <CountButton
                data={counts}
                expression={"+"}
                onClick={applyExpression}
              />
              <CountButton
                data={counts}
                expression={"-"}
                onClick={applyExpression}
              />
              <CountButton
                data={counts}
                expression={"*"}
                onClick={applyExpression}
              />
              <CountButton
                data={counts}
                expression={"/"}
                onClick={applyExpression}
              />
            </Flex>
            <Button
              bg="tomato"
              m="4px"
              onClick={() => {
                setResult(eval(counts));
              }}
            >
              =
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
