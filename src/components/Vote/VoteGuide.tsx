import Image from "next/image"
import { video } from "../../../public/images/index"

const VoteGuide: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg w-[100%] sm:w-[60%]">
        <p className="text-xl sm:text-2xl xl:text-5xl font-700 text-center m-3">How to Use VoteWise</p>
        <Image src={video} alt="alt" className="w-full h-full" />

    </div>
  )
}

export default VoteGuide