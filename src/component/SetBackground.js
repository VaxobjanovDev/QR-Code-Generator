import React from "react";

const SetBackground = ({ setBackground, qrCode }) => {
  const responseUrl = qrCode.request.responseURL;
  return (
    <>
      <input
        className="colorPicker"
        onChange={(e) => setBackground(e.target.value.substring(1))}
        type="color"
      />
      <a href={responseUrl} download="se">
        <button className="btn">Download</button>
      </a>
    </>
  );
};

export default SetBackground;
