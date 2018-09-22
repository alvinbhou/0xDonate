import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Row, Col, Card, Button, Avatar, Carousel, Icon, Tooltip, Divider, Timeline, Modal, Tag, message } from 'antd';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import * as path from 'path';
import 'styles/homepage.scss';
import Header from 'components/Header';
import Footer from 'components/Footer';
 
const cookies = new Cookies();
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

const ReferenceCols = styled.div`
  text-align:center;
  width: 33%;
`;

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      addr: '',
      donatelink: '',
      notilink: '',
      historylink: '',
      demovisible: false,
    };
  } 

  componentDidMount() {
    let addr = cookies.get('addr');
    if(addr){
      this.updateAddrLinks(addr);
    }
  }

  updateInputValue = (event) => {
    let addr = event.target.value;
    this.updateAddrLinks(addr);
  } 

  updateAddrLinks = (addr) => {
    let donatelink =  'donate?addr=' + addr;
    let notilink = 'noti?addr=' + addr;
    let historylink = 'history?addr=' +  addr;
    cookies.set('addr', addr, {path: '/', maxAge: 603400});
    this.setState({addr: addr, donatelink: donatelink,notilink: notilink, historylink : historylink })
  }

  showDemo = (e) => {
    this.setState({
      demovisible: true,
    });
  }

  hideDemo = (e) => {
    this.setState({
      demovisible: false,
    });
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
              <div> <CarouselText><Avatar size={42} src="https://i.imgur.com/V89IcdI.png"/> Top donation list</CarouselText></div>
              <div> <CarouselText><Icon type="unlock" theme="outlined" /> No API keys required </CarouselText></div>
              <div> <CarouselText><IconImage src="https://i.imgur.com/NGldgtT.png" /> Enter address, get started!</CarouselText></div>
              </StyledCarousel> 
            </div>
          }
        >
          <MarginRow>
            <div>Wallet address</div> 
            <Input 
              value={ this.state.addr.length ? this.state.addr : ''}
              placeholder="Ethereum Address" onChange={evt => this.updateInputValue(evt)}/>
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
          <MarginRow>
            <Input
                placeholder="Generated donate history link for this address"
                value={ this.state.historylink.length ? path.join(window.location.href,this.state.historylink) : ''}
                addonBefore={
                  <Tooltip placement="topLeft" title="Streamer checks the top donors and donate history here">
                    <Link to = {this.state.historylink}> <span className="yellow">History</span> </Link>
                  </Tooltip>
                }
                addonAfter={<IconButton size="small" icon="copy" onClick={ () => this.copyLink('historylink')}/>}
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
              <div>Streamer enters wallet address and generates 3 unique links </div>
              <div> [<Link to = {this.state.donatelink}><span className="red"> Donate</span></Link>] Customized donation page for the streamer</div>
              <div> [<Link to = {this.state.notilink}><span className="blue"> Notification</span></Link>] The donations' notifications will show on this page </div>
              <div> [<Link to = {this.state.historylink}><span className="yellow"> History</span></Link>] The donate history will show on this page </div>
            </Timeline.Item>
            <Timeline.Item color="green">
              <div>Streamer shares<Link to = {this.state.donatelink}> <span className="red">Donate link</span></Link> to its viewers</div>
            </Timeline.Item>
            <Timeline.Item color="green">
              <div>Streamer setups browser source for streaming with the<Link to = {this.state.notilink}> <span className="blue"> Notification link </span></Link></div>
            </Timeline.Item>
            <Timeline.Item color="red">
              <div>Viewers donate to the streamer through the <Link to = {this.state.donatelink}><span className="red">Donate page</span></Link></div>
              <div>(<a href="https://metamask.io" target="_blank"><Avatar size={20} src="https://i.imgur.com/VDMWCHx.png"/></a> Metamask is required)</div>
            </Timeline.Item>
            <Timeline.Item>
              <div>
                <span style={{marginRight: '5px'}}>
                  The donate messages will show on the  <Link to = {this.state.notilink}><span className="blue">Notification page</span></Link>, and displays on the stream 
                </span>
                {/* <Popover
                  className='demopopup'
                  style = {{
                  }}
                  content={
                    <video controls width ="100%">
                    <source src="assets/images/test.mp4" type="video/mp4"/>
                    </video>}
                  // title="Title"
                  trigger="click"
                  visible={this.state.demovisible}
                  onVisibleChange={this.showDemo}
                >
                  <Tag color="blue">Demo</Tag>
                </Popover> */}
                <Tag color="blue" onClick={this.showDemo}>Demo</Tag>
                <Modal
                  className = 'demoModal'
                  title="↓ ↓ Notification here↓ ↓ "
                  visible={this.state.demovisible}
                  onCancel={this.hideDemo}
                  footer = {null}
                >
                <video controls width ="100%">
                  <source src="assets/images/demo.mp4" type="video/mp4"/>
                </video>
                </Modal>
              </div>
            </Timeline.Item>
            <Timeline.Item color='#F57F17'>
              <div>Streamer checks the top donors and donate records at the <Link to = {this.state.historylink}><span className="yellow">History page</span></Link></div>
            </Timeline.Item>
          </Timeline>
          {/* <Divider/> */}
          <div style={{display: 'flex'}}>
            <ReferenceCols>
              <a href={`${ETHERSCAN_URL}/address/${CONTRACT_ADDRESS}`} target='_blank'>
                <IconImage src="assets/images/etherscan.png" /> 
                <span className="linkUrlSpan">Contract</span>
              </a>
            </ReferenceCols>
            <ReferenceCols>
              <a href={MEDIUM_URL} target='_blank'>
                <IconImage src="assets/images/medium.svg" /> 
                <span className="linkUrlSpan" >Medium</span>
              </a>
            </ReferenceCols>
            <ReferenceCols>
              <a href={GIT_HOMEPAGE} target='_blank'>
                <IconImage src="assets/images/github.png" /> 
                <span className="linkUrlSpan">Github</span>
              </a>
            </ReferenceCols>
          </div>
        </Card>
      </Col>
    </Row>
    <Footer/>
    </div>  
    );
  }
}

export default Home;
