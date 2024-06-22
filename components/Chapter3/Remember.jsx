import Image from "next/image";
import Capture from "@/public/Gifs/Capture.gif";
import Check from "@/public/Gifs/Check.gif";
import Checkmate from "@/public/Gifs/Checkmate.gif";
import Promotion from "@/public/Gifs/Promotion.gif";
import KingSideCastling from "@/public/Gifs/KingSideCastling.gif";
import QueenSideCastling from "@/public/Gifs/QueenSidecastling.gif";

const Remember = () => {
  return (
    <div className="shadow-lg rounded-lg bg-white xs:p-10 p-4">
      <h6 className="text-center py-7">CHAPTER III : Notation for moves</h6>
      <h5 className="text-center">Lesson 1 : Remember the Following</h5>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 xs:px-10 px-2 py-5">
        <div className="flex flex-col items-center ">
          <Image src={Capture} height={200} alt="Capture" className="mx-auto" />
          <h5 className="py-2 text-center lg:text-base text-[13px]">Capture</h5>
          <h5 className="flex justify-center items-center py-2 text-center lg:text-base text-[13px]">
            Notation: <p className="px-2">x</p>
          </h5>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Check} height={200} alt="Check" className="mx-auto" />
          <h5 className="py-2 text-center lg:text-base text-[13px]">Check</h5>
          <h5 className="flex justify-center items-center py-2 text-center lg:text-base text-[13px]">
            Notation: <p className="px-2">+</p>
          </h5>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={Checkmate}
            height={200}
            alt="Checkmate"
            className="mx-auto"
          />
          <h5 className="py-2 text-center lg:text-base text-[13px]">
            Checkmate
          </h5>
          <h5 className="flex justify-center items-center py-2 text-center lg:text-base text-[13px]">
            Notation: <p className="px-2">#</p>
          </h5>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={Promotion}
            height={200}
            alt="Promotion"
            className="mx-auto"
          />
          <h5 className="py-2 text-center lg:text-base text-[13px]">
            Promotion
          </h5>
          <h5 className="flex justify-center items-center py-2 text-center lg:text-base text-[13px]">
            Notation: <p className="px-2">=</p>
          </h5>
        </div>
        <div className="flex flex-col items-center ">
          <Image
            src={KingSideCastling}
            height={200}
            alt="King Side Castling"
            className="mx-auto"
          />
          <h5 className="py-2 text-center lg:text-base text-[13px]">
            KingSide Castling
          </h5>
          <h5 className="xs:flex justify-center items-center py-2 text-center lg:text-base text-[13px]">
            Notation: <p className="px-2">O-O</p>
          </h5>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={QueenSideCastling}
            height={200}
            alt="Queen Side Castling"
            className="mx-auto"
          />
          <h5 className="py-2 text-center lg:text-base text-[13px]">
            QueenSide Castling
          </h5>
          <h5 className="xs:flex justify-center items-center py-2 text-center lg:text-base text-[13px]">
            Notation: <p className="px-2">O-O-O</p>
          </h5>
        </div>
      </div>
      <div className="border border-black rounded-md my-10 mx-10 p-5">
        <h6 className="xxs:text-base text-[13px]">
          Note : Please keep these names and notations in mind for our next
          game.
        </h6>
      </div>
    </div>
  );
};

export default Remember;
