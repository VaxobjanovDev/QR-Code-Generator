import React from "react";

const Input = ({ setInput, setSize }) => {
  return (
    <div className="inputs">
      <input
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text or link..."
      />
      <input
        placeholder="Default width=height=250"
        onChange={(e) => setSize(e.target.value)}
      />
    </div>
  );
};

export default Input;
