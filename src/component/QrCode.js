import React, { useEffect } from "react";
import SetBackground from "./SetBackground";

const QrCode = ({ qrCode, setBackground }) => {
  const responseUrl = qrCode.request.responseURL;
  return (
    <>
      <div>
        <img className="codeImg" src={responseUrl} alt="qrCode image" />
      </div>
      <div className="download">
        <SetBackground qrCode={qrCode} setBackground={setBackground} />
      </div>
    </>
  );
};

export default QrCode;
