import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      if (!input || /[+\-*/.]/.test(input.charAt(input.length - 1))) {
        // If input is empty or ends with an operator (invalid expression)
        setResult("Error");
      } else {
        try {
          // eslint-disable-next-line no-eval
          const output = eval(input); // Use eval to compute the expression
          if (output === Infinity) {
            setResult("Infinity");
          } else if (Number.isNaN(output)) {
            setResult("NaN");
          } else {
            setResult(output);
          }
        } catch (error) {
          setResult("Error");
        }
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };


  return (
    <div className="calculator">
        <h1>React Calculator</h1>
      <Input value={input} />
      <div className="result">
        <input type="text" value={result} readOnly />
      </div>
      <div className="buttons">
        {[
          "7",
          "8",
          "9",
          "+",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "*",
          "C",
          "0",
          "=",
          "/",
        ].map((btn) => (
          <Button key={btn} label={btn} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
