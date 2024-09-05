import VerifySecretKey from '@/components/Onboarding/VerifySecretKey';
import { SetStateAction } from 'react';

export default function Page() {
  return <VerifySecretKey handleCloseOverlay={function (): void {
    throw new Error('Function not implemented.');
  } } setActiveModal={function (value: SetStateAction<Number>): void {
    throw new Error('Function not implemented.');
  } } />;
}
