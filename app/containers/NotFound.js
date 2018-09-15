import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Icon } from 'antd';
import styled from 'styled-components';
import Header from 'components/Header';
import Footer from 'components/Footer';

const PromptText = styled.div`
	color: #FFF;
	font-size: 1.5em;
	text-align: center;
`

const NotFoundIcon = styled(Icon)`
	color: #FFF;
	font-size: 9.5em;
`;

class NotFound extends React.Component {

  render() {
    return (
      <div>  
      <Header />
      <Row
        className = 'main-bg-color'
        style={{
          paddingBottom: '80px',
					height: '90vh',
          marginTop: '-1px'
        }}
        type="flex"
        justify="space-around"
        align="middle"
      >
      <Col xs={{ span: 22 }} md = {{ span: 16}} lg={{ span: 8 }}>
				<div style={{textAlign:'center'}}>
					<NotFoundIcon type="car" theme="outlined" />
					<PromptText>
						<div> Sorry you might have gone to the wrong place </div>
						<div style={{marginTop:'10%'}}> Back to Home <Link to = '/'><Icon type="home" theme="outlined" /> </Link></div>
					</PromptText> 
				</div>
       </Col>
    </Row>
    <Footer/>
    </div>  
    );
  }
}

export default NotFound;
