import WhiteKing from "@/public/Images/white_king.png";
import BlackKing from "@/public/Images/black_king.png";
import Image from "next/image";

export const metadata = {
  title: "About",
  
};

const page = () => {
  return (
    <div className=" xl:mx-56 lg:mx-36 mx-0">
      <h1 className="xl:text-6xl  md:text-5xl sm:text-4xl xxs:text-3xl text-2xl text-center">
        CHESS NOTATION
      </h1>
      <div className="flex">
        <Image
          src={WhiteKing}
          className="drop-shadow-md sm:h-[250px] xs:h-[200px] h-[150px] xs:block hidden w-[250px]"
        />
        <h5 className="my-auto xs:leading-10 xs:text-base xs:px-2 xs:py-0 px-0 py-4 text-sm leading-10">
          Explore our playful chess notation games. With interactive quizzes and
          puzzles, you will master chess notation in no time.
        </h5>
      </div>
      <h4 className="text-center xs:text-2xl text-xl">VS</h4>
      <div className="flex">
        <h5 className="my-auto xs:leading-10 xs:text-base xs:px-2 xs:py-0 py-4 text-sm leading-10">
          Record your moves while playing the game on the board, then review and
          analyze your notations afterward.
        </h5>
        <Image
          src={BlackKing}
          className="drop-shadow-md sm:h-[250px] xs:h-[200px] h-[150px] xs:block hidden w-[250px]"
        />
      </div>
    </div>
  );
};

export default page;
