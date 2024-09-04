import Image from "next/image"
import { video } from "../../../public/images/index"

const VoteGuide: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg">
        <p className="text-2xl text-center m-3">How to Use VoteWise</p>
        <Image src={video} alt="alt" className="w-full h-full" />

    </div>
  )
}

export default VoteGuide