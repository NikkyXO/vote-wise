import { Dispatch, SetStateAction } from 'react';

interface DateOfBirthProps {
  handleCloseOverlay: () => void;
  setActiveModal: Dispatch<SetStateAction<Number>>;
}

const DateOfBirth: React.FC<DateOfBirthProps> = ({
  handleCloseOverlay,
  setActiveModal,
}) => {
  const handleContinue = () => {
    // handleCloseOverlay();
    setActiveModal(2);
  };

  return (
    <div className="bg-white p-4 rounded-lg relative w-[30%] h-[50%]  text-black text-center ">
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
    </div>
  );
};

export default DateOfBirth;
