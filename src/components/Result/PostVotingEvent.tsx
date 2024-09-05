import Image from 'next/image';
import { useRouter } from 'next/router.js';
import {
  avatar,
  bgHome,
  close,
  logo,
  notification,
  stopWatch,
} from '../../../public/images/index.js';
import LocationProvider from '../context/LocationContext';

interface OverlayProps {}

const PostVotingEvent: React.FC<OverlayProps> = () => {
  const router = useRouter();
  type OngoingEvent = {
    Category: string;
    Description: string;
    Status: string;
    VoteDuration: string;
  };

  let OngoingEvents: OngoingEvent[] = [
    {
      Category: 'Presidential',
      Description: `The Presidential Election is Nigeria's most critical and widely anticipated voting event.`,
      Status: 'In Progress',
      VoteDuration: '24 hours left',
    },
    {
      Category: 'Senatorial',
      Description: `The Presidential Election is Nigeria's most critical and widely anticipated voting event.`,
      Status: 'In Progress',
      VoteDuration: '24 hours left',
    },
    {
      Category: 'Gubernatorial Position',
      Description: `Governors are the chief executives of Nigeria's 36 states, responsible for implementing state policies and overseeing the state government.`,
      Status: 'In Progress',
      VoteDuration: '24 hours left',
    },
  ];

  return (
    <LocationProvider>
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
            Past Voting Events/Results
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
            <p className="w-[15%]">Category</p>
            <p className="w-[55%] ">Description</p>
            <p className="w-[15%]">Status</p>
            <p className="w-[15%]">Vote Duration</p>
          </div>

          {OngoingEvents.map((value, index) => {
            return (
              <div key={index} className="flex flex-row justify-between w-full py-4 space-x-2 cursor-pointer hover:bg-[#EFDEFA] pl-2 rounded-md">
                <p className="w-[15%]">{value.Category}</p>
                <p className="w-[55%] relative ">
                  <div>{value.Description}</div>
                  <div className="absolute inset-0 w-full ">
                    <div className="w-full flex flex-row items-center justify-end mr-2">
                      <button
                        className="px-2 py-1 rounded-lg bg-primary text-white"
                        onClick={() => router.push('candidates')}
                      >
                        view
                      </button>
                    </div>
                  </div>
                </p>
                <p className="w-[15%]">
                  {
                    <div className="flex flex-row space-x-2 items-center">
                      <div className="">
                        <Image
                          src={stopWatch}
                          alt="Close Icon"
                          width={15}
                          height={15}
                          className="cursor-pointer"
                          onClick={() => true}
                        />
                      </div>
                      <div className="">{value.Status}</div>
                    </div>
                  }
                </p>
                <p className="w-[15%]">{value.VoteDuration}</p>
              </div>
            );
          })}
        </div>
      </div>
    </LocationProvider>
  );
};

export default PostVotingEvent;
