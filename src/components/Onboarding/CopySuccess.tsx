import { Dispatch, SetStateAction } from 'react';
import { useLocalityHook } from '../context/LocationContext';

interface CopySuccessProps {
  handleCloseOverlay: () => void;
  setActiveModal: Dispatch<SetStateAction<Number>>;
  setShowCopySuccessModal: Dispatch<SetStateAction<boolean>>;
  showCopySuccessModal: boolean;
}

const CopySuccess: React.FC<CopySuccessProps> = ({
  handleCloseOverlay,
  setActiveModal,
  showCopySuccessModal,
  setShowCopySuccessModal,
}) => {
  const handleClose = () => {
    setActiveModal(7);
  };
  const handleGoBack = () => {
    setShowCopySuccessModal(false);
  };

  const {
    selectedCountry,
    setSelectedCountry,
    states,
    setStates,
    selectedState,
    setSelectedState,
  } = useLocalityHook();

  return (
    <div
      className={`bg-white p-4 rounded-lg w-full h-full  text-black text-center absolute inset-0 ${showCopySuccessModal ? '' : 'hidden'} `}
    >
      <div className="w-full h-full flex flex-row justify-center">
        <div className="w-full mt-20 items-center justify-center">
          <div className="text-sm">
            Secret key successfully copied to clipboard!
          </div>
          <div className=" mt-4">
            <button
              className="px-3 py-1.5 rounded-lg bg-primary text-white"
              onClick={handleGoBack}
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopySuccess;
