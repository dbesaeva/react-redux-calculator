import { Text, Input, Flex } from "@chakra-ui/react";
import { useState } from "react";

function InputCalc(props) {
  const [result, setResult] = useState("");

  function updateCounts(e) {
    const expressions = /\+|\-|\/|\*|=|[A-z]| /;
    const lastNumber = e.target.value[e.target.value.length - 1];
    if (expressions.test(lastNumber)) return
    else setResult(eval(e.target.value));
  }
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      border="2px"
      borderRadius="8px"
      borderColor="gray.50"
    >
      <Input
        type="text"
        border="transparent"
        onInput={(e) => {
          updateCounts(e);
        }}
      />
      <Text textColor="tomato" px="8px">
        {" "}
        {result}{" "}
      </Text>
    </Flex>
  );
}

export default InputCalc;
