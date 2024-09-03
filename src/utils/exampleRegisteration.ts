// import Web3 from "web3";
// import VerifierAbi from "./verifierAbi.json";
// import { CircuitSetup } from "./circuitSetup";

// import React, { useEffect, useState } from "react";

// interface FormData {
//   year: string;
//   month: string;
//   day: string;
//   nationalityHash: string;
//   voterId: string;
// }

// const Home: React.FC = () => {
//   const [count, setCount] = useState<number>(0);
//   const [inputValue, setInputValue] = useState<string>('');
//   const [web3, setWeb3] = useState<Web3 | null>(null);
//   const [contract, setContract] = useState<any>(null);
//   const [account, setAccount] = useState<string>('');
//   const [proof, setProof] = useState<any>(null);
//   const [isVerified, setIsVerified] = useState<boolean | null>(null);
//   const [formData, setFormData] = useState<FormData>({
//     year: '',
//     month: '',
//     day: '',
//     nationalityHash: '',
//     voterId: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const input = [
//       formData.year,
//       formData.month,
//       formData.day,
//       formData.nationalityHash,
//       formData.voterId,
//     ];

//     // Initialize ZoKrates and generate proof
//     const circuitSetup = new CircuitSetup();
//     await circuitSetup.initializeProvider();
//     const artifacts = circuitSetup.compileCircuit('/path/to/eligibility.zok');
//     if (artifacts) {
//       const keypair = JSON.parse(localStorage.getItem('keypair') as string); // Load keypair from storage
//       const proofGenerated = circuitSetup.generateProof(artifacts, input, keypair);

//       setProof(proofGenerated);
//     }
//   };

//   const verifyProof = async () => {
//     const keypair = JSON.parse(localStorage.getItem('keypair') as string); // Load keypair from storage

//     if (contract && proof) {
//       const isProofValid = await contract.methods.verify(
//         proof.proof.a,
//         proof.proof.b,
//         proof.proof.c,
//         proof.inputs
//       ).call();

//       setIsVerified(isProofValid);
//     }
//   };

//   const initWeb3 = async () => {

//   };

//   useEffect(() => {
//     initWeb3();
//   }, []);

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div> </div>
     
//   );
// };

// export default Home;
