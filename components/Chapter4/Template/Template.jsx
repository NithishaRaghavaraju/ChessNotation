"use client";

import React, { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const ChessBoardComponent = ({ showNotation, allowUserInput, position }) => {
  const [chess] = useState(new Chess());
  const [boardPosition, setBoardPosition] = useState("");
  const [userInput, setUserInput] = useState("");
  const [userFeedback, setUserFeedback] = useState("");
  const [numBoards, setNumBoards] = useState(4);
  const [notation, setnotation] = useState("13px");
  const [movedpiece, setMovedPiece] = useState("");
  const [movedto, setMovedTo] = useState("");
  const [isCapture, setIsCapture] = useState(false);
  const [isPromotion, setIsPromotion] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [isCheckmate, setIsCheckmate] = useState(false);
  const [isQueenCastling, setQueenCheckmate] = useState(false);
  const [isKingCastling, setKingCheckmate] = useState(false);
  const [isAmbiguity, setAmbiguity] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [answer, setAnswer] = useState(false);

  useEffect(() => {
    if (position) {
      chess.load(position.FEN);
      setBoardPosition(chess.fen());

      if (showNotation) {
        setMovedTo(position["HighlightSquares"][1]);
        setTimeout(() => {
          const moveResult = chess.move(position.NOTATION);
          setAnswer(position.NOTATION);
          setAmbiguity(position.Ambiguity);
          const isCapture = moveResult.flags.includes("c");
          const isPromotion = moveResult.promotion;
          const isCheck = chess.inCheck();
          const isCheckMate = chess.isCheckmate();
          const isQueenCastling = moveResult.flags.includes("q");
          const isKingCastling = moveResult.flags.includes("k");
          if (!isCheckMate) {
            setIsCheck(isCheck);
          }
          setIsCheckmate(isCheckMate);
          setIsPromotion(isPromotion);
          setIsCapture(isCapture);
          setQueenCheckmate(isQueenCastling);
          setKingCheckmate(isKingCastling);
          if (moveResult.piece != "p") {
            setMovedPiece(moveResult.piece);
          }

          setBoardPosition(chess.fen());
        }, 2000);
      }
    }
  }, [position, chess, showNotation]);

  const chesspiecenotation = {
    "": "Pawn",
    n: "Night",
    b: "Bishop",
    k: "King",
    q: "Queen",
    r: "Rook",
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 350) {
        setNumBoards(250);
        setnotation("10px");
      } else if (window.innerWidth <= 580) {
        setNumBoards(280);
        setnotation("13px");
      } else {
        setNumBoards(400);
        setnotation("13px");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleUserInputSubmit = () => {
    if (!userInput) {
      setUserFeedback("Please enter the value");
      return;
    }
    if (position["NOTATION"] == userInput) {
      setUserFeedback("Great job!. Click NEXT to keep going!");
    } else {
      setUserFeedback("Incorrect answer. Try again!");
    }
  };

  const handlePieceDrop = (sourceSquare, targetSquare) => {
    const moves = game.moves({ verbose: true });

    const validMove = moves.some(
      (move) => move.from === sourceSquare && move.to === targetSquare
    );
    if (!validMove) {
      setError("Invalid move!");
      return;
    }
    const moveResult = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });
    if (moveResult === null) {
      setError("Invalid move!");
    } else {
      setFen(game.fen());
      setError("");
    }
  };

  const getSquareStyles = () => {
    const highlightStyles = {};
    highlightStyles[position.HighlightSquares[0]] = {
      background: "#AF8260",
    };
    highlightStyles[position.HighlightSquares[1]] = {
      background: "#803D3B",
    };
    return highlightStyles;
  };
  const darkSquareBg = { backgroundColor: "#095D40" };
  const lightSquareBg = { backgroundColor: "#FFF2D7" };
  const customNotationStyle = { fontSize: notation };

  const handleshowSolution = () => {
    setShowSolution(!showSolution);
  };

  return (
    <div className="">
      <Chessboard
        position={boardPosition}
        customSquareStyles={getSquareStyles()}
        customDarkSquareStyle={darkSquareBg}
        customLightSquareStyle={lightSquareBg}
        boardWidth={numBoards}
        customNotationStyle={customNotationStyle}
        onPieceDrop={handlePieceDrop}
        arePiecesDraggable={false}
      />

      <div className="py-6 xxs:px-2 px-0">
        {allowUserInput ? (
          <div className="text-center mx-auto xxs:w-full">
            <div className="flex justify-between">
              <input
                type="text"
                value={userInput}
                onChange={handleUserInputChange}
                placeholder="Notation ?"
                className="border border-[#095D40] rounded-2xl text-center xs:px-4 px-2 xs:text-base text-sm"
              />
              <button
                onClick={handleUserInputSubmit}
                className="lg:mx-16 xs:mx-4 xs:text-base xxs:text-sm text-[12px] mx-1 border px-2 py-1 rounded-2xl bg-[#FFF2D7] border-black hover:bg-[#095D40] hover:text-white "
              >
                Submit
              </button>
            </div>
            {userFeedback && <div>{userFeedback}</div>}
            <p
              onClick={handleshowSolution}
              className="underline text-left pt-6 text-[12px]"
            >
              Solution
            </p>
            {showSolution && (
              <p className="text-left text-[12px]">
                I am surprised you gave up so soon. sol : {answer}
              </p>
            )}
          </div>
        ) : (
          <div className="sm:text-lg text-base">
            <p className="text-center mx-auto border border-black p-1 my-2">
              Example Diagram
            </p>
            <p className="text-center mx-auto">
              Notation : {position["NOTATION"]}
            </p>
            <p className="text-left underline">Explanation :</p>
            {!(isKingCastling || isQueenCastling) && (
              <p className="text-center mx-auto">
                Moved Piece = {movedpiece.toUpperCase()} :{" "}
                {chesspiecenotation[movedpiece]}
              </p>
            )}
            {isAmbiguity && (
              <p className="mx-auto text-sm">
                Specifing the number or letter since two{" "}
                {chesspiecenotation[movedpiece]}&apos;s can occupy the same position.
              </p>
            )}
            {isCapture && <p className="text-center mx-auto">Capture = "x"</p>}
            {!(isKingCastling || isQueenCastling) && (
              <p className="text-center mx-auto">Moved To = {movedto}</p>
            )}

            {isPromotion && (
              <p className="text-center mx-auto">Promotion = "="</p>
            )}
            {isPromotion && (
              <p className="text-center mx-auto">
                Promoted to = {isPromotion.toUpperCase()}
              </p>
            )}
            {isCheck && <p className="text-center mx-auto">Check = "+"</p>}
            {isCheckmate && (
              <p className="text-center mx-auto">Checkmate = "#"</p>
            )}
            {isQueenCastling && (
              <p className="text-center mx-auto">
                Queen Side Castling = "O-O-O"
              </p>
            )}
            {isKingCastling && (
              <p className="text-center mx-auto">King Side Castling = "O-O"</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Template = ({ title, fetchUrl, useranswer = 1, bothgames = false }) => {
  const { data, error } = useSWR(fetchUrl, fetcher);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    if (data && data.data) {
      const shuffledPositions = [...data.data];
      shuffleArray(shuffledPositions);
      setPositions(shuffledPositions.slice(0, 2));
    }
  }, [data]);

  if (error) return <div>Failed to load</div>;
  if (!data || positions.length < 2) return <div>Loading...</div>;
  return (
    <div className="shadow-lg rounded-lg bg-white xs:p-10 p-4 flex flex-col">
      <h6 className="text-center xs:py-7 xs:text-xl text-base py-2">
        CHAPTER IV : Playground
      </h6>
      <h5 className="text-center xs:py-7 xs:text-base xxs:text-sm text-[12px]">
        {title}
      </h5>
      {!bothgames ? (
        <div>
          {" "}
          <h5 className="text-xs border border-black rounded-2xl px-6 py-4">
            <span className="text-lg text-center">
              Write the Notation using the Example Diagram
            </span>
            <br />
            1) Understand the target position (Maroon) and piece that is moved
            and it&apos;s movement shown in the example diagram
            <br />
            2) Apply the same logic to the corresponding diagram, ensuring they
            move from the Brown position <br />
            to the Maroon position.
          </h5>
        </div>
      ) : (
        <div>
          {" "}
          <h5 className="text-xs border border-black rounded-2xl px-6 py-4">
            <span className="text-lg text-center">
              Use your knowledge from previous games to identify following
              moves.
            </span>
          </h5>{" "}
        </div>
      )}
      <div className=" py-7 grid lg:grid-cols-2 grid-cols-1">
        {positions.map((position, index) => (
          <div className="mx-auto" key={index}>
            <ChessBoardComponent
              key={index}
              showNotation={true}
              allowUserInput={index >= useranswer}
              position={position}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template;
