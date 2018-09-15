import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Row, Col, Card, Button, Avatar, Carousel, Icon, Tooltip, Divider, Timeline, message } from 'antd';
import styled from 'styled-components';
import * as path from 'path';
import 'styles/homepage.scss';
import Header from 'components/Header';
import Footer from 'components/Footer';

const IconButton = styled(Button)`
  margin: 0 -11px;
  border: 0px;
`

const MarginRow = styled(Row)`
  margin-bottom: 12px;
`

const StyledCarousel = styled(Carousel)`
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #333;
  overflow: hidden;
`;

const CarouselText  = styled.h2`
  color: #FFF;
`;

const IconImage = styled.img`
  height: 28px;
  display: inline-block !important;
  margin: 0 5px;
`;

const ArrowLeft = styled.div`
  width: 0; 
  height: 0; 
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent; 
  border-right: 10px solid #FFF; 
  margin-top: 6px;
  margin-right: -5px;
`;

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      donatelink: '',
      notilink: ''
    };
  } 

  updateInputValue = (event) => {
    let donatelink =  'donate?addr=' + event.target.value;
    let notilink = 'noti?addr=' + event.target.value;
    this.setState({donatelink: donatelink,notilink: notilink })
  } 

  copyLink = (link) => {
    var textField = document.createElement('textarea');
    textField.innerText = window.location.href + this.state[link];
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    message.success('Link copyied to clipboard!');
  };

  render() {

    return (
      <div>  
      <Header />
      <Row
        className = 'main-bg-color'
        style={{
          paddingBottom: '80px',
          minHeight: '90vh',
          marginTop: '-1px'
        }}
        type="flex"
        justify="space-around"
        align="middle"
      >
      
      <Col xs={{ span: 22 }} md = {{ span: 16}} lg={{ span: 8 }}>
        <Card className = "HompagemMainCard" style = {{margin: '10% 0%'}} title= { 
            <div>
              <StyledCarousel autoplay>
              <div> <CarouselText><IconImage src="https://i.imgur.com/NGldgtT.png" /> ETH donations for streamers</CarouselText></div>
              <div> <CarouselText><IconImage src="https://i.imgur.com/DCCFSGZ.png" /> 0 fee, Streamer friendly</CarouselText></div>
              <div> <CarouselText><Avatar size={42} src="https://i.imgur.com/V89IcdI.png"/> Customized donation page</CarouselText></div>
              <div> <CarouselText><Icon type="unlock" theme="outlined" /> No API keys required </CarouselText></div>
              <div> <CarouselText><IconImage src="https://i.imgur.com/NGldgtT.png" /> Enter address, get started!</CarouselText></div>
              </StyledCarousel> 
            </div>
          }
        >
          <MarginRow>
            <div>Wallet address</div> 
            <Input placeholder="Ethereum Address" onChange={evt => this.updateInputValue(evt)}/>
          </MarginRow>
          <MarginRow>
            <Input
                placeholder="Generated donate link for this address"
                value={ this.state.donatelink.length ? path.join(window.location.href,this.state.donatelink) : ''}
                addonBefore= {  
                  <Tooltip placement="topLeft" title="People donate directly to this address through this link">
                  <Link to = {this.state.donatelink}> <span className="red">Donate</span></Link>
                  </Tooltip>
                }
                addonAfter={<IconButton size="small" icon="copy" onClick={ () => this.copyLink('donatelink')} />}
                disabled
            />
          </MarginRow>
          <MarginRow>
            <Input
                placeholder="Generated notification link for this address"
                value={ this.state.notilink.length ? path.join(window.location.href,this.state.notilink) : ''}
                addonBefore={
                  <Tooltip placement="topLeft" title="Streamer displays donate message through this link">
                    <Link to = {this.state.notilink}> <span className="blue">Notification</span> </Link>
                  </Tooltip>
                }
                addonAfter={<IconButton size="small" icon="copy" onClick={ () => this.copyLink('notilink')}/>}
                disabled
            />
          </MarginRow>
        </Card>
        <Divider style={{marginTop: '33px'}}>
          <div style={{display: 'flex'}}>
            <IconImage src="https://i.imgur.com/dutRNrc.png" /> 
            <ArrowLeft/>
            <span style={{color: "#000", fontSize: "16px", backgroundColor: "#FFF", padding: "5px 15px", borderRadius: "10px"}}> 0 fee, 0 setup, only 0x address</span>
          </div>
        </Divider>
        <Card className = "HomepageSubCard" style = {{margin: '10% 0%'}}  title= { "How it works" }>
          <Timeline>
            <Timeline.Item color="green">
              <div>Streamer enters wallet address and generates two unique links </div>
              <div> [<span className="red">Donate</span>] Customized donation page for the streamer</div>
              <div> [<span className="blue">Notification</span>] The donations' notifications will show on this page </div>
            </Timeline.Item>
            <Timeline.Item color="green">
              <div>Streamer shares the <span className="red">Donate link</span> to its viewers</div>
            </Timeline.Item>
            <Timeline.Item color="green">
              <div>Streamer setups browser source for streaming with the <span className="blue">Notification link</span></div>
            </Timeline.Item>
            <Timeline.Item color="red">
              <div>Viewers donate to the streamer through the <span className="red">Donate page</span></div>
              <div>(<a href="https://metamask.io" target="_blank"><Avatar size={20} src="https://i.imgur.com/VDMWCHx.png"/></a> Metamask is required)</div>
            </Timeline.Item>
            <Timeline.Item>
              <div>The donate messages will show on the <span className="blue">Notification page</span>, and displays on the stream</div>
            </Timeline.Item>
          </Timeline>
        </Card>
      </Col>
    </Row>
    <Footer/>
    </div>  
    );
  }
}

export default Home;
