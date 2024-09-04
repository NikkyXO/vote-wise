import { Dispatch, SetStateAction } from 'react';
import { useLocalityHook } from '../context/LocationContext';

interface DateOfBirthProps {
  handleCloseOverlay: () => void;
  setActiveModal: Dispatch<SetStateAction<Number>>;
}

const DateOfBirth: React.FC<DateOfBirthProps> = ({
  handleCloseOverlay,
  setActiveModal,
}) => {
  const handleContinue = () => {
    if (!dob) {
      setIsError(true);
      setErrorMessage('Please select your date of birth!');
      return;
    }

    setActiveModal(2);
  };

  const { setDob, setIsError, dob, setErrorMessage, isError, errorMessage } =
    useLocalityHook();

  function calculateAge(dob: string): number {
    const dobDate = new Date(dob);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - dobDate.getFullYear();
    const monthDiff = currentDate.getMonth() - dobDate.getMonth();
    const dayDiff = currentDate.getDate() - dobDate.getDate();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  }

  const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const age = calculateAge(event.target.value);
    if (age < 18) {
      setIsError(true);
      setErrorMessage('You must be at least 18 years old to proceed.');
      return;
    }
    setDob(event.target.value);
    setActiveModal(2);
  };

  return (
    <div className="bg-white p-4 rounded-lg relative w-[30%] h-[50%]  text-black text-center mt-[10%] ">
      <div className="w-full mt-10">
        <div>
          <div className="text-txt-24 font-bold">Enter your date of birth</div>
          <div className="text-sm">select date of birth</div>
        </div>
      </div>
      <div className="w-full mt-6">
        <input
          type="date"
          placeholder="Enter your wallet address"
          className="w-full border-2 border-primary text-primary bg-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={handleStateChange}
        />
      </div>
      <div className="w-full mt-8">
        <button
          className="px-3 py-2 rounded-lg bg-primary text-white"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
      {isError && (
        <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
      )}
    </div>
  );
};

export default DateOfBirth;
