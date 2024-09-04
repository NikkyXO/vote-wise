'use client';


import { useAsync } from '../../hooks/useAsync';
import { VoteContractConfig } from '../contracts';
import { useEthereum } from '../Context';

export function SetCategoryDescription(category: string, description: string) {
  const { account, getZKsync } = useEthereum();
  const zkSync = getZKsync();
  const {
    result: transaction,
    execute: SetCategoryDescription,
    inProgress,
    error,
  } = useAsync(async () => {
    if (!zkSync) return;

    const contract = new zkSync.L2.eth.Contract(
      VoteContractConfig.abi,
      VoteContractConfig.address
    );


    const receipt = await contract.methods
      .setVoteCategoryDescription(category, description)
      .send({ from: account.address as string });
    return {
      transactionHash: receipt.transactionHash,
     receipt,
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
            {transaction.receipt ? (
              <span>pending...</span>
            ) : (
              <pre>
                {JSON.stringify(transaction.receipt, null, 2)}
              </pre>
            )}
          </div>
        </div>
      )}

      {error && <div>Error: {error?.message}</div>}
    </div>
  );
}
