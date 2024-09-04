// to check if voting has ended before fetching total votes
'use client'

import { useState, useEffect } from 'react';

import { useAsync } from '../../hooks/useAsync';
import { useEthereum } from './../Context';
import {  VoteContractConfig } from './../contracts'

export function GetTotalVotesCount() {
  return (
    <div>
      <div>
        <br />
        <GetCollatedData />
      </div>
    </div>
  )
}

function GetCollatedData() {

  const { getZKsync } = useEthereum();
  const {
    result: collatedVotes,
    execute: GetCollatedData,
    inProgress,
    error,
  } = useAsync(async () => {
    const zkSync = getZKsync();
    if (zkSync)
    {
      const contract = new zkSync.L2.eth.Contract( VoteContractConfig.abi, VoteContractConfig.address);
      const collatedVotes = await contract.methods.getCollatedVotes().call();
      
      return collatedVotes;
    }
  });

  useEffect(() => {
    GetCollatedData();
  }, []);

  return (
    <div>
      <div>
        total votes: {collatedVotes?.toString()}
        <button onClick={GetCollatedData}>
          {inProgress ? 'fetching...' : 'refetch'}
        </button>
      </div>
      {error && <div>Error: {error.message}</div>}
    </div>
  );

}

