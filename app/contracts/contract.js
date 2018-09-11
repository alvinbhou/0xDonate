import {web3, web3metamask} from 'utils/web3'
import contractABI from 'contracts/contractABI'

// const DonateContract = new web3.eth.Contract(contractABI, '0x45d8a9f9d2495250041d9715ad54289473c458d6')

const DonateContractABI = web3metamask ? web3metamask.eth.contract(contractABI) : web3.eth.contract(contractABI)
const DonateContract = DonateContractABI.at('0x45d8a9f9d2495250041d9715ad54289473c458d6')

export default DonateContract
