import {web3, web3metamask} from 'utils/web3'
import contractABI from 'contracts/contractABI'

const DonateContractMetamask = web3metamask ? new web3metamask.eth.Contract(contractABI, CONTRACT_ADDRESS ) : new web3.eth.Contract(contractABI, CONTRACT_ADDRESS);

const DonateContract = new web3.eth.Contract(contractABI, CONTRACT_ADDRESS);

export {
    DonateContractMetamask, 
    DonateContract
}
