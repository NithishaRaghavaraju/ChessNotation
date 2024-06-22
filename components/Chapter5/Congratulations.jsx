import whitediamondicon from "@/public/Icons/white_diamond.png"
import blackdiamondicon from "@/public/Icons/black_diamond.png"
import congratulations from "@/public/Images/Congratulations.png"
import Image from "next/image"

const Congratulations = () => {
  return (
    <div className="text-center lg-p-10 p-1 flex flex-col">
    <h6 className='text-center xs:py-7 xs:text-xl text-base py-2'>CHAPTER V : Congratulations</h6>
      <Image src={congratulations} className="mx-auto"/>
      <div className="text-left flex flex-col">
      <h5 className="flex py-4 sm:text-base xs:text-sm text-[12px]"><Image src={whitediamondicon} height={25} className="xl:h-full xs:h-1/2 h-[20px]"/><span className="px-5">Congratulations on mastering chess notation!</span></h5>
      <h5 className="flex py-4 sm:text-base xs:text-sm text-[12px]"><Image src={blackdiamondicon} height={25} className="xl:h-full xs:h-1/2 h-[20px]"/><span className="px-5">Now, head over to the home page, click on "Note Your Game," and start playing.</span></h5>
      
      </div>
    </div>
  )
}

export default Congratulations
