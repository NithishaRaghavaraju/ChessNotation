"use client";
import React, { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";

const ChessboardWithLabel = ({ index, onInputChange }) => {
  const [randomLabel, setRandomLabel] = useState("");
  const [inputValue, setInputValue] = useState("");

  const labels = [];

  for (let rank = 8; rank >= 1; rank--) {
    for (let file = "a".charCodeAt(0); file <= "h".charCodeAt(0); file++) {
      labels.push(`${String.fromCharCode(file)}${rank}`);
    }
  }

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 64);
    setRandomLabel(labels[randomIndex]);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onInputChange(index, value, randomLabel);
  };
  const darkSquareBg = { backgroundColor: "#095D40" };
  const lightSquareBg = { backgroundColor: "#fffff" };

  return (
    <div className="xs:mx-10 mx-4 my-3">
      <div className="relative xs:w-[320px] xs:h-[320px] xxs:w-[250px] xxs:h-[250px] w-[220px] h-[220px]">
        <div className="absolute inset-0">
          <Chessboard
            customPieces={{}}
            position={{}}
            squares={{}}
            customDarkSquareStyle={darkSquareBg}
            customLightSquareStyle={lightSquareBg}
          />
        </div>
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 xs:w-[320px] xs:h-[320px] xxs:w-[250px] xxs:h-[250px] w-[220px] h-[220px]">
          {labels.map((label, idx) => (
            <div
              key={idx}
              className={`flex justify-center items-center border text-[#538392] border-black ${
                label === randomLabel
                  ? "bg-red-900 font-bold text-[#FFC700]"
                  : ""
              }`}
            >
              <p className="xs:text-base xxs:text-[12px] text-[10px]">
                {label === randomLabel ? "?" : label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-2 mx-auto">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter label (e.g., e4)"
          className="border rounded p-2 w-full text-center"
        />
      </div>
    </div>
  );
};

const SquareNaming = () => {
  const [results, setResults] = useState([null, null, null, null]);
  const [userValues, setUserValues] = useState([null, null, null, null]);
  const [correctValues, setCorrectValues] = useState([null, null, null, null]);
  const [overlay, setOverlay] = useState(false);
  const [message, setMessage] = useState();
  const [numBoards, setNumBoards] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setNumBoards(2);
      } else {
        setNumBoards(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleInputChange = (index, value, correctValue) => {
    const newUserValues = [...userValues];
    newUserValues[index] = value;

    const newCorrectValues = [...correctValues];
    newCorrectValues[index] = correctValue;

    setUserValues(newUserValues);
    setCorrectValues(newCorrectValues);
  };

  const handleFinalSubmit = () => {
    const newResults = userValues.map(
      (value, index) =>
        value && value.toLowerCase() === correctValues[index].toLowerCase()
    );
    setResults(newResults);
    setOverlay(true);
    if (newResults.every((result) => result === true)) {
      setMessage("Great job! Everything is correct. Click NEXT to keep going!");
    } else {
      setMessage("Some are incorrect, Click REPLAY to try again!");
    }
  };
  return (
    <div className="shadow-lg rounded-lg bg-white xs:p-10 p-4 flex flex-col relative">
      <h6 className="text-center xs:py-7 xs:text-xl text-base">
        CHAPTER I : Naming the squares
      </h6>
      <div className="grid lg:grid-cols-2 gap-5 grid-cols-1">
        {Array.from({ length: numBoards }).map((_, index) => (
          <ChessboardWithLabel
            key={index}
            index={index}
            onInputChange={handleInputChange}
          />
        ))}
      </div>
      <div className="mt-5 mx-auto border border-black p-2 rounded-xl">
        <button
          onClick={handleFinalSubmit}
          className="px-2 py-1 xs:text-xl xs:px-4 xs:py-2 bg-black text-white rounded hover:bg-white hover:text-black xxs:text-base text-sm"
        >
          Submit
        </button>
      </div>
      {overlay && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-75 z-10">
          <h4 className="p-10">Feedback</h4>
          <h5> {message}</h5>
        </div>
      )}
    </div>
  );
};

export default SquareNaming;
