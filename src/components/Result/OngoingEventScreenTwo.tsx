import Image from 'next/image';
import { ReactNode } from 'react';
import {
  avatar,
  bgHome,
  close,
  logo,
  notification,
  profilePix,
} from '../../../public/images/index.js';
import LocationProvider, { useLocalityHook } from '../context/LocationContext';

interface OverlayProps {
  children: ReactNode;
}
type Candidate = {
  candidateName: string;
  candidatePhoto: string;
  politicalParty: string;
  action: string;
};

const OngoingEventScreenTwo: React.FC<OverlayProps> = ({ children }) => {
  const { setShowSuccessModal, showSuccessModal } = useLocalityHook();
  let candidates: Candidate[] = [
    {
      candidateName: 'Adah Olotu',
      candidatePhoto: `The Presidential Election is Nigeria's most critical and widely anticipated voting event.`,
      politicalParty: 'All  Progressive Congress',
      action: '',
    },
    {
      candidateName: 'Nike Ola',
      candidatePhoto: `The Presidential Election is Nigeria's most critical and widely anticipated voting event.`,
      politicalParty: 'Labour Party',
      action: '',
    },
    {
      candidateName: 'Rauf Ali',
      candidatePhoto: `The Presidential Election is Nigeria's most critical and widely anticipated voting event.`,
      politicalParty: 'People Democratic Party',
      action: '',
    },
    {
      candidateName: 'Peter Obi',
      candidatePhoto: `The Presidential Election is Nigeria's most critical and widely anticipated voting event.`,
      politicalParty: 'All  Progressive Congress',
      action: '',
    },
    {
      candidateName: 'Barrack Obama',
      candidatePhoto: `The Presidential Election is Nigeria's most critical and widely anticipated voting event.`,
      politicalParty: 'New Nigeria People’s Party',
      action: '',
    },
  ];

  return (
    <LocationProvider>
      {/* <Overlay showOverlay={showOverlay} onClose={handleCloseOverlay}> */}
      <div className="bg-black opacity-70 z-[-2] w-full h-full fixed"></div>
      <Image
        src={bgHome}
        alt="Background"
        className="fixed -z-10 w-[100vw] h-[100vh]"
      />
      <div className="bg-HomeImage w-full h-full z-20">
        <section className="w-full py-2 px-8 h-[15%] flex flex-row justify-between pt-8">
          <div>
            <Image src={logo} alt="Logo" width={157} height={38} />
          </div>
          <div className="flex flex-row">
            <div className="mr-10 text-txt-24 text-white  border-white border-b-[2px] font-400">
              Voting Event
            </div>
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
            <div className="rounded-lg shadow-md shadow-fuchsia-800 bg-black p-3 text-base text-white">
              72 : 03 : 00
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[96%] height-control bg-white p-2 mt-10 mx-auto rounded-2xl mb-4"
        style={{ minHeight: '200px' }}
      >
        <div className=" py-2 w-full flex flex-row space-x-2">
          <div className=" w-[90%] text-center text-lg font-bold">
            On going event
          </div>
          <div className=" w-[10%] flex flex-row items-center justify-end pr-3">
            <div>
              <Image
                src={close}
                alt="Close Icon"
                width={15}
                height={15}
                className="cursor-pointer"
                onClick={() => true}
              />
            </div>
          </div>
        </div>

        <div className="w-[94%] border mx-auto mt-10 mb-10 p-2">
          <div className="flex flex-row justify-between mb-4 w-full space-x-2">
            <p className="w-[30%]">Candidate</p>
            <p className="w-[60%] ">Political party</p>
            <p className="w-[10%]  text-center ml-4">Action</p>
          </div>

          {candidates.map((value, i) => {
            return (
              <div className="flex flex-row justify-between w-full py-4 space-x-2 cursor-pointer hover:bg-[#EFDEFA] pl-2 rounded-md">
                <p className="w-[30%]">
                  {
                    <div className="flex flex-row space-x-2 items-center">
                      <div className="">
                        <Image
                          src={profilePix}
                          alt="Close Icon"
                          width={30}
                          height={30}
                          className="cursor-pointer"
                          onClick={() => true}
                        />
                      </div>
                      <div className="">{value.candidateName}</div>
                    </div>
                  }
                </p>
                <p className="w-[60%] relative ">
                  <div>{value.politicalParty}</div>
                </p>
                <p className="w-[10%]">
                  <div className="w-full flex flex-row items-center justify-end mr-2">
                    <button
                      className="px-2 py-1 rounded-lg bg-primary text-white"
                      onClick={() => {
                        setShowSuccessModal(true);
                        console.log(
                          'clicked setShowSuccessModal',
                          showSuccessModal
                        );
                      }}
                    >
                      Vote Now
                    </button>
                  </div>
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {children}
    </LocationProvider>
  );
};

export default OngoingEventScreenTwo;
