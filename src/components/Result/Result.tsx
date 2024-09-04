import Image from 'next/image';
import { useState } from 'react';
import {
    notification,
    avatar,
    logo,
    bgHome,
    timer
} from '../../../public/images/index.js';
import LocationProvider from '../context/LocationContext';
import PollCards from './PollCards';
import LineChart from './LineChart';
// import { useRouter } from 'next/router.js';


function Result() {

    type PollCards = {
        party: string;
    votes: string;
      };
    let PollCardsArr: PollCards[] = [
      {
        party: "New Nigeria Peoples Party",
        votes: "1.2 million"
      },
      {
        party: "All Progressive Grand Alliance",
        votes: "15.2 million"
      },
      {
        party: "People Democratic Party",
        votes: "2.2 million"
      },
      {
        party: "Labour Party",
        votes: "8.2 million"
      },
      {
        party: "All Progressive Congress",
        votes: "31.2 million"
      }
    ];
    
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
    <div className="my-4 mb-8">

    <p className="text-center text-4xl text-white">Presidential Election</p>
    </div>

    {/*  */}
    <div className="flex justify-between gap-4 px-8">

    <PollCards PollResultArr={PollCardsArr} />
    <div className="bg-white rounded-lg shadow-md p-8">
        <LineChart />
    </div>
    </div>
    </LocationProvider>
  )
}

export default Result