import Image from 'next/image';
import { useRouter } from 'next/router';
import { success } from '../../../public/images';
import Overlay from '../Overlay/Overlay';
import { useLocalityHook } from '../context/LocationContext';

function VoteSuccesAlert() {
  const router = useRouter();

  const { showSuccessModal, setShowSuccessModal } = useLocalityHook();
  return (
    <Overlay showOverlay={true} onClose={() => setShowSuccessModal(false)}>
      <div className="w-full flex flex-row items-center justify-center">
        <div className="w-[38%] h-[42%] bg-white p-2 rounded-lg">
          <p className="text-lg font-bold text-center">Excellent</p>
          <p className=" text-sm text-center mb-10">
            You have successfully casted your vote
          </p>
          <div className="w-full mx-auto flex flex-row justify-center mb-8">
            <Image
              src={success}
              alt="Notification Icon"
              width={100}
              height={100}
            />
          </div>

          <div className="w-full mx-auto flex flex-row justify-center pb-4">
            <button
              className="px-2 py-1 rounded-lg bg-primary text-white"
              onClick={() => router.push('/')}
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </Overlay>
  );
}

export default VoteSuccesAlert;
