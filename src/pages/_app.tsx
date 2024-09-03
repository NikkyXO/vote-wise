import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { EthereumProvider } from '../components/Context';

import '../components/Onboarding/styles/animations.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EthereumProvider>
      <Component {...pageProps} />
    </EthereumProvider>
  );
}
