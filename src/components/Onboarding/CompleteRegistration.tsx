import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { keccak256 } from 'web3-utils';
import { loader } from '../../../public/images';
import { useEthereum } from '../Context';
import { useLocalityHook } from '../context/LocationContext';
import { VoteContractConfig } from '../contracts';

interface CompleteRegistrationProps {
  handleCloseOverlay: () => void;
  setActiveModal: Dispatch<SetStateAction<Number>>;
}

interface CountryData {
  country: string;
  states: string[];
}

const CompleteRegistration: React.FC<CompleteRegistrationProps> = ({
  handleCloseOverlay,
  setActiveModal,
}) => {
  const {
    selectedCountry,
    setSelectedCountry,
    states,
    setStates,
    selectedState,
    setSelectedState,
    dob,
    setIsError,
    setErrorMessage,
  } = useLocalityHook();

  const { account, getZKsync } = useEthereum();

  const VerifyData = async () => {
    const zkSync = getZKsync();
    if (zkSync) {
      const contract = new zkSync.L2.eth.Contract(
        VoteContractConfig.abi,
        VoteContractConfig.address
      );
      const hashAddress = keccak256(account.address as string);
      console.log({ hashAddress });
      const isVerified = await contract.methods
        .addVerifiedVoter(hashAddress)
        .call();
      console.log(isVerified);
      return isVerified;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      console.log(selectedCountry, selectedState, dob);

      setActiveModal(5);
    }, 2000);
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg relative w-[30%] h-[50%]  text-black text-center mt-[7%] ">
      <div className="w-full h-full flex flex-row items-center justify-center">
        <div>
          <Image
            src={loader}
            alt="Notification Icon"
            width={45}
            height={45}
            className="animate-rotate"
          />
        </div>
      </div>
    </div>
  );
};

export default CompleteRegistration;
