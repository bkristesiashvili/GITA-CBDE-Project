const contractABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "roomsCount",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "roomId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "bookedBy",
                "type": "address"
            }
        ],
        "name": "CheckedIn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "roomId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "bookedBy",
                "type": "address"
            }
        ],
        "name": "CheckedOut",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "roomId",
                "type": "uint256"
            }
        ],
        "name": "bookRoom",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "roomId",
                "type": "uint256"
            }
        ],
        "name": "checkOut",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAvailableRoomsCount",
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
                "internalType": "uint256",
                "name": "roomId",
                "type": "uint256"
            }
        ],
        "name": "getRoomHistory",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "roomId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "bookedBy",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "checkedOutBy",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "checkInTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "checkoutTime",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct BookingHistory[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "roomId",
                "type": "uint256"
            }
        ],
        "name": "getRoomStatus",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "roomId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "roomNumber",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum Status",
                        "name": "roomStatus",
                        "type": "uint8"
                    },
                    {
                        "internalType": "address",
                        "name": "bookedBy",
                        "type": "address"
                    }
                ],
                "internalType": "struct Room",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotalRooms",
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
        "inputs": [],
        "name": "owner",
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
        "inputs": [],
        "name": "projectReceived",
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
                "name": "_codeFileHash",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_topicName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_authorName",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_sendHashTo",
                "type": "address"
            }
        ],
        "name": "projectSubmitted",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "rooms",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "roomId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "roomNumber",
                "type": "uint256"
            },
            {
                "internalType": "enum Status",
                "name": "roomStatus",
                "type": "uint8"
            },
            {
                "internalType": "address",
                "name": "bookedBy",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
]

const contractAddress = '0x5eE24F7C983d0eae88870A204d8885880ae46656'; // Replace with your contract's address

$('#book-room').click(async function (event) {
    try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const roomId = $('#roomId').val();

        console.log(roomId);

        const accounts = await web3.eth.getAccounts();
        var result = await contract.methods.bookRoom(roomId)
            .send({
                from: accounts[0], 
                value: web3.utils.toWei('10000', 'gwei'), 
                gas: 150000
            });

        console.log('Transaction successful', result.toString());
    } catch (error) {
        console.error('Error:', error);
    }
});

$('#room-status').click(async function(){
    try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        var result = await contract.methods.getAvailableRoomsCount().call();
            // .send({
            //     from: accounts[0], 
            //     value: web3.utils.toWei('10000', 'gwei'), 
            //     gas: 150000
            // });

        console.log('Available Rooms Count:', result.toString());
    } catch (error) {
        console.error('Error:', error);
    }
});

$('#checkout-room').click(async function(){
    try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const accounts = await web3.eth.getAccounts();

        const roomId = $('#roomId-checkout').val();

        console.log('room checkout:', roomId);

        var result = await contract.methods.checkOut(roomId)
            .send({
                from: accounts[0], 
                value: web3.utils.toWei('10000', 'gwei'), 
                gas: 150000
            });

        console.log('Available Rooms Count:', result.toString());
    } catch (error) {
        console.error('Error:', error);
    }
});

//checkOut