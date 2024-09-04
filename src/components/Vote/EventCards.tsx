import React from 'react'
import Image from 'next/image';
import { purpleArr} from '../../../public/images/index.js';

interface UserProps {
    desc: string;
    title: string; 
    navPage:string// Optional property
  }

const EventCards = ({title, desc, navPage}: UserProps) => {
  return (
    <div className="bg-white rounded-2xl max-h-28 shadow-lg shadow-gray-500 py-4 px-10  flex justify-center items-center relative">
        <div className="flex items-center gap-3 justify-between">
        <div className="text-black">

        <div className="text-xl font-400">{title}</div>
        <div className="text-base">{desc}</div>
        </div>
        <button>
        <Image src={purpleArr} alt="next" className='cursor-pointer' width={40} height={40} />
        </button>
        </div>
    <div className="w-[100%] bg-gray-400 max-h-28 rounded-2xl py-4 px-10  flex justify-center items-center absolute top-[5px] -z-[2] right-[-5px]">
    <div className="flex items-center justify-between">
        <div className="text-black">

        <div className="text-xl font-400">{title}</div>
        <div className="text-base">{desc}</div>
        </div>
        <button>
        <Image src={purpleArr} alt="next" className='cursor-pointer' width={40} height={40} />
        </button>
        </div>
    </div>
    </div>
  )
}

export default EventCards


//background: linear-gradient(180deg, #741CAC 0%, #2F0B46 100%);
