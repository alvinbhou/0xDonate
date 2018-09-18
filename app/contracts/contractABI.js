const CONTRACT_ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_receiver",
				"type": "address"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_message",
				"type": "string"
			}
		],
		"name": "donate",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "donor",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "message",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "raddr",
				"type": "address"
			}
		],
		"name": "NewDonation",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			},
			{
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getDonation",
		"outputs": [
			{
				"name": "value",
				"type": "uint256"
			},
			{
				"name": "name",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "getDonationsCount",
		"outputs": [
			{
				"name": "length",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
export default CONTRACT_ABI
