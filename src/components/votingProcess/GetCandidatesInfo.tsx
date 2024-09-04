'use client'

import { useState, useEffect } from 'react';

import { useAsync } from '../../hooks/useAsync';
import { useEthereum } from './../Context';
import { daiContractConfig, VoteContractConfig } from './../contracts'

export function GetCandidates() {
  return (
    <div>
      <div>
        <br />
        <GetCandidatesData />
      </div>
    </div>
  )
}

function GetCandidatesData() {

  const { getZKsync } = useEthereum();
  const {
    result: candidates,
    execute: fetchCandidates,
    inProgress,
    error,
  } = useAsync(async () => {
    const zkSync = getZKsync();
    if (zkSync)
    {
      const contract = new zkSync.L2.eth.Contract( VoteContractConfig.abi, VoteContractConfig.address);
      const candidates = await contract.methods.candidates().call();
      
      return candidates;
    }
  });

  useEffect(() => {
    fetchCandidates();
  }, []);

  return (
    <div>
      <div>
        candidates: {candidates?.toString()}
        <button onClick={fetchCandidates}>
          {inProgress ? 'fetching...' : 'refetch'}
        </button>
      </div>
      {error && <div>Error: {error.message}</div>}
    </div>
  );

}

function BalanceOf() {
  const { account, getZKsync } = useEthereum();

  const [address, setAddress] = useState(account.address);

  const {
    result: balance,
    execute: fetchBalance,
    inProgress,
    error
  } = useAsync(async () => {
    const zkSync = getZKsync();
    if (zkSync)
    {
      const contract = new zkSync.L2.eth.Contract( daiContractConfig.abi, daiContractConfig.address);
      const b = await contract.methods.balanceOf(address).call();
      return b

    }
  });

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <div>
      <div>
        Token balance: {balance?.toString()}
      </div>
      <div>
        <input
          value={address!}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="wallet address"
        />
        <button onClick={fetchBalance}>
          {inProgress ? 'fetching...' : 'refetch'}
        </button>
      </div>
      {error && <div>Error: {error.message}</div>}
    </div>
  );
}
