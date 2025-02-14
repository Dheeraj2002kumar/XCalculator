import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Calculator = () => {
  const [input, setInput] = useState(""); 
  const [result, setResult] = useState(""); 

 const handleButtonClick = (value) => {
   console.log("Button clicked:", value); // Debugging input
   if (value === "=") {
     if (!input || /[+\-*/.]$/.test(input)) {
       console.log("Incomplete expression detected");
       setResult("Error");
     } else {
       try {
         console.log("Evaluating:", input); // Debugging the input
         const output = eval(input); // eslint-disable-line no-eval
         console.log("Calculation result:", output); // Debugging the output

         if (output === Infinity || output === -Infinity) {
           setResult("Infinity");
         } else if (Number.isNaN(output)) {
           setResult("NaN");
         } else {
           setResult(output);
         }
       } catch (error) {
         console.error("Error during calculation:", error); // Debugging error
         setResult("Error");
       }
     }
   } else if (value === "C") {
     setInput("");
     setResult("");
   } else {
     setInput((prevInput) => prevInput + value);
   }
 };


  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div className="input">
        <Input value={input} />
      </div>
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
