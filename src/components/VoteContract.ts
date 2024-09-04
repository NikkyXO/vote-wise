export const VoteAbi = [
    {
        "inputs": [],
        "name": "CandidateAlreadyRegistered",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "CandidateDoesNotExist",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "DuplicateVoting",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "userHash",
                "type": "bytes32"
            }
        ],
        "name": "InvalidVoter",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "userHash",
                "type": "bytes32"
            }
        ],
        "name": "VoterAlreadyVerified",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "VoterNotYetVerified",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "VotingAlreadyEnded",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "VotingAlreadyStarted",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "VotingNotYetEnded",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "VotingNotYetStarted",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "partyName",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "imageIpfsUrl",
                "type": "string"
            }
        ],
        "name": "CandidateAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "userHash",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "ipfsUrl",
                "type": "string"
            }
        ],
        "name": "UserProofStored",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "userHash",
                "type": "bytes32"
            }
        ],
        "name": "VoteSuccesful",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "userHash",
                "type": "bytes32"
            }
        ],
        "name": "VoterVerified",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "message",
                "type": "string"
            }
        ],
        "name": "VotingEnded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "message",
                "type": "string"
            }
        ],
        "name": "VotingStarted",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_userHash",
                "type": "bytes32"
            }
        ],
        "name": "addVerifiedVoter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "candidates",
        "outputs": [
            {
                "internalType": "string",
                "name": "fullname",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "partyName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "imageIpfsUrl",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "voteCount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "endVotingProcess",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ended",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "expiresAt",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "userHash",
                "type": "bytes32"
            }
        ],
        "name": "getUserProof",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_userHash",
                "type": "bytes32"
            }
        ],
        "name": "isVoterVerified",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_duration",
                "type": "uint256"
            }
        ],
        "name": "startVotingProcess",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "started",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_fullname",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_partyName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_url",
                "type": "string"
            }
        ],
        "name": "storeCandidate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "userHash",
                "type": "bytes32"
            },
            {
                "internalType": "string",
                "name": "ipfsUrl",
                "type": "string"
            }
        ],
        "name": "storeUserProof",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "verifier",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_userHash",
                "type": "bytes32"
            },
            {
                "internalType": "string",
                "name": "_partyName",
                "type": "string"
            }
        ],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]