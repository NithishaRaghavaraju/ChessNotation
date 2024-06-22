import Image from "next/image";
import rook from "@/public/Images/rook.png";
import bishop from "@/public/Images/bishop.png";
import queen from "@/public/Images/queen.png";
import king from "@/public/Images/king.png";
import knight from "@/public/Images/knight.png";
import pawn from "@/public/Images/pawn.png";

const Remember = () => {
  return (
    <div className="shadow-lg rounded-lg bg-white md:p-10 p-2">
      <h6 className="text-center xs:py-7 xs:text-xl text-base">
        CHAPTER II : Naming the pieces
      </h6>
      <h5 className="text-center xs:py-7 xs:text-base xxs:text-sm text-[12px]">
        Lesson 1 : Remember the Following
      </h5>
      <div className="grid sm:grid-cols-3 gap-10 px-10 py-5 grid-cols-2">
        <div className="flex flex-col items-center">
          <Image src={king} height={200} />
          <h5 className="xs:text-lg text-[12px]">KING : K</h5>
        </div>
        <div className="flex flex-col items-center">
          <Image src={queen} height={200} />
          <h5 className="xs:text-lg text-[11px]">QUEEN : Q</h5>
        </div>
        <div className="flex flex-col items-center">
          <Image src={rook} height={190} />
          <h5 className="xs:text-lg text-[12px]">ROOK : R</h5>
        </div>
        <div className="flex flex-col items-center">
          <Image src={knight} height={200} />
          <h5 className="xs:text-lg text-[11px]">KNIGHT : N</h5>
        </div>
        <div className="flex flex-col items-center">
          <Image src={bishop} height={200} />
          <h5 className="xs:text-lg text-[12px]">BISHOP : B</h5>
        </div>
        <div className="flex flex-col items-center">
          <Image src={pawn} height={190} />
          <h5 className="xs:text-lg text-[12px]">PAWN : ' '</h5>
        </div>
      </div>

      <div className="border border-black rounded-md my-10 mx-10 p-5 ">
        <h6 className="xxs:text-base text-[13px]">
          Note : Please keep these names and notations in mind for our next
          game.
        </h6>
      </div>
    </div>
  );
};

export default Remember;
