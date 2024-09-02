import * as fs from "fs";
import { ZoKratesProvider, CompilationArtifacts, VerificationKey, Proof, SetupKeypair } from "zokrates-js";

export class CircuitSetup {
  private Provider: ZoKratesProvider | null = null;

  async initializeProvider(): Promise<void> {
    const { initialize } = await import("zokrates-js");
    this.Provider = await initialize();
  }

  compileCircuit(circuitPath: string): CompilationArtifacts | null {
    try {
      if (!this.Provider) {
        throw new Error("ZoKrates provider is not initialized. Call initializeProvider() first.");
      }

      const source: string = fs.readFileSync(circuitPath, "utf8");
      const artifacts: CompilationArtifacts = this.Provider.compile(source);
      console.log("Circuit compiled successfully.");
      return artifacts;
    } catch (err) {
      console.error("Error compiling circuit:", (err as Error).message);
      return null;
    }
  }

  setupKeypair(artifacts: CompilationArtifacts): SetupKeypair | null {
    try {
      if (!this.Provider) {
        throw new Error("ZoKrates provider is not initialized. Call initializeProvider() first.");
      }

      const keypair: SetupKeypair = this.Provider.setup(artifacts.program);
      fs.writeFileSync("keypair.json", JSON.stringify(keypair, null, 2));
      console.log("Keypair generated and saved.");
      return keypair;
    } catch (err) {
      console.error("Error during setup:", (err as Error).message);
      return null;
    }
  }

  exportVerifier(key: VerificationKey): string | null {
    try {
      if (!this.Provider) {
        throw new Error("ZoKrates provider is not initialized. Call initializeProvider() first.");
      }

      const verifier: string = this.Provider.exportSolidityVerifier(key);
      fs.writeFileSync("verifier.sol", verifier);
      console.log("Verifier contract exported and saved.");
      return verifier;
    } catch (err) {
      console.error("Error exporting verifier:", (err as Error).message);
      return null;
    }
  }

  generateProof(artifacts: CompilationArtifacts, input: string[], keypair: any): Proof | null {
    try {
      if (!this.Provider) {
        throw new Error("ZoKrates provider is not initialized. Call initializeProvider() first.");
      }

      const { witness, output } = this.Provider.computeWitness(artifacts, input);
      const proof: Proof = this.Provider.generateProof(artifacts.program, witness, keypair.pk);
      fs.writeFileSync(`proof_${input[4]}.json`, JSON.stringify(proof, null, 2));
      console.log(`Proof generated for voter ${input[4]} and saved.`);
      return proof;
    } catch (err) {
      console.error("Error generating proof:", (err as Error).message);
      return null;
    }
  }

  verifyProof(verificationKey: VerificationKey, proof: Proof): boolean | null {
    try {
      if (!this.Provider) {
        throw new Error("ZoKrates provider is not initialized. Call initializeProvider() first.");
      }

      const isVerified: boolean = this.Provider.verify(verificationKey, proof);
      console.log("Proof verification result:", isVerified);
      return isVerified;
    } catch (err) {
      console.error("Error verifying proof:", (err as Error).message);
      return null;
    }
  }
}
