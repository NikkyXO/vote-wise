import Image from 'next/image';
import { useState } from 'react';
import {
    notification,
    avatar,
    logo,
    bgHome,
    timer
} from '../../../../public/images/index.js';
import LocationProvider from '../../context/LocationContext.jsx';
// import { useRouter } from 'next/router.js';


const Category: React.FC = () => {

  return (
    <LocationProvider>
    {/* <Overlay showOverlay={showOverlay} onClose={handleCloseOverlay}> */}
    <div className="bg-black opacity-70 z-[-2] w-full h-full fixed">

    </div>
<Image src={bgHome} alt="Background" className="fixed -z-10 w-[100vw] h-[100vh]"  />
<div className='bg-HomeImage w-full h-full z-20'>
<section className="w-full py-2 px-8 h-[15%] flex flex-row justify-between pt-8">
      <div>
        <Image src={logo} alt="Logo" width={157} height={38} />
      </div>
      <div className="flex flex-row">
        <div className="mr-10 text-txt-24 text-white  border-white border-b-[2px] font-400">Voting Event</div>
        <div className="text-txt-24 text-white font-400">Support</div>
      </div>
      <div className="flex flow-rw">
        <div className="cursor-pointer">
          <Image
            src={notification}
            alt="Notification Icon"
            width={32}
            height={32}
          />
        </div>
        <div className="cursor-pointer">
          <Image
            src={avatar}
            alt="Notification Icon"
            width={32}
            height={32}
          />
        </div>
      </div>
    </section>
    
    {/*  */}
    <div className="flex flex-row justify-end items-center px-8">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-lg text-white">Voting Time</p>
            <div className="rounded-lg shadow-md shadow-fuchsia-800 bg-black p-3 text-base text-white">72 : 03 : 00</div>
          </div>
        </div>
    </div>
    </LocationProvider>
  )
}

export default Category