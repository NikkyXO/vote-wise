'use client';

import { useEthereum } from './Context';

export function Connect() {
  const { account, connect, disconnect } = useEthereum();

  return (
    <div>
      {account.isConnected ? (
        <button
          className="px-3 py-2 rounded-lg bg-red-600 text-white"
          onClick={disconnect}
        >
          Disconnect wallet
        </button>
      ) : (
        <button
          className="px-3 py-2 rounded-lg bg-white text-primary"
          onClick={connect}
        >
          Launch App
        </button>
      )}
    </div>
  );
}
