import Image from 'next/image';

import {
  avatar,
  businessman,
  logo,
  notification,
} from '../../../public/images/index.js';

function Onboarding() {
  return (
    <div className="w-full h-screen bg-primary  text-white box-border ">
      {/* Top section  */}
      <section className="w-full py-2 px-8 h-[15%] flex flex-row justify-between pt-8">
        <div>
          <Image src={logo} alt="Logo" width={157} height={38} />
        </div>
        <div className="flex flex-row">
          <div className="mr-10 text-txt-24 font-400">Voting Event</div>
          <div className="text-txt-24 font-400">Support</div>
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
      {/* Lower Section  */}
      <section className="w-full h-[85%] flex flex-row justify-between">
        <div className="w-[58%] h-full ">
          <div className="w-[92%] h-[48%] z-20 ml-[10%] mt-[10%]">
            <div className="text-txt-64 font-700">
              Revolutionizing the Way You Vote
            </div>
            <div className="text-txt-32 font-400 mt-2">
              A cutting-edge voting platform that leverages blockchain
              technology to deliver a secure voting experience
            </div>
            <div className="mt-3">
              <button className="px-3 py-2 rounded-lg bg-white text-primary">
                Register
              </button>
              <button className="px-3 py-2 ml-2 rounded-lg text-white">
                verify
              </button>
            </div>
          </div>
        </div>
        <div className="w-[42%] h-full z-10">
          <Image
            src={businessman}
            alt="Notification Icon"
            style={{ width: '75%', height: '100%' }}
          />
        </div>
      </section>
    </div>
  );
}

export default Onboarding;
