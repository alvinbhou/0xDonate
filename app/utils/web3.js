import Web3 from 'web3'

const web3 = new Web3(
  new Web3.providers.HttpProvider(WEB3_PROVIDER_URL)
)
const web3metamask = window.web3 ? new Web3(window.web3.currentProvider) : null

export {
  web3,
  web3metamask
}