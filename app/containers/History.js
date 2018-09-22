import React from 'react';
import {  Row, Col, List, Avatar } from 'antd';
import { web3 } from 'utils/web3';
import { DonateContract } from 'contracts/contract';
import styled from 'styled-components';
import { findGetParameter } from 'utils/util';
import Header from 'components/Header';
import Footer from 'components/Footer';
import 'styles/history.scss';

const ETHIcon = styled.img`
	height: 20px;
	margin: 0 5px 0 0;
`;

class History extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
			data: [],
			loading: true,
    }
	} 
	
  componentDidMount () {
		let addr = findGetParameter('addr');
		let that = this;
		if(web3.utils.isAddress(addr)){
			DonateContract.methods.getDonationsCount(addr).call( function (error, dcount) {
				if(!error){
					if(dcount == 0){
						that.setState({loading:false});
						return;
					}
					let donateList = [];
					for(let i = 0; i < dcount; ++i){
						DonateContract.methods.getDonation(addr, i).call(function(error, result){
							let value = web3.utils.fromWei(result[0], "ether" );
							let donor = result[1];
							donateList.push({
								donor: donor,
								value: +parseFloat(value)
							});
							if(donateList.length == dcount){
								that.setState({data: that.genDonateList(donateList)});
								that.setState({loading:false});
							}
						})
					}
				}
			})
		}
		else{
			that.setState({loading:false});
		}
	
	}
	
	genDonateList (data) {
		let donateRecords = [];
		let donateList = {};
		data.forEach(el => {
			if(el.donor in donateList){
				donateList[el.donor] += el.value;
			}
			else{
				donateList[el.donor] = el.value;
			}
		});
		for(let donor in donateList){
			donateRecords.push([donor, donateList[donor]]);
		}
		donateRecords.sort(function(a,b){return b[1]-a[1]});
		for(let i = 0; i < donateRecords.length; ++i){
			donateRecords[i] = {donor: donateRecords[i][0], value: +donateRecords[i][1].toFixed(7), rank: i+1};
		}
		return(donateRecords);
	}

  render () {
    return (
      <div>
      <Header/>
      <Row
        className = 'main-bg-color'
        style={{
          paddingBottom: '80px',
          minHeight: '90vh',
					marginTop: '-1px',
					paddingTop: '4%'
        }}
        type="flex"
        justify="space-around"
        align="middle"
      >
				<Col xs={{ span: 22 }} md = {{ span: 16}} lg={{ span: 8 }}>
         
         <List
				 	className="donateRecords"
					style={{
						backgroundColor: '#FFF'
					}}
					loading= {this.state.loading}
          itemLayout="horizontal"
          size="large"
          dataSource={this.state.data}
          renderItem={item => (
            <List.Item className="donateRecord">
							<List.Item.Meta
								avatar={ <Avatar src="https://i.imgur.com/V89IcdI.png"  className="donateRecordAvatar" />	}
								title= {`${item.donor}`} 
								description= { <div><ETHIcon src="https://i.imgur.com/NGldgtT.png"  />{`${item.value}`} </div>}
							/>
      
            </List.Item>
          )}
        />
				</Col>
      </Row>
      <Footer/>
      </div>
    )
  }
}

export default History
