const CONTRACT_ABI = [
  {
    constant: false,
    inputs: [
      {
        name: '_receiver',
        type: 'address'
      },
      {
        name: '_name',
        type: 'string'
      },
      {
        name: '_message',
        type: 'string'
      }
    ],
    name: 'donate',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    name: 'dMap',
    outputs: [
      {
        name: 'id',
        type: 'uint256'
      },
      {
        name: 'value',
        type: 'uint256'
      },
      {
        name: 'donor',
        type: 'string'
      },
      {
        name: 'message',
        type: 'string'
      },
      {
        name: 'daddr',
        type: 'address'
      },
      {
        name: 'raddr',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'getDonation',
    outputs: [
      {
        name: 'value',
        type: 'uint256'
      },
      {
        name: 'name',
        type: 'string'
      },
      {
        name: 'mssg',
        type: 'string'
      },
      {
        name: 'd',
        type: 'address'
      },
      {
        name: 'r',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    name: 'donations',
    outputs: [
      {
        name: 'id',
        type: 'uint256'
      },
      {
        name: 'value',
        type: 'uint256'
      },
      {
        name: 'donor',
        type: 'string'
      },
      {
        name: 'message',
        type: 'string'
      },
      {
        name: 'daddr',
        type: 'address'
      },
      {
        name: 'raddr',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'uid',
        type: 'uint256'
      },
      {
        indexed: false,
        name: 'value',
        type: 'uint256'
      },
      {
        indexed: false,
        name: 'donor',
        type: 'string'
      },
      {
        indexed: false,
        name: 'message',
        type: 'string'
      },
      {
        indexed: false,
        name: 'daddr',
        type: 'address'
      },
      {
        indexed: false,
        name: 'raddr',
        type: 'address'
      }
    ],
    name: 'NewDonation',
    type: 'event'
  }
]

export default CONTRACT_ABI
