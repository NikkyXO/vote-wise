import crypto from 'crypto';
import * as dotenv from 'dotenv';
import { promises as fs } from 'fs';
import path from 'path';
import {
  CompilationArtifacts,
  Proof,
  SetupKeypair,
  VerificationKey,
  ZoKratesProvider,
} from 'zokrates-js';

dotenv.config();

interface UserData {
  year: string;
  month: string;
  day: string;
  voter_id: string;
  reducedHash: string;
  address: string;
}

class UserProof {
  private zokratesProvider!: ZoKratesProvider;

  constructor() {
    this.initializeZoKrates();
  }

  private async initializeZoKrates() {
    const { initialize } = await import('zokrates-js');
    this.zokratesProvider = await initialize();
  }

  public async registerUser(data: UserData): Promise<string> {
    try {
      // Resolve the full path to the eligibility.zok file
      const filePath = path.join(process.cwd(), 'src/util/eligibility.zok');
      const source: string = await fs.readFile(filePath, 'utf8');

      // Compilation
      const artifacts: CompilationArtifacts =
        this.zokratesProvider.compile(source);
      console.log('Circuit compiled successfully.');

      // Computation
      const { year, month, day, voter_id, reducedHash } = data;
      const { witness } = this.zokratesProvider.computeWitness(artifacts, [
        year,
        month,
        day,
        voter_id,
        reducedHash.toString(),
      ]);

      // Run setup
      const keypair: SetupKeypair = this.zokratesProvider.setup(
        artifacts.program
      );

      // Generate proof
      const proof: Proof = this.zokratesProvider.generateProof(
        artifacts.program,
        witness,
        keypair.pk
      );

      // Encrypt proof values and return as secret key
      const secretKey = this.encryptProof(proof, keypair);
      console.log(
        'User registered successfully with encrypted secret key:',
        secretKey
      );

      return secretKey;
    } catch (err) {
      console.error((err as Error).message);
      throw err;
    }
  }

  verifyProof(verificationKey: VerificationKey, proof: Proof): boolean | null {
    try {
      if (!this.zokratesProvider) {
        throw new Error(
          'ZoKrates provider is not initialized. Call initializeProvider() first.'
        );
      }

      const isVerified: boolean = this.zokratesProvider.verify(
        verificationKey,
        proof
      );
      console.log('Proof verification result:', isVerified);
      return isVerified;
    } catch (err) {
      console.error('Error verifying proof:', (err as Error).message);
      return null;
    }
  }

  private encryptProof(proof: Proof, keypair: SetupKeypair): string {
    const password = 'my secret key';
    const key = crypto.scryptSync(password, 'salt', 32);
    const iv = Buffer.alloc(16, 0);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(
      JSON.stringify({ proof, keypair }),
      'utf8',
      'hex'
    );
    encrypted += cipher.final('hex');
    return encrypted;
  }

  private decryptProof(secretKey: string): {
    proof: Proof;
    keypair: SetupKeypair;
  } {
    const password = 'my secret key';
    const key = crypto.scryptSync(password, 'salt', 32);
    const iv = Buffer.alloc(16, 0);
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(secretKey, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    console.log(decrypted);
    return JSON.parse(decrypted);
  }

  verifyUserProof(secretKey: string): boolean | null {
    try {
      const decryptedData = this.decryptProof(secretKey);
      if (!this.zokratesProvider) {
        throw new Error(
          'ZoKrates provider is not initialized. Call initializeProvider() first.'
        );
      }
      const isVerified: boolean = this.zokratesProvider.verify(
        decryptedData.keypair.vk,
        decryptedData.proof
      );
      console.log('Proof verification result:', isVerified);
      return isVerified;
    } catch (err) {
      console.error('Error verifying proof:', (err as Error).message);
      return null;
    }
  }
}

export default UserProof;
