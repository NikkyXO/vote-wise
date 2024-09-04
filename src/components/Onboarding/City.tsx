import { Dispatch, SetStateAction } from 'react';
import { useLocalityHook } from '../context/LocationContext';

interface CityProps {
  handleCloseOverlay: () => void;
  setActiveModal: Dispatch<SetStateAction<Number>>;
}

const City: React.FC<CityProps> = ({ handleCloseOverlay, setActiveModal }) => {
  const handleContinue = () => {
    setActiveModal(4);
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
    console.log(event.target.value);
    setSelectedState(event.target.value);
    setActiveModal(4);
  };

  return (
    <div className="bg-white p-4 rounded-lg relative w-[30%] h-[50%]  text-black text-center mt-[7%] ">
      <div className="w-full mt-10">
        <div>
          <div className="text-txt-24 font-bold">Complete Registration</div>
          <div className="text-sm">Input City</div>
        </div>
      </div>
      <div className="w-full mt-6">
        <div>
          {selectedCountry && (
            <div className="mt-4">
              <label htmlFor="state">{}</label>
              <select
                id="state"
                value={selectedState}
                onChange={handleStateChange}
                className="border w-full p-2 rounded scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-200"
              >
                <option value="">{selectedState}</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
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

export default City;
