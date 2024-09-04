'use client';

import { useState } from 'react';

import { useAsync } from '../../hooks/useAsync';
import { VoteContractConfig } from '../contracts';
import { useEthereum } from '../Context';

export function EndVoting() {
  const { account, getZKsync } = useEthereum();
  const zkSync = getZKsync();
  const {
    result: transaction,
    execute: EndVotingEvent,
    inProgress,
    error,
  } = useAsync(async () => {
    if (!zkSync) return;

    const contract = new zkSync.L2.eth.Contract(
      VoteContractConfig.abi,
      VoteContractConfig.address
    );

    const endVotingReceipt = await contract.methods
      .endVotingProcess()
      .send({ from: account.address as string });
    return {
      transactionHash: endVotingReceipt.transactionHash,
      endVotingReceipt,
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
            {transaction.endVotingReceipt ? (
              <span>pending...</span>
            ) : (
              <pre>
                {JSON.stringify(transaction.endVotingReceipt, null, 2)}
              </pre>
            )}
          </div>
        </div>
      )}

      {error && <div>Error: {error?.message}</div>}
    </div>
  );
}
