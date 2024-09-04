import { Dispatch, SetStateAction } from 'react';
import { useLocalityHook } from '../context/LocationContext';

interface VerifySecretKeyProps {
  handleCloseOverlay: () => void;
  setActiveModal: Dispatch<SetStateAction<Number>>;
}

const VerifySecretKey: React.FC<VerifySecretKeyProps> = ({
  handleCloseOverlay,
  setActiveModal,
}) => {
  const handleContinue = () => {
    setActiveModal(8);
  };

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
          <div className="text-txt-24 font-bold">Complete Registration</div>
          <div className="text-sm">Input VerifySecretKey</div>
        </div>
      </div>
      <div className="w-full mt-6">
        <div>
          {selectedCountry && (
            <div className="mt-4">
              <input
                type="text"
                title="userSecretKey"
                placeholder="Paste your secret key here..."
                id="secretKey"
                className="border w-full p-2 rounded scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-200"
              ></input>
            </div>
          )}
        </div>
      </div>
      <div className="w-full mt-8">
        <button
          className="px-3 py-2 rounded-lg bg-primary text-white"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default VerifySecretKey;
