'use client';

import { useState, useEffect } from 'react';

import { VoteContractConfig } from './contracts';
import { useEthereum } from './Context';

type TransferLog = {
  from: string;
  to: string;
  amount: BigInt;
};

export function WatchContractEvents() {
  const { getZKsync } = useEthereum();
  const [events, setEvents] = useState<TransferLog[]>([]);
  useEffect(() => {
    const zkSync = getZKsync();
    if (!zkSync) return;

    const contract = new zkSync.L2.eth.Contract(
      VoteContractConfig.abi,
      VoteContractConfig.address
    );
    // const transferEvent = contract.events.Transfer();
    const voteSuccessfulEvent = contract.events.VoteSuccesful();
    const voteStartedEvent = contract.events.VotingStarted();
    const voteEndedEvent = contract.events.VotingEnded();
    voteSuccessfulEvent.on('data', (event) => {
      const { from, to, value } = event.returnValues;
      setEvents((prevEvents) => [
        ...prevEvents,
        {
          from: from as string,
          to: to as string,
          amount: BigInt(value as number),
        },
      ]);
    });

    voteStartedEvent.on('data', (event) => {
      const { from, to, value } = event.returnValues;
      setEvents((prevEvents) => [
        ...prevEvents,
        {
          from: from as string,
          to: to as string,
          amount: BigInt(value as number),
        },
      ]);
    });

    voteEndedEvent.on('data', (event) => {
      const { from, to, value } = event.returnValues;
      setEvents((prevEvents) => [
        ...prevEvents,
        {
          from: from as string,
          to: to as string,
          amount: BigInt(value as number),
        },
      ]);
    });

    return () => {
      voteSuccessfulEvent.off('data', (event) => {
        const { from, to, value } = event.returnValues;
        setEvents((prevEvents) => [
          ...prevEvents,
          {
            from: from as string,
            to: to as string,
            amount: BigInt(value as number),
          },
        ]);
      });

      voteStartedEvent.off('data', (event) => {
        const { from, to, value } = event.returnValues;
        setEvents((prevEvents) => [
          ...prevEvents,
          {
            from: from as string,
            to: to as string,
            amount: BigInt(value as number),
          },
        ]);
      });

      voteEndedEvent.off('data', (event) => {
        const { from, to, value } = event.returnValues;
        setEvents((prevEvents) => [
          ...prevEvents,
          {
            from: from as string,
            to: to as string,
            amount: BigInt(value as number),
          },
        ]);
      });
    };
  }, []);

  const logs = events
    .slice()
    .reverse()
    .map((log) => JSON.stringify(log, null, 2))
    .join('\n\n\n\n');

  return (
    <div>
      <details>
        <summary>{events.length} DAI `Transfer`s logged</summary>
        <pre>{logs}</pre>
      </details>
    </div>
  );
}
