import React, { useState } from "react";
import "./Calculator.css"; // You can create and style this CSS file

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleEqual = () => {
    try {
      if (input === "") {
        setResult("Error");
      } else {
        const evalResult = eval(input);
        if (evalResult === Infinity) {
          setResult("Infinity");
        } else if (isNaN(evalResult)) {
          setResult("NaN");
        } else {
          setResult(evalResult);
        }
      }
    } catch (error) {
      setResult("Error");
    }
  };


  return (
    <div className="calculator">
      <h1 className="heading">React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
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
          <button
            key={btn}
            onClick={
              btn === "="
                ? handleEqual
                : btn === "C"
                ? handleClear
                : () => handleButtonClick(btn)
            }
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
