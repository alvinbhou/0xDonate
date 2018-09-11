import React from 'react';
import { Layout, Icon, Col } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;

export default () => (
    <Col span={24}>
        <Header
            style={{
            background: '#555',
            color: '#FFF',
            fontSize: '2.6em',
            marginTop: '2%'
            }}
            type="flex"
            justify="space-around"
            align="middle"
        >
        <Icon type="coffee" theme="outlined" /> <Link to = '/' style={{color: '#FFF'}}>0x Donate</Link>
        </Header>
    </Col>
)