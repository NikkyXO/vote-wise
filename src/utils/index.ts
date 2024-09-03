import { initialize, ZoKratesProvider, CompilationArtifacts, Proof, VerificationKey, SetupKeypair } from "zokrates-js";
// import  fs from "fs/promises";

// import fs from "fs";

const fs = require("fs");

const reducedHash = 16658931445127996590;

const input = {
    year: "1990", // year
    month: "6", // month
    day: "12", // day
    nationality_hash: 10383936915116340591n,
    voter_id: "120000", // voter_id
}

export interface VerifyData {
    year: string;
    month: string;
    day: string;
    nationality_hash: bigint;
    voter_id: string;
}

export async function testGenerateProof(input: VerifyData) {
    const zokratesProvider: ZoKratesProvider = await initialize();
  try {
    const source: any = await fs.readFile("./eligibility.zok", "utf8");
    console.log({ source });

    // compilation
    const artifacts: CompilationArtifacts = zokratesProvider.compile(source);

    // computation
    const { year, month, day, voter_id } = input;
    const { witness, output } = zokratesProvider.computeWitness(artifacts, [
        year, month, day, voter_id,
      reducedHash.toString(), // nationality_hash
    
    ]);

     // run setup
     const keypair: SetupKeypair = zokratesProvider.setup(artifacts.program);

     // generate proof
     const proof: Proof = zokratesProvider.generateProof(
       artifacts.program,
       witness,
       keypair.pk,
     );
 
     await fs.writeFile('proof.json', JSON.stringify(proof, null, 2));
 
    // or verify off-chain
    const isVerified: boolean = zokratesProvider.verify(keypair.vk, proof);
    console.log({ isVerified });

  } catch (err) {
    console.error((err as Error).message);
  }
}

testGenerateProof(input);

