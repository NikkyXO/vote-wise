import { Dispatch, SetStateAction } from 'react';
import { useLocalityHook } from '../context/LocationContext';

interface CancellationConfirmationProps {
  handleCloseOverlay: () => void;
  setActiveModal: Dispatch<SetStateAction<Number>>;
  setShowConfirmationModal: Dispatch<SetStateAction<boolean>>;
  showConfirmationModal: boolean;
}

const CancellationConfirmation: React.FC<CancellationConfirmationProps> = ({
  handleCloseOverlay,
  setActiveModal,
  setShowConfirmationModal,
  showConfirmationModal,
}) => {
  const handleClose = () => {
    setActiveModal(7);
  };
  const handleGoBack = () => {
    setShowConfirmationModal(false);
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
      className={`bg-white p-4 rounded-lg w-full h-full  text-black text-center absolute inset-0 ${showConfirmationModal ? '' : 'hidden'} `}
    >
      <div className="w-full h-full flex flex-row justify-center">
        <div className="w-full mt-20 items-center justify-center">
          <div className="text-txt-24 font-bold mb-3">Kindly Confirm</div>
          <div className="text-sm">
            Are you sure you want to close without copying your secret key? You
            won't be able to access it later.
          </div>
          <div className=" mt-4 space-x-4">
            <button
              className="px-3 py-1.5 rounded-lg bg-[#EFDEFA] border-2 border-primary text-primary"
              onClick={handleCloseOverlay}
            >
              Yes, Close
            </button>
            <button
              className="px-3 py-1.5 rounded-lg bg-primary text-white"
              onClick={handleGoBack}
            >
              No, go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationConfirmation;
