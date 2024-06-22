import Link from "next/link";
import notegame from "../public/Images/Note_your_game.png";
import learnnotate from "../public/Images/chess_notation.jpg";

const HomePage = () => {
  return (
    <div className="xl:mx-64 lg:mx-52 md:mx-20 sm:mx-8 mx-0 text-center">
      <h1 className="xl:text-6xl  md:text-5xl sm:text-4xl xxs:text-3xl text-2xl">
        CHESS NOTATION
      </h1>
      <div className="flex flex-col items-center mt-5 xl:flex xl:flex-row xl:justify-between">
        <div
          style={{
            backgroundImage: `url(${learnnotate.src})`,
            height: "400px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-[90%]  xxs:w-[85%]   xs:w-[60%]   xl:w-[45%] rounded-2xl border border-black flex flex-col justify-end px-10 mt-10"
        >
          <Link href="learning">
            <h5 className="text-md p-4 xl:text-lg xl:p-6 hover:border border-black  bg-white bg-opacity-80 mb-10 rounded-lg ">
              Learn Chess Notation
            </h5>
          </Link>
        </div>
        <div
          style={{
            backgroundImage: `url(${notegame.src})`,
            height: "400px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-[90%]  xxs:w-[85%]   xs:w-[60%]   xl:w-[45%] rounded-2xl border border-black flex flex-col justify-end px-10 mt-10"
        >
          <Link href="noteyourgame">
            <h5 className="texl-md p-4 xl:text-lg bg-white bg-opacity-80 mb-10 rounded-lg xl:p-6 hover:border border-black">
              Note your game
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
