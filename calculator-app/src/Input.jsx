import React from "react";

const Input = ({ value }) => {
    return (
      <div className="input-field">
        <input type="text" value={value} readOnly />
      </div>
    );
};

export default Input;