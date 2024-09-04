'use client';

import { useState } from 'react';

import { useAsync } from '../../hooks/useAsync';
import { VoteContractConfig } from '../contracts';
import { useEthereum } from '../Context';

export function StartVoting() {
  const { account, getZKsync } = useEthereum();
  const zkSync = getZKsync();
  const {
    result: transaction,
    execute: StartVoting,
    inProgress,
    error,
  } = useAsync(async () => {
    if (!zkSync) return;

    const contract = new zkSync.L2.eth.Contract(
      VoteContractConfig.abi,
      VoteContractConfig.address
    );

    const duration = 5

    const startVotingReceipt = await contract.methods
      .startVotingProcess(duration)
      .send({ from: account.address as string });
    return {
      transactionHash: startVotingReceipt.transactionHash,
      startVotingReceipt,
    };
  });

  return (
    // form not needed
    <div>
      {transaction && (
        <div>
          <div>Transaction Hash: {transaction?.transactionHash}</div>
          <div>
            Transaction Receipt:
            {transaction.startVotingReceipt ? (
              <span>pending...</span>
            ) : (
              <pre>
                {JSON.stringify(transaction.startVotingReceipt, null, 2)}
              </pre>
            )}
          </div>
        </div>
      )}

      {error && <div>Error: {error?.message}</div>}
    </div>
  );
}
