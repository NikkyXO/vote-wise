import React from 'react'
import Image from 'next/image';
import { purpleArr} from '../../../public/images/index.js';

interface UserProps {
    desc: string;
    title: string; 
    navPage:string
  }

  const EventCards: React.FC<UserProps> = ({title, desc, navPage}) => {
  return (
    <div className="bg-white w-[100%] sm:w-[45vw] md:w-[30vw] rounded-2xl max-h-28 shadow-lg shadow-gray-500 py-4 xl:py-8 px-5 lg:px-10  flex justify-between items-center relative">
        <div className="w-full flex items-center gap-3 justify-between">
        <div className="text-black">

        <div className="text-base lg:text-xl xl:text-3xl font-400">{title}</div>
        <div className="text-sm lg:text-base xl:text-2xl">{desc}</div>
        </div>
        <button>
        <Image src={purpleArr} alt="next" className='cursor-pointer w-8 h-8 md:w-12 md:h-12 xl:w-16 xl:h-16' />
        </button>
        </div>
    <div className="w-[100%] bg-gray-400 h-[100%] rounded-2xl py-4 px-10  flex justify-center items-center absolute top-[5px] -z-[2] right-[-5px]">
    
    </div>
    </div>
  )
}

export default EventCards


//background: linear-gradient(180deg, #741CAC 0%, #2F0B46 100%);
