import Image from 'next/image';

import { useState } from 'react';
import {
  avatar,
  businessman,
  logo,
  notification,
} from '../../../public/images/index.js';
import LocationProvider from '../context/LocationContext';
import Overlay from '../Overlay/Overlay';
import DateOfBirth from './DateOfBirth';
import WalletAddress from './WalletAddress';

import UserProof from '../../utils/RegisterUser';
import { hashCountryName } from '@/utils/hashCountryName.js';

const Onboarding: React.FC<{ eligibilitySource: string }> = ({
  eligibilitySource,
}) => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<Number>(1);

  const handleOpenOverlay = () => setShowOverlay(true);
  const handleCloseOverlay = () => setShowOverlay(false);

  const userProof = new UserProof(eligibilitySource);
  // const reducedHash = hashCountryName(CountryName)
  console.log({hash: hashCountryName('Nigerian')})
  userProof.registerUser({
    year: "1999",
    month: "02",
    day: "24",
    voter_id: "100002",
    reducedHash: "0x",
    address: "zamfara"
  })

  return (
    <LocationProvider>
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
                <button
                  className="px-3 py-2 rounded-lg bg-white text-primary"
                  onClick={handleOpenOverlay}
                >
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

        {/* Overlay Component */}
        {activeModal === 1 && showOverlay && (
          <Overlay showOverlay={showOverlay} onClose={handleCloseOverlay}>
            <WalletAddress
              handleCloseOverlay={handleCloseOverlay}
              setActiveModal={setActiveModal}
            />
          </Overlay>
        )}
        {activeModal === 2 && showOverlay && (
          <Overlay showOverlay={showOverlay} onClose={handleCloseOverlay}>
            <DateOfBirth
              handleCloseOverlay={handleCloseOverlay}
              setActiveModal={setActiveModal}
            />
          </Overlay>
        )}
      </div>
    </LocationProvider>
  );
};

export default Onboarding;
