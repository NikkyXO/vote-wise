import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { success } from '../../../public/images';
import { useLocalityHook } from '../context/LocationContext';

interface SuccessPageProps {
  handleCloseOverlay: () => void;
  setActiveModal: Dispatch<SetStateAction<Number>>;
}

const SuccessPage: React.FC<SuccessPageProps> = ({
  handleCloseOverlay,
  setActiveModal,
}) => {
  const handleContinue = () => {
    setActiveModal(7);
  };

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
      // handleCloseOverlay();
      setActiveModal(7);
    }, 2000);
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg relative w-[30%] h-[50%]  text-black text-center mt-[7%] ">
      <div className="w-full h-full flex flex-row items-center justify-center">
        <div>
          <Image
            src={success}
            alt="Notification Icon"
            width={80}
            height={80}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
