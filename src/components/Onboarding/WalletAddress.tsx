import { Dispatch, SetStateAction } from 'react';

interface WalletAddressProps {
  handleCloseOverlay: () => void;
  setActiveModal: Dispatch<SetStateAction<Number>>;
}

const WalletAddress: React.FC<WalletAddressProps> = ({
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
          <div className="text-txt-24 font-bold">Let's get you registered!</div>
          <div className="text-sm">Input a unique wallet address</div>
        </div>
      </div>
      <div className="w-full mt-6">
        <input
          type="text"
          placeholder="Enter your wallet address"
          className="w-[100%] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors duration-500"
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

export default WalletAddress;
