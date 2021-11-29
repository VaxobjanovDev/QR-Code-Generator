import React, { useEffect, useState } from "react";
import Input from "./Input";
import QrCode from "./QrCode";
import SetBackground from "./SetBackground";

const Main = () => {
  const [input, setInput] = useState("");
	const [size,setSize] = useState("")
  const [word, setWord] = useState("");
  const [background, setBackground] = useState("");
  const [qrCode, setQrCode] = useState("");

  // const fetchQrCode = async() => {
  //   await setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}x${size}&bgcolor=${background}`);
  // };

  useEffect(() => {
   setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${""}x${""}&bgcolor=${background}`);
  }, [input, background]);

  function handleGenerate() {
    setWord(input);
  }

  return (
    <div className="section">
      <div className="container">
        <div className="text-header">
          <h1>Enter your website name or something and get your QR Code!</h1>
        </div>
        <Input setInput={setInput} />
        {qrCode ? "": <QrCode qrCode={qrCode} setSize={setSize} setBackground={setBackground} />}
        <button onClick={handleGenerate}>Generate</button>
      </div>
    </div>
  );
};

export default Main;
