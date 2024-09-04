import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { loader } from '../../../public/images';
import { useLocalityHook } from '../context/LocationContext';

interface CompleteRegistrationProps {
  handleCloseOverlay: () => void;
  setActiveModal: Dispatch<SetStateAction<Number>>;
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
  } = useLocalityHook();

  useEffect(() => {
    setTimeout(() => {
      setActiveModal(6);
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
