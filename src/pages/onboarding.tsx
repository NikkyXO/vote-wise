import Onboarding from '@/components/Onboarding/Onboarding';

import { promises as fs } from 'fs';
import { GetServerSideProps } from 'next';
import path from 'path';

export const getServerSideProps: GetServerSideProps = async () => {
  const filePath = path.join(process.cwd(), '\\src\\utils\\eligibility.zok');
  const source: string = await fs.readFile(filePath, 'utf8');

  return {
    props: {
      eligibilitySource: source,
    },
  };
};

const OnboardingPage: React.FC<{ eligibilitySource: string }> = ({
  eligibilitySource,
}) => {
  return <Onboarding eligibilitySource={eligibilitySource} />;
};

export default OnboardingPage;
