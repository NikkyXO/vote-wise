import Image from 'next/image';
import { keccak256 } from 'web3-utils';
import { useEthereum } from './../Context';

import { useState } from 'react';
import {
  avatar,
  businessman,
  logo,
  notification,
} from '../../../public/images/index.js';
import LocationProvider from '../context/LocationContext';
import Overlay from '../Overlay/Overlay';
import CancellationConfirmation from './CancellationConfirmation';
import City from './City';
import CompleteRegistration from './CompleteRegistration';
import CopySecretKey from './CopySecretKey';
import CopySuccess from './CopySuccess';
import DateOfBirth from './DateOfBirth';
import Nationality from './Nationality';
import SuccessPage from './SuccessPage';
import VerifySecretKey from './VerifySecretKey';
import WalletAddress from './WalletAddress';

import UserProof from '../../utils/RegisterUser';
import { hashCountryName } from '@/utils/hashCountryName.js';

const Onboarding: React.FC<{ eligibilitySource: string }> = ({
  eligibilitySource,
}) => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<Number>(1);
  const [showConfirmationModal, setShowConfirmationModal] =
    useState<boolean>(false);
  const [showCopySuccessModal, setShowCopySuccessModal] =
    useState<boolean>(false);

  const handleOpenOverlay = () => setShowOverlay(true);
  const handleCloseOverlay = () => setShowOverlay(false);

  const handleVerify = () => {};

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
        <section className="w-full h-[85%] flex flex-row justify-between px-8">
          <div className="w-[58%] h-full ">
            <div className="w-[100%] h-[48%] z-20  mt-[10%]">
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
                <button
                  className="px-3 py-2 ml-2 rounded-lg text-white"
                  onClick={handleVerify}
                >
                  verify
                </button>
              </div>
            </div>
          </div>
          <div className="w-[42%] h-full z-10">
            <Image
              src={businessman}
              alt="Notification Icon"
              style={{ width: '90%', height: '100%' }}
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
        {activeModal === 3 && showOverlay && (
          <Overlay showOverlay={showOverlay} onClose={handleCloseOverlay}>
            <Nationality
              handleCloseOverlay={handleCloseOverlay}
              setActiveModal={setActiveModal}
            />
          </Overlay>
        )}
        {activeModal === 4 && showOverlay && (
          <Overlay showOverlay={showOverlay} onClose={handleCloseOverlay}>
            <City
              handleCloseOverlay={handleCloseOverlay}
              setActiveModal={setActiveModal}
            />
          </Overlay>
        )}
        {activeModal === 5 && showOverlay && (
          <Overlay showOverlay={showOverlay} onClose={handleCloseOverlay}>
            <CompleteRegistration
              handleCloseOverlay={handleCloseOverlay}
              setActiveModal={setActiveModal}
            />
          </Overlay>
        )}
        {activeModal === 6 && showOverlay && (
          <Overlay showOverlay={showOverlay} onClose={handleCloseOverlay}>
            <SuccessPage
              handleCloseOverlay={handleCloseOverlay}
              setActiveModal={setActiveModal}
            />
          </Overlay>
        )}
        {activeModal === 7 && showOverlay && (
          <Overlay showOverlay={showOverlay} onClose={handleCloseOverlay}>
            <CopySecretKey
              handleCloseOverlay={handleCloseOverlay}
              setActiveModal={setActiveModal}
              setShowConfirmationModal={setShowConfirmationModal}
              setShowCopySuccessModal={setShowCopySuccessModal}
            >
              <>
                <CancellationConfirmation
                  handleCloseOverlay={handleCloseOverlay}
                  setActiveModal={setActiveModal}
                  setShowConfirmationModal={setShowConfirmationModal}
                  showConfirmationModal={showConfirmationModal}
                />
                <CopySuccess
                  handleCloseOverlay={handleCloseOverlay}
                  setActiveModal={setActiveModal}
                  setShowCopySuccessModal={setShowCopySuccessModal}
                  showCopySuccessModal={showCopySuccessModal}
                />
              </>
            </CopySecretKey>
          </Overlay>
        )}

        {activeModal === 8 && showOverlay && (
          <Overlay showOverlay={showOverlay} onClose={handleCloseOverlay}>
            <VerifySecretKey
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
