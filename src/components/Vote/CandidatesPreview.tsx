import Image from "next/image";


type Candidate = {
    candidateName: string;
    candidateParty: string;
    candidateIdeology: string;
    candidateImage: string; // Corrected spelling here
  };
  
  let CandidatesArr: Candidate[] = []; // Initialize the array
  
  interface UserProps {
    category: string;
    CandidatesArr: Candidate[]; // Changed to Candidate[]
  }
  
  const CandidatesPreview: React.FC<UserProps> = ({ category, CandidatesArr }) => {

  return (
    <div>
        <div className="w-full bg-white rounded-lg p-4">
            <div className="w-full flex flex-col justify-around items-center">
                <p className="text-3xl my-6 font-400">
                    {category}
                </p>
                <div className="w-full border-b border-gray-500 gap-y-2 grid grid-cols-3 items-center justify-between ">
                    <p className="text-lg col-span-1 my-2">Candidate</p>
                    <p className="text-lg col-span-1 my-2">Political Party</p>
                    <p className="text-lg col-span-1 my-2">Ideology</p>
                </div>                 
                            <div className="w-full">
                              {CandidatesArr.map((event, index) => (
                                <div className=" w-full grid grid-cols-3 items-center justify-between " key={index}>
                                    <p className="text-base col-span-1 my-3">{event.candidateName}</p>
                                    <p className="text-base col-span-1 my-3 ">{event.candidateParty}</p>
                                    <p className="text-base col-span-1 my-3">{event.candidateIdeology}</p>
                                    {/* <Image src={event.candidateImage} alt={`${event.candidateName}'s photo`}/> */}
                                    {/* <img src={event.candidateImage} alt={`${event.candidateName}'s photo`} /> */}
                                </div>
                              ))}
                            </div>
          </div>             
    </div>
    </div>
  )
}

export default CandidatesPreview