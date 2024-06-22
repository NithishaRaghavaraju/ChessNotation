"use client";

import React, { useState, useEffect } from "react";

const initialChessPieces = [
  { name: "Queen", notation: "Q" },
  { name: "Bishop", notation: "B" },
  { name: "King", notation: "K" },
  { name: "Rook", notation: "R" },
  { name: "Knight", notation: "N" },
];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const colors = [
  "bg-red-300",
  "bg-blue-300",
  "bg-green-300",
  "bg-yellow-200",
  "bg-purple-300",
];

const ChessMatching = () => {
  const [chessPieces, setChessPieces] = useState([]);
  const [notations, setNotations] = useState([]);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [matches, setMatches] = useState([]);
  const [result, setResult] = useState(null);
  const [overlay, setOverlay] = useState(false);

  useEffect(() => {
    setChessPieces(shuffleArray([...initialChessPieces]));
    setNotations(shuffleArray([...initialChessPieces]));
  }, []);

  const handlePieceClick = (piece) => {
    setSelectedPiece(piece);
  };

  const handleNotationClick = (notation) => {
    if (selectedPiece) {
      if (matches.some((match) => match.notation === notation)) {
        return;
      }

      const matchColor = colors[matches.length];
      setMatches([
        ...matches,
        { piece: selectedPiece.name, notation, color: matchColor },
      ]);
      setSelectedPiece(null);
    }
  };

  const checkMatches = () => {
    const correctMatches = {
      Queen: "Q",
      Bishop: "B",
      King: "K",
      Rook: "R",
      Knight: "N",
    };
    setOverlay(true);
    const allmatched = matches.length == Object.keys(correctMatches).length;
    const isAllCorrect =
      allmatched &&
      matches.every((match) => correctMatches[match.piece] === match.notation);
    const incorrectMatches = matches.filter(
      (match) => correctMatches[match.piece] !== match.notation
    );
    setResult(
      isAllCorrect
        ? "Great job! Everything is correct. Click NEXT to keep going!"
        : "Some are incorrect, Click REPLAY to try again!"
    );
  };

  const getPieceColor = (piece) => {
    const match = matches.find((match) => match.piece === piece.name);
    return match ? match.color : "";
  };

  const getNotationColor = (notation) => {
    const match = matches.find((match) => match.notation === notation.notation);
    return match ? match.color : "";
  };

  return (
    <div className="shadow-lg rounded-lg bg-white sm:p-10 p-4 flex flex-col relative ">
      <h6 className="text-center xs:py-7 xs:text-xl text-base py-2">
        CHAPTER II : Naming the pieces
      </h6>
      <h5 className="text-center xs:py-7 xs:text-base xxs:text-sm text-[12px]">
        Lesson 2: Match the Following
      </h5>
      <div className="flex justify-around ">
        <div className="flex flex-col items-center sm:p-10 xs:p-8 p-2">
          {chessPieces.map((piece) => (
            <div
              key={piece.name}
              className={`px-3 py-2 my-4 xs:mx-16 mx-10 cursor-pointer border border-black rounded-md text-center ${
                selectedPiece === piece ? "bg-[#9CAFAA]" : ""
              } ${getPieceColor(piece)}`}
              onClick={() => handlePieceClick(piece)}
            >
              {piece.name}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center sm:p-10 xs:p-8 p-2">
          {notations.map((notation) => (
            <div
              key={notation.notation}
              className={`px-3 py-2 my-4 xs:mx-16 mx-10 cursor-pointer border border-black rounded-md text-center ${getNotationColor(
                notation
              )}`}
              onClick={() => handleNotationClick(notation.notation)}
            >
              {notation.notation}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 mx-auto border border-black p-2 rounded-xl xs:w-[30%] ">
        <button
          className="bg-black text-white px-2 py-1  rounded hover:bg-white hover:text-black text-base w-[100%]"
          onClick={checkMatches}
        >
          Submit
        </button>
      </div>
      {overlay && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-75 z-10">
          <h4 className="sm:p-10 p-6">Feedback</h4>
          <h5 className="sm:p-4 p-2"> {result}</h5>
        </div>
      )}
    </div>
  );
};

export default ChessMatching;
