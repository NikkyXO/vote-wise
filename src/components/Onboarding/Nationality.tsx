import { Dispatch, SetStateAction } from 'react';
import countriesAndCities from '../../data/countriesAndCities.json';
import { useLocalityHook } from '../context/LocationContext';

interface NationalityProps {
  handleCloseOverlay: () => void;
  setActiveModal: Dispatch<SetStateAction<Number>>;
}

const Nationality: React.FC<NationalityProps> = ({
  handleCloseOverlay,
  setActiveModal,
}) => {
  const handleContinue = () => {
    if (!selectedCountry) {
      setIsError(true);
      setErrorMessage('Please select a country');
      return;
    }
    setActiveModal(4);
  };

  interface CountryData {
    country: string;
    states: string[];
  }

  const {
    selectedCountry,
    setSelectedCountry,
    states,
    setStates,
    selectedState,
    setSelectedState,
    isError,
    setIsError,
    errorMessage,
    setErrorMessage,
  } = useLocalityHook();

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const country = event.target.value;
    setSelectedCountry(country);

    const selectedCountryData = countriesAndCities.find(
      (c: CountryData) => c.country === country
    );

    setStates(selectedCountryData ? selectedCountryData.states : []);
    setSelectedState(''); // Reset state selection when country changes
    setActiveModal(4);
  };

  return (
    <div className="bg-white p-4 rounded-lg relative w-[30%] h-[50%]  text-black text-center mt-[7%] ">
      <div className="w-full mt-10">
        <div>
          <div className="text-txt-24 font-bold">Complete Registration</div>
          <div className="text-sm">Input nationality</div>
        </div>
      </div>
      <div className="w-full mt-6">
        <div>
          <select
            id="country"
            value={selectedCountry}
            onChange={handleCountryChange}
            className={`border p-2 w-full rounded scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-200 `}
          >
            <option value=""></option>
            {countriesAndCities.map((countryData: CountryData) => (
              <option key={countryData.country} value={countryData.country}>
                {countryData.country}
              </option>
            ))}
          </select>
          <label htmlFor="country" className="text-red-500 mt-1">
            {isError && errorMessage}
          </label>
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

export default Nationality;
