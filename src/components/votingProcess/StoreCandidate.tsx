'use client';

import { useState } from 'react';

import { useAsync } from '../../hooks/useAsync';
import { VoteContractConfig } from './../contracts';
import { useEthereum } from './../Context';

export function StoreCandidateInfo(fullName: string, partyName: string, imageUrl: string ) {
  const [amount, setAmount] = useState('');
  const { account, getZKsync } = useEthereum();
  const zkSync = getZKsync();
  const {
    result: transaction,
    execute: StoreCandidateInfo,
    inProgress,
    error,
  } = useAsync(async () => {
    if (!zkSync) return;

    const contract = new zkSync.L2.eth.Contract(
      VoteContractConfig.abi,
      VoteContractConfig.address
    );

    const storeCandidateReceipt = await contract.methods
      .storeCandidate(fullName, partyName, imageUrl)
      .send({ from: account.address as string });
    return {
      transactionHash: storeCandidateReceipt.transactionHash,
      storeCandidateReceipt,
    };
  });

  return (
    // form not needed
    <div>
      <h3>Approve allowance</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          StoreCandidateInfo();
        }}
      >
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="allowance amount"
        />
        <button type="submit">Approve</button>
      </form>

      {inProgress && <div>Transaction pending...</div>}
      {transaction && (
        <div>
          <div>Transaction Hash: {transaction?.transactionHash}</div>
          <div>
            Transaction Receipt:
            {transaction.storeCandidateReceipt ? (
              <span>pending...</span>
            ) : (
              <pre>
                {JSON.stringify(transaction.storeCandidateReceipt, null, 2)}
              </pre>
            )}
          </div>
        </div>
      )}

      {error && <div>Error: {error?.message}</div>}
    </div>
  );
}
