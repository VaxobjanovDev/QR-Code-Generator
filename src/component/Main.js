import React, { useEffect, useState } from "react";
import Input from "./Input";
import QrCode from "./QrCode";
import axios from "axios";
import "./Main.css";

const Main = () => {
  const [input, setInput] = useState("examlple");
  const [size, setSize] = useState("");
  const [word, setWord] = useState("");
  const [background, setBackground] = useState("");
  const [qrCode, setQrCode] = useState("");

  const fetchQrCode = async () => {
    try {
      const response = await axios.get(
        `http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}x${size}&bgcolor=${background}`
      );
      setQrCode(response);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchQrCode();
  }, [word, background]);

  function handleGenerate() {
    setWord(input);
  }

  return (
    <div className="section">
      <div className="container">
        <div className="text-header">
          <h1>Enter your website name or something and get your QR Code!</h1>
        </div>
        <div className="some">
          <Input setSize={setSize} setInput={setInput} />
          <button className="btn" onClick={handleGenerate}>
            Generate
          </button>
        </div>
        {qrCode ? <QrCode qrCode={qrCode} setBackground={setBackground} /> : ""}
      </div>
    </div>
  );
};

export default Main;
