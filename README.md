# <img src="https://0xdonate.io/assets/images/favicon.png" height="50px"/>0x Donate

## [0xDonate.io](https://0xdonate.io)
> An Ethereum donate service for streamers, based on smart contract.

## Demo
[<img src="./assets/images/demo.gif">](https://youtu.be/uah9darbB4Y)

Viewers donate through Metamask, and the donate message immediately pops up on top of the stream!

## How it works
### Donate
<img src="https://i.imgur.com/aaSLBnM.png" width="600px">

Viewers donate through the link the streamer provides. Fill in the basic information, click on the "donate" button and this triggers Metamask.

Confirming the transaction and BOOM, you successfully completed the donation!

### Notification
<img src="https://i.imgur.com/DjS9fms.png" width="480px">

Streamer setups browser source for streaming with the Notification link, then the donate messages will pop up on the stream once a transaction is confirmed.

### History
<img src="https://i.imgur.com/lLnRonj.png" width="480px">

All the donate records are stored on the blockchain. Streamers can easily check their top donors.


## Features
* 0 fee
* 0 setup, no API keys required
* Enter your address and get started!

## Setup
### Development
```sh
$ git clone https://github.com/CryoliteZ/0xDonate.git
$ npm install
$ npm run dev
```

### Deployment
```sh
$ npm run build
```

## Articles
<img src="https://i.imgur.com/UOnaAGy.png" height="18px"/> [0xDonate — An Ethereum donate service for streamers](https://medium.com/@alvinbhou/0xdonate-an-ethereum-donate-service-for-streamers-a370f2b8f488)

## Contributors
[Tocknicsu](https://github.com/Tocknicsu)

## License
[MIT License](LICENSE)
