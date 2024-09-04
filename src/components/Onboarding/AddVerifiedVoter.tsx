'use client'

import { useState } from 'react';

import { useAsync } from '../../hooks/useAsync';
import { VoteContractConfig } from './../contracts'
import { useEthereum } from './../Context';


export function AddVerifiedVoter() {
  const [amount, setAmount] = useState('');
  const { account, getZKsync } = useEthereum();
  const zkSync = getZKsync();
  const { result: transaction, execute: AddVerifiedVoter, inProgress, error } = useAsync(async () => {
    if (!zkSync) return;

    

    const contract = new zkSync.L2.eth.Contract(VoteContractConfig.abi, VoteContractConfig.address);
  
    const addVerifiedVoterReceipt = await contract.methods.addVerifiedVoter(account.address as string).send({from: account.address as string});
    console.log({ addVerifiedVoterReceipt });
    return { 
      transactionHash: addVerifiedVoterReceipt.transactionHash,
      addVerifiedVoterReceipt
    };
  });

  return (
    // form not important
    <div>
      <h3>Add verified Voter</h3>
      <form onSubmit={(e) => { e.preventDefault(); AddVerifiedVoter(); }}>
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
            {transaction.addVerifiedVoterReceipt ? (
              <span>pending...</span>
            ) : (
              <pre>{JSON.stringify(transaction.addVerifiedVoterReceipt, null, 2)}</pre>
            )}
          </div>
        </div>
      )}

      {error && <div>Error: {error?.message}</div>}
    </div>
  );
}
