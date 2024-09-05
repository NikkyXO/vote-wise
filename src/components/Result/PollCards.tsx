import React from 'react'


type PollResult = {
    party: string;
    votes: string // Corrected spelling here
  };
  
  let PollResultArr: PollResult[] = []; // Initialize the array

  interface UserProps {
    PollResultArr: PollResult[]; // Changed to Candidate[]
  }
  
  const PollCards: React.FC<UserProps> = ({PollResultArr}) =>{
    return (
        <div className="w-[100%] sm:w-[40%] bg-white rounded-lg shadow-sm p-3 flex flex-col gap-2 ">
            <p className="text-xl sm:text-3xl font-700 my-3">Final Results</p>
            {
                PollResultArr.map((item, index) =>(
            <div key={index} className="p-3 flex items-center justify-between border rounded-md border-gray-600">
                <p className="text-xs sm:text-base">{item.party}</p>
                <p className="text-xs sm:text-base">{item.votes} votes</p>
            </div>
                ))
            }
        </div>
    )
}

export default PollCards