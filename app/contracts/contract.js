import {web3, web3metamask} from 'utils/web3'
import contractABI from 'contracts/contractABI'

const DonateContractABIMetamask = web3metamask ? web3metamask.eth.contract(contractABI) : web3.eth.contract(contractABI);
const DonateContractMetamask = DonateContractABIMetamask.at(CONTRACT_ADDRESS);

const DonateContractABI = web3.eth.contract(contractABI);
const DonateContract = DonateContractABI.at(CONTRACT_ADDRESS);

export {
    DonateContractMetamask, 
    DonateContract
}
