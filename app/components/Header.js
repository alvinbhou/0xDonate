import React from 'react';
import { Layout, Icon, Row } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;

export default () => (
    <Row span={24}>
        <Header
            style={{
            background: '#555',
            color: '#FFF',
            fontSize: '2em',
            marginTop: '2%'
            }}
            type="flex"
            justify="space-around"
            align="middle"
        >
        <Icon type="coffee" theme="outlined" /> <Link to = '/' style={{color: '#FFF'}}>0x Donate</Link>
        </Header>
    </Row>
)