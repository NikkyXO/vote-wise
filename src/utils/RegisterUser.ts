import { ZoKratesProvider, initialize, CompilationArtifacts, SetupKeypair, Proof } from "zokrates-js";
import crypto from "crypto";
const fs = require("fs");
import * as dotenv from "dotenv";

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
        this.zokratesProvider = await initialize();
    }

    public async registerUser(data: UserData): Promise<string> {
        try {
            const source: any = await fs.readFile("./eligibility.zok", "utf8");

            // Compilation
            const artifacts: CompilationArtifacts = this.zokratesProvider.compile(source);

            // Computation
            const { year, month, day, voter_id, reducedHash } = data;
            const { witness } = this.zokratesProvider.computeWitness(artifacts, [
                year, month, day, voter_id,
                reducedHash.toString(),
            ]);

            // Run setup
            const keypair: SetupKeypair = this.zokratesProvider.setup(artifacts.program);

            // Generate proof
            const proof: Proof = this.zokratesProvider.generateProof(
                artifacts.program,
                witness,
                keypair.pk,
            );

            // Encrypt proof values and return as secret key
            const secretKey = this.encryptProof(proof);
            console.log("User registered successfully with encrypted secret key:", secretKey);

            return secretKey;

        } catch (err) {
            console.error((err as Error).message);
            throw err;
        }
    }

    private encryptProof(proof: any): string {
        const password = 'my secret key';
        const key = crypto.scryptSync(password, 'salt', 32);
        const iv = Buffer.alloc(16, 0);
        const proofData = `${proof.a.join(",")}-${proof.b.map(b => b.join(",")).join("-")}-${proof.c.join(",")}`;
        const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
        let encrypted = cipher.update(proofData, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }

    private decryptProof(secretKey: string): Proof {
        const password = 'my secret key';
        const key = crypto.scryptSync(password, 'salt', 32);
        const iv = Buffer.alloc(16, 0);
        const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
        let decrypted = decipher.update(secretKey, 'hex', 'utf8');
        decrypted += decipher.final('utf8');

        const [a, b, c] = decrypted.split("-");
        return {
            a: a.split(","),
            b: [b.split(",").slice(0, 2), b.split(",").slice(2, 4)],
            c: c.split(","),
        };
    }
}