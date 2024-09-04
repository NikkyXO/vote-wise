import Image from 'next/image';
import { Dispatch, SetStateAction, useRef } from 'react';
import { copy } from '../../../public/images';
import { useLocalityHook } from '../context/LocationContext';

interface CopySecretKeyProps {
  handleCloseOverlay: () => void;
  setActiveModal: Dispatch<SetStateAction<Number>>;
  setShowConfirmationModal: Dispatch<SetStateAction<boolean>>;
  setShowCopySuccessModal: Dispatch<SetStateAction<boolean>>;
  children?: React.ReactNode;
}

const CopySecretKey: React.FC<CopySecretKeyProps> = ({
  handleCloseOverlay,
  setActiveModal,
  setShowConfirmationModal,
  setShowCopySuccessModal,
  children,
}) => {
  const handleContinue = () => {
    setActiveModal(7);
  };
  const handleCopy = async () => {
    if (inputRef.current) {
      try {
        await navigator.clipboard.writeText(inputRef.current.value);
        setShowCopySuccessModal(true);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  };
  const handleClose = () => {
    setShowConfirmationModal(true);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const {
    selectedCountry,
    setSelectedCountry,
    states,
    setStates,
    selectedState,
    setSelectedState,
  } = useLocalityHook();

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
  };

  return (
    <div className="bg-white p-4 rounded-lg relative w-[30%] h-[50%]  text-black text-center mt-[7%] ">
      <div className="w-full mt-10">
        <div>
          <div className="text-txt-24 font-bold">Secret Key</div>
          <div className="text-sm">
            Please copy your secret key now, it won't be
          </div>
          <div className="text-sm">displayed again</div>
        </div>
      </div>
      <div className="w-full mt-6">
        <div>
          {selectedCountry && (
            <div className="mt-4 w-full flex flex-row">
              <input
                ref={inputRef}
                type="text"
                title="secretKey"
                disabled={true}
                value="sk-yuposmm78akku80lllskjsy7w00olq"
                id="state"
                className="border w-[85%] p-2 rounded scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-200"
              ></input>
              <button
                className="px-3 ml-2 py-2 rounded-lg bg-primary text-white"
                onClick={async () => {
                  await handleCopy();
                }}
              >
                {' '}
                <Image
                  src={copy}
                  alt="Notification Icon"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="w-full mt-5">
        <button
          className="px-3 py-2 rounded-lg bg-gray-500 text-white"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
      <div className="text-xs text-red-500 mt-4">
        If you don't copy your secret key now, you won't be able to access it
        later. Please make sure to store it securely
      </div>
      {children}
    </div>
  );
};

export default CopySecretKey;
