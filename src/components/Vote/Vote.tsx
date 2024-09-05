import Image from 'next/image';
import { useState } from 'react';
import {
    successPurple,
    businessman,
    notification,
    avatar,
    logo,
    bgHome,
    video,
    timer
} from '../../../public/images/index.js';
import LocationProvider from '../context/LocationContext';
// import Overlay from '../Overlay/Overlay';
import EventCards from './EventCards';
import CandidatesPreview from './CandidatesPreview';
import VoteGuide from './VoteGuide';
{/*  */}

const Vote = () => {
    const [showOverlay, setShowOverlay] = useState<boolean>(false);

    const handleOpenOverlay = () => setShowOverlay(true);
    const handleCloseOverlay = () => setShowOverlay(false);
type Event = {
    title: string;
    desc: string;
    navPage: string;
  };
  type Candidate = {
    candidateName: string;
    candidateParty: string;
    candidateIdeology: string;
    candidateImage: string
  };

  let CandidateArr: Candidate[] =[
    {
        candidateName: "Olanike Ogundiran",
        candidateParty: "Labour Party",
        candidateIdeology: "Labour Way",
        candidateImage: "string"
    },
    {
        candidateName: "Olanike Ogundiran",
        candidateParty: "Labour Party",
        candidateIdeology: "Labour Way",
        candidateImage: "string"
    },
    {
        candidateName: "Olanike Ogundiran",
        candidateParty: "Labour Party",
        candidateIdeology: "Labour Way",
        candidateImage: "string"
    },
    {
        candidateName: "Olanike Ogundiran",
        candidateParty: "Labour Party",
        candidateIdeology: "Labour Way",
        candidateImage: "string"
    }
  ];
  let eventsArr: Event[] = [
    {
      title: "On going Event",
      desc: "2 events available. Cast your vote now",
      navPage: ""
    },
    {
      title: "Upcoming Voting Events",
      desc: "3 events starting soon",
      navPage: ""
    },
    {
      title: "Past Voting Events/Results",
      desc: "View results for the latest voting events",
      navPage: ""
    }
  ];
  

    return (
    <LocationProvider>
        {/* <Overlay showOverlay={showOverlay} onClose={handleCloseOverlay}> */}
        <div className="bg-black opacity-70 z-[-2] w-full h-full fixed">

    </div>
<Image src={bgHome} alt="Background" className="fixed -z-10 w-[100vw] h-[100vh]"  />
<div className='bg-HomeImage w-full h-full z-20'>
<section className="w-full py-2 lg:px-8 px-2 h-[15%] flex flex-row justify-between pt-8">
      <div>
        <Image src={logo} alt="Logo" className='w-20 sm:w-36 xl:w-48 h-6 xl:h-12 sm:h-10'  />
      </div>
      <div className="flex flex-row">
        <div className="mr-10 text-xs sm:text-txt-24 xl:text-3xl text-white  border-white border-b-[2px] font-400">Voting Event</div>
        <div className="text-sm sm:text-txt-24 xl:text-3xl text-white font-400">Support</div>
      </div>
      <div className="flex flow-rw">
        <div className="cursor-pointer">
          <Image
            src={notification}
            alt="Notification Icon"
            className='w-5 sm:w-8 h-5 sm:h-8'
          />
        </div>
        <div className="cursor-pointer">
          <Image
            src={avatar}
            alt="Notification Icon"
            className='w-5 sm:w-8 h-5 sm:h-8'
          />
        </div>
      </div>
    </section>
    
    {/*  */}
    <div className="flex flex-row justify-end items-center lg:px-8 px-2">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="sm:text-lg xl:text-3xl text-xs text-white">Voting Time</p>
            <div className="rounded-lg shadow-md shadow-fuchsia-800 bg-black p-2 xl:p-6 sm:p-3 xl:text-2xl text-sm sm:text-base text-white">72 : 03 : 00</div>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-row items-center px-7">
          <div className="flex flex-col gap-2 justify-center">
            <p className="text-base md:text-2xl text-white">Welcome back, Nike!</p>
            <p className="text-sm md:text-md text-white">Ready to cast your vote?</p>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col sm:flex-row flex-wrap md:flex-nowrap justify-between gap-3 items-start md:items-center px-6 my-3 mb-6">
        {
            eventsArr.map((eventItem, index)=><EventCards title={eventItem.title} desc={eventItem.desc} navPage={eventItem.navPage} key={index} />)
        }
        </div>

        {/* */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-3 items-center sm:items-start px-6">

            <div className="w-[100%] md:w-[40%] h-full">
                <CandidatesPreview category='Presidential' CandidatesArr={CandidateArr} />
            </div>
            <VoteGuide />
        </div>
    </div>
        {/* </Overlay> */}
    </LocationProvider>
  )
}

export default Vote