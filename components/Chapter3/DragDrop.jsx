"use client";
import React, { useState, useEffect } from "react";

const DragDrop = () => {
  const initialWords = [
    { id: 1, text: "x", match: "Capture : " },
    { id: 2, text: "=", match: "Promotion : " },
    { id: 3, text: "+", match: "Check : " },
    { id: 4, text: "#", match: "Checkmate : " },
    { id: 5, text: "O-O-O", match: "Queenside Castling : " },
    { id: 6, text: "O-O", match: "Kingside Castling : " },
  ];

  const [words, setWords] = useState(
    initialWords.map((word) => ({ ...word, dropped: false }))
  );
  const [blanks, setBlanks] = useState(
    initialWords.map((blank) => ({
      id: blank.id,
      text: "",
      match: blank.match,
    }))
  );
  const [isCorrect, setIsCorrect] = useState(null);
  const [overlay, setOverlay] = useState(false);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    setWords(
      shuffleArray(initialWords.map((word) => ({ ...word, dropped: false })))
    );
  }, []);

  const handleDragStart = (e, word) => {
    e.dataTransfer.setData("text/plain", word.text);
  };

  const handleDrop = (e, blankId) => {
    e.preventDefault();
    const wordText = e.dataTransfer.getData("text/plain");

    const blank = blanks.find((blank) => blank.id === blankId);
    if (blank.text) {
      return;
    }

    const updatedWords = words.map((word) =>
      word.text === wordText ? { ...word, dropped: true } : word
    );
    const updatedBlanks = blanks.map((blank) =>
      blank.id === blankId ? { ...blank, text: wordText } : blank
    );
    setWords(updatedWords);
    setBlanks(updatedBlanks);
  };

  const handleSubmit = () => {
    const allCorrect = blanks.every((blank) => {
      const matchingWord = words.find((word) => word.text === blank.text);
      return matchingWord && blank.match === matchingWord.match;
    });
    setOverlay(true);
    setIsCorrect(allCorrect);
  };

  return (
    <div className="flex flex-col items-center justify-center shadow-lg rounded-lg bg-white xs:p-10 p-4 relative">
      <h6 className="text-center xs:py-7 xs:text-xl text-base py-2">
        CHAPTER III : Notation for moves
      </h6>
      <h5 className="text-center xs:py-7 xs:text-base xxs:text-sm text-[12px]">
        Lesson 2: Fill the following blanks
      </h5>
      <div className="space-y-4 ml-4 pt-12 pb-6">
        {blanks.map((blank) => (
          <div key={blank.id} className="flex mb-2">
            <h5 className="mr-2 my-auto font-light xs:text-base xxs:text-[15px] text-[13px]">
              {blank.match}
            </h5>
            <div
              className="p-2 rounded drop-target "
              onDrop={(e) => handleDrop(e, blank.id)}
              onDragOver={(e) => e.preventDefault()}
            >
              <p className="text-lg">
                {blank.text || (
                  <p className="border border-black bg-white p-2 xs:h-[30px] xs:w-[100px] xxs:h-[20px] xxs:w-[70px] h-[20px] w-[80px]"></p>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-4 space-x-4 grid gap-5 lg:grid-cols-6 grid-cols-3">
        {words.map((word) => (
          <div
            key={word.id}
            className={`py-1 xs:px-4 px-2 border border-black rounded-3xl cursor-pointer ${
              word.dropped && "opacity-50"
            }`}
            draggable={!word.dropped}
            onDragStart={(e) => handleDragStart(e, word)}
          >
            <p className="xs:text-lg text-sm">{word.text}</p>
          </div>
        ))}
      </div>
      <div className="my-4 border border-black p-2 rounded-xl">
        <button
          onClick={handleSubmit}
          className="p-2 rounded bg-black text-white py-2 px-4 hover:bg-white hover:text-black text-base"
        >
          Submit
        </button>
      </div>

      {overlay && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-75 z-10">
          <h4 className="p-10">Feedback</h4>
          {isCorrect !== null && (
            <div className="m-4">
              {isCorrect ? (
                <h5>
                  Great job! Everything is correct. Click NEXT to keep going!
                </h5>
              ) : (
                <h5>Some are incorrect, Click REPLAY to try again!</h5>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DragDrop;
