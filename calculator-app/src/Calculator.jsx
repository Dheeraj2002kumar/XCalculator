import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Calculator = () => {
  const [input, setInput] = useState(""); 
  const [result, setResult] = useState(""); 

  const handleButtonClick = (value) => {
    if (value === "=") {
      // If input is empty or ends with an operator, show Error
      if (!input || /[+\-*/.]$/.test(input)) {
        setResult("Error");
      } else {
        try {
          // Using eval to calculate the result (for simplicity)
          const output = eval(input); // eslint-disable-line no-eval

          // Check for division by zero
          if (output === Infinity) {
            setResult("Infinity");
          }
          // Check for NaN (i.e., 0 / 0)
          else if (Number.isNaN(output)) {
            setResult("NaN");
          } else {
            setResult(output);
          }
        } catch (error) {
          // If an error occurs in eval, set result to Error
          setResult("Error");
        }
      }
    } else if (value === "C") {
      // Clear the input and result
      setInput("");
      setResult("");
    } else {
      // Update the input with the clicked button value
      setInput((prevInput) => prevInput + value);
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
