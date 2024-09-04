'use client';

import { useState } from 'react';
import { useAsync } from '../../hooks/useAsync';
import { VoteContractConfig } from './../contracts';
import { useEthereum } from './../Context';
import { keccak256 } from 'web3-utils';

export function CastVote() {
  const { account, getZKsync } = useEthereum();
  const zkSync = getZKsync();
  const {
    result: transaction,
    execute: CastVote,
    inProgress,
    error,
  } = useAsync(async () => {
    if (!zkSync) return;

    const contract = new zkSync.L2.eth.Contract(
      VoteContractConfig.abi,
      VoteContractConfig.address
    );

    const voteEventReceipt = await contract.methods
      .vote(keccak256(account.address as string))
      .send({ from: account.address as string });
    return {
      transactionHash: voteEventReceipt.transactionHash,
      voteEventReceipt,
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
            {transaction.voteEventReceipt ? (
              <span>pending...</span>
            ) : (
              <pre>
                {JSON.stringify(transaction.voteEventReceipt, null, 2)}
              </pre>
            )}
          </div>
        </div>
      )}

      {error && <div>Error: {error?.message}</div>}
    </div>
  );
}
