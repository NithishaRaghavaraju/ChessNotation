import whitediamondicon from "@/public/Icons/white_diamond.png"
import blackdiamondicon from "@/public/Icons/black_diamond.png"
import Image from "next/image"

const GetStarted = () => {
  return (
    <div className="text-center xl:p-10 py-10">
      <h4 className="xl:text-4xl  md:text-3xl sm:text-2xl xxs:text-xl text-lg py-4">Learn</h4>
      <h1 className="xl:text-6xl  md:text-5xl sm:text-4xl xxs:text-2xl text-[23px] py-4">CHESS NOTATION</h1>
      <div className="text-left">
      <h5 className="flex py-4 sm:text-base xs:text-sm text-[12px]"><Image src={whitediamondicon} height={25} className="xl:h-full xs:h-1/2 h-[20px]"/><span className="px-5">Upcoming interactive games designed to help you master chess notation.</span></h5>
      <h5 className="flex py-4 sm:text-base xs:text-sm text-[12px]"><Image src={blackdiamondicon} height={25} className="xl:h-full xs:h-1/2 h-[20px]"/><span className="px-5">Feel free to click on the solution, if you find it challenging.</span></h5>
      <h5 className="flex pt-4 sm:text-base xs:text-sm text-[12px]"><Image src={whitediamondicon} height={25} className="xl:h-full xs:h-1/2 h-[20px]"/><span className="px-5">Keep playing the game repeatedly by clicking on replay button until you grasp its meaning.</span></h5>
      </div>
    </div>
  )
}

export default GetStarted
