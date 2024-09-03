'use client';

import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { Account } from '../components/Account';
import { Balance } from '../components/Balance';
import { BlockNumber } from '../components/BlockNumber';
import { Connect } from '../components/Connect';
import { useEthereum } from '../components/Context';
import { NetworkSwitcher } from '../components/NetworkSwitcher';
import { ReadContract } from '../components/ReadContract';
import { SendTransaction } from '../components/SendTransaction';
import { SendTransactionPrepared } from '../components/SendTransactionPrepared';
import { SignMessage } from '../components/SignMessage';
import { SignTypedData } from '../components/SignTypedData';
import { Token } from '../components/Token';
import { WatchContractEvents } from '../components/WatchContractEvents';
import { WatchPendingTransactions } from '../components/WatchPendingTransactions';
import { WriteContract } from '../components/WriteContract';
import { WriteContractPrepared } from '../components/WriteContractPrepared';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { account } = useEthereum();

  // 1. using multicall plugin
  // use reference: https://github.com/0xrudra-xyz/web3-plugin-multicall
  // web3.registerPlugin(new MulticallPlugin());

  // const calls = [
  //   {
  //     target: web3.multicall,
  //     callData: ""
  //   }
  // ]

  // 2. Using SwisstronikPlugin
  // Reference: https://www.npmjs.com/package/@swisstronik/web3-plugin-swisstronik
  // web3.registerPlugin(new SwisstronikPlugin());

  return (
    <>
      <Head>
        <title>Web3.js + ZKsync + Next.js </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.cdnfonts.com/css/rogan" rel="stylesheet" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <Connect />
          {account.isConnected && (
            <>
              <hr />
              <h2>Network</h2>
              <p>
                <strong>
                  Make sure to connect your wallet to ZKsync Testnet for full
                  functionality
                </strong>
                <br />
                or update to a different contract address
              </p>
              <NetworkSwitcher />
              <br />
              <hr />
              <h2>Account</h2>
              <Account />
              <br />
              <hr />
              <h2>Balance</h2>
              <Balance />
              <br />
              <hr />
              <h2>Block Number</h2>
              <BlockNumber />
              <br />
              <hr />
              <h2>Read Contract</h2>
              <ReadContract />
              <br />
              <hr />
              <h2>Send Transaction</h2>
              <SendTransaction />
              <br />
              <hr />
              <h2>Send Transaction (Prepared)</h2>
              <SendTransactionPrepared />
              <h2>Sign Message</h2>
              <SignMessage />
              <br />
              <hr />
              <h2>Sign Typed Data</h2>
              <SignTypedData />
              <br />
              <hr />
              <h2>Token</h2>
              <Token />
              <br />
              <hr />
              <h2>Watch Contract Events</h2>
              <WatchContractEvents />
              <br />
              <hr />
              <WatchPendingTransactions />
              <br />
              <hr />
              <h2>Write Contract</h2>
              <WriteContract />
              <br />
              <hr />
              <h2>Write Contract (Prepared)</h2>
              <WriteContractPrepared />
            </>
          )}
        </div>
      </main>
    </>
  );
}
