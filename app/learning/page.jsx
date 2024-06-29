"use client";
import { useState } from "react";
import GetStarted from "@/components/GetStarted/getstarted.jsx";
import NamingSquares from "@/components/Chapter1/SquareNaming";
import MatchRemember from "@/components/Chapter2/Remember";
import Match from "@/components/Chapter2/Match";
import RememberDragDrop from "@/components/Chapter3/Remember";
import Dragdrop from "@/components/Chapter3/DragDrop";
import Movements from "@/components/Chapter4/Movements";
import PawnMovement from "@/components/Chapter4/PawnMovement";
import Capture from "@/components/Chapter4/Capture";
import Promotion from "@/components/Chapter4/Promotion";
import Check from "@/components/Chapter4/Check";
import Checkmate from "@/components/Chapter4/Checkmate";
import Ambiquity from "@/components/Chapter4/Ambiguity";
import TwoCombinations from "@/components/Chapter4/TwoCombination";
import ThreeCombinations from "@/components/Chapter4/ThreeCombitions";
import Game1 from "@/components/Chapter4/game1";
import Congratulations from "@/components/Chapter5/Congratulations";
import Castling from "@/components/Chapter4/Castling";


const components = [
  GetStarted,
  NamingSquares,
  MatchRemember,
  Match,
  RememberDragDrop,
  Dragdrop,
  Movements,
  PawnMovement,
  Capture,
  Promotion,
  Check,
  Checkmate,
  Castling,
  Ambiquity,
  TwoCombinations,
  ThreeCombinations,
  Game1,
  Congratulations,
];

const Learning = () => {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleNextClick = () => {
    setCurrentComponentIndex(
      (prevIndex) => (prevIndex + 1) % components.length
    );
  };

  const handleBackClick = () => {
    setCurrentComponentIndex(
      (prevIndex) => (prevIndex - 1 + components.length) % components.length
    );
  };

  const handleReplayClick = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  const CurrentComponent = components[currentComponentIndex];

  return (
    <div className="flex flex-col items-center">
      <div className="xs:p-8 xxs:p-2 py-1 px-0">
        <CurrentComponent key={refreshKey} />
        <div className="mt-4 w-full flex justify-center">
          {currentComponentIndex > 0 && (
            <button
              onClick={handleBackClick}
              className="px-2 py-1 text-base xs:text-xl xs:px-4 xs:py-2 mr-auto border border-black text-black rounded bg-white hover:bg-black hover:text-white "
            >
              Back
            </button>
          )}
          {currentComponentIndex > 0 && (
            <button
              onClick={handleReplayClick}
              className="px-2 py-1 text-base xs:text-xl xs:px-4 xs:py-2 mx-auto border border-black text-black rounded bg-white hover:bg-black hover:text-white "
            >
              Replay
            </button>
          )}
          <button
            onClick={handleNextClick}
            className={`px-2 py-1 text-base xs:text-xl xs:px-4 xs:py-2 rounded border border-black  ${
              currentComponentIndex === 0
                ? "mx-auto bg-[#F6F5F2] text-black "
                : "ml-auto"
            } ${
              currentComponentIndex === components.length - 1 &&
              currentComponentIndex != 0
                ? "bg-gray-500"
                : "bg-white hover:bg-black hover:text-white"
            }`}
            disabled={currentComponentIndex === components.length - 1}
          >
            {currentComponentIndex === 0 ? "Get Started" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learning;
