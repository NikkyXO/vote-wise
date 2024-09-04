'use client';

import { useState, useEffect } from 'react';

import { VoteContractConfig } from '../../contracts';
import { useEthereum } from '../../Context';

type TransferLog = {
  from: string;
  to: string;
  amount: BigInt;
};

export function VoteStartedEvent() {
  const { getZKsync } = useEthereum();
  const [events, setEvents] = useState<TransferLog[]>([]);
  useEffect(() => {
    const zkSync = getZKsync();
    if (!zkSync) return;

    const contract = new zkSync.L2.eth.Contract(
      VoteContractConfig.abi,
      VoteContractConfig.address
    );
    const voteStartedEvent = contract.events.VotingStarted();
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


    return () => {
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
        <summary>{events.length} Voted Started Successfully`s logged</summary>
        <pre>{logs}</pre>
      </details>
    </div>
  );
}
