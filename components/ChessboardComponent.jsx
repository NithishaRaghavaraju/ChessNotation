"use client";

import React, { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import rightarrow from "@/public/Images/rightarrow.png";
import leftarrow from "@/public/Images/leftarrow.png";
import Reset from "@/public/Images/Reset.png";
import Image from "next/image";

const ChessboardComponent = () => {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState(game.fen());
  const [error, setError] = useState("");
  const [moveIndex, setMoveIndex] = useState(0);
  const [movesnote, setMovesnote] = useState(null);
  const [analysis, setAnalysis] = useState(false);
  const [board, setBoard] = useState(false);

  const handleSubmitmoves = () => {
    if (movesnote.length === 0) {
      return;
    }
    const nextMove = movesnote[moveIndex];

    try {
      const moveResult = game.move(nextMove);
      if (moveResult === null) {
        setError("");
        return;
      }
      setMoveIndex(moveIndex + 1);
      setFen(game.fen());
      setError("");
    } catch (error) {
      setError("");
    }
  };

  const undo = () => {
    game.undo();
    setFen(game.fen());
    if (moveIndex === 0) {
      setMoveIndex(0);
    } else {
      setMoveIndex(moveIndex - 1);
    }
  };

  const handleSubmit = (move) => {
    if (move) {
      try {
        const moveResult = game.move(move);
        if (moveResult === null) {
          if (!analysis) {
            setError("Invalid move!");
          }

          return false;
        } else {
          const isCapture = moveResult.flags.includes("c");
          const isCheck = game.inCheck();
          const isCheckMate = game.isCheckmate();
          const isPromotion = moveResult.promotion;
          const isEnPassant = moveResult.flags.includes("e");
          const isQueenCastling = moveResult.flags.includes("q");
          const isKingCastling = moveResult.flags.includes("k");

          if (
            (isCapture || isEnPassant) &&
            moveResult.piece === "p" &&
            move[1] !== "x"
          ) {
            setError("Capture move must include 'x' in the first!");
            game.undo();
            return false;
          }
          if (isCapture && !move.includes("x")) {
            setError("Capture move must include 'x'");
            game.undo();
            return false;
          }
          if (isCheck) {
            if (isCheckMate && move.slice(-1)[0] !== "#") {
              setError("checkmate move must include '#'");
              game.undo();
              return false;
            }
            if (!isCheckMate && move.slice(-1)[0] !== "+") {
              setError("Check move must include '+");
              game.undo();
              return false;
            }
          }
          if(isQueenCastling && !move.includes("O-O-O")) {
            setError("Queen-side castling is notated as O-O-O");
            game.undo();
            return false;

          }
          if(isKingCastling && !move.includes("O-O")) {
            setError("King-side castling is notated as O-O");
            game.undo();
            return false;

          }

          if (isPromotion && !move.includes("=")) {
            setError("Promotion move must include '='");
            game.undo();
            return false;
          }

          setFen(game.fen());
          setError("");
          return true;
        }
      } catch (error) {
        setError("Invalid move!");
        return false;
      }
    }
  };

  const [rows, setRows] = useState([{ id: 1, columns: ["", ""] }]);

  const handleAddRow = () => {
    const white = rows[rows.length - 1]["columns"][0];
    const black = rows[rows.length - 1]["columns"][1];
    let whiteMovement = true;
    let blackMovement = true;
    if (game.turn() === "w") {
      whiteMovement = handleSubmit(white);
    }
    if (game.turn() === "b") {
      blackMovement = handleSubmit(black);
    }
    const abort =
      (whiteMovement && white.includes("#")) ||
      (blackMovement && black.includes("#"));
    if (!abort && (!black || !white)) {
      setError("Enter both moves");
      return;
    }

    if (abort) {
      setError("Great game! Click 'Analysis' to review it.");
      setAnalysis(true);
      return;
    }
    if (whiteMovement && blackMovement) {
      const newRow = {
        id: rows.length + 1,
        columns: ["", ""],
      };
      setRows([...rows, newRow]);
    }
    if (!blackMovement && whiteMovement) {
      game.undo();
      setFen(game.fen());
    }
  };

  const handleAnalysisClick = () => {
    const moves = rows.flatMap((row) =>
      row.columns.filter((col) => col !== "")
    );
    setMovesnote(moves);
    setBoard(true);
  };

  const reset = () => {
    game.reset();
    setFen(game.fen());
    setMoveIndex(0);
  };

  const reloadPage = () => {
    window.location.reload();
  };
  const darkSquareBg = { backgroundColor: "#095D40" };
  const lightSquareBg = { backgroundColor: "#FFF2D7" };

  return (
    <div className="flex flex-col items-center justify-center">
      <h4 className="xl:text-6xl  md:text-5xl sm:text-4xl xxs:text-3xl text-2xl text-center">
        Note your Chess Game
      </h4>
      <h5 className="text-center my-6 xs:py-7 xs:text-base xxs:text-sm text-[12px]">
        write down the notation while playing game on board to analyze later
      </h5>
      <div className="flex flex-col items-center justify-center shadow-lg rounded-lg bg-white xs:p-10 p-4 xl:w-[50%] lg:w-[70%] md:w-[80%] xs:w-[90%] w-[100%]">
        <div className="flex justify-center my-10 ">
          <table className=" divide-y divide-gray-400">
            <thead>
              <tr>
                <th>
                  <h5 className="font-light px-1 sm:px-6 py-3 text-center text-xs text-black uppercase tracking-wider ">
                    White
                  </h5>
                </th>
                <th>
                  <h5 className="font-light px-1 sm:px-6 py-3 text-center text-xs text-black uppercase">
                    Black
                  </h5>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-400">
              {rows.map((row, rowIndex) => (
                <tr key={row.id}>
                  {row.columns.map((col, colIndex) => (
                    <td
                      key={colIndex}
                      className={`${
                        colIndex % 2 == 0
                          ? "px-1 sm:px-6 py-3 whitespace-nowrap"
                          : "px-1 sm:px-6 py-3 whitespace-nowrap border-l-2 border-gray-300"
                      }`}
                    >
                      <input
                        type="text"
                        value={col}
                        onChange={(e) => {
                          const updatedRows = [...rows];
                          updatedRows[rowIndex].columns[colIndex] =
                            e.target.value;
                          setRows(updatedRows);
                        }}
                        className="text-center xs:w-full xs:mx-0 w-[70%] mx-4"
                        placeholder={`${
                          colIndex == 0 && rowIndex == 0 ? "eg:'e4'" : ""
                        }`}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className={`mx-auto px-2 py-1 rounded-2xl border border-black hover:bg-black hover:text-white ${
            analysis ? "hidden" : "block"
          }`}
        >
          <button
            onClick={handleAddRow}
            disabled={analysis}
            className="text-sm"
          >
            Add Row
          </button>
        </div>
        {error && <p className="text-center">{error}</p>}
        <br />
        <br />
        <div className="flex xs:w-[90%] ">
          <button
            onClick={reloadPage}
            className={
              "xs:mr-auto xxs:mx-4 mx-2 py-1 px-4 border border-black rounded-2xl hover:bg-red-600 hover:text-white xs:text-base text-sm"
            }
          >
            New Game
          </button>
          <button
            onClick={handleAnalysisClick}
            disabled={!analysis}
            className={`xs:ml-auto xxs:mx-4  py-1 px-4 border border-black xs:text-base text-sm rounded-2xl ${
              analysis ? "hover:bg-black hover:text-white" : "bg-gray-400"
            } `}
          >
            Analysis
          </button>
        </div>

        {board && (
          <div className="sm:h-1/2 sm:w-1/2 h-3/4 w-3/4 my-10">
            <Chessboard
              position={fen}
              className="cursor-none pointer-events-none"
              arePiecesDraggable={false}
              customDarkSquareStyle={darkSquareBg}
              customLightSquareStyle={lightSquareBg}
            />
            <div className="my-10 flex justify-between">
              <button
                onClick={undo}
                className="text-base rounded-xl px-2 md:px-4 border border-black hover:bg-black hover:text-white"
              >
                <h5 className="xs:block hidden text-base">Undo</h5>
                <Image
                  src={leftarrow}
                  height={20}
                  className="xs:hidden block  bg-white rounded-xl"
                />
              </button>
              <button
                onClick={handleSubmitmoves}
                className=" rounded-xl px-2 md:px-4 border border-black py-1 hover:bg-black hover:text-white"
              >
                <h5 className="xs:block hidden text-base">Next</h5>
                <Image
                  src={rightarrow}
                  height={20}
                  className="xs:hidden block bg-white rounded-xl"
                />
              </button>
              <button
                onClick={reset}
                className="text-base rounded-xl px-2 md:px-4 border border-black hover:bg-black hover:text-white"
              >
                <h5 className="xs:block hidden text-base">Reset</h5>
                <Image
                  src={Reset}
                  height={20}
                  className="xs:hidden block  bg-white rounded-xl"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChessboardComponent;
