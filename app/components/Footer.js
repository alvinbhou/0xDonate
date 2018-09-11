import React from "react";
import { Layout, Icon } from 'antd';
const { Footer } = Layout;

export default () => (
    <Footer style={{
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        padding: '10px 50px'
    }}>
    <a href={GIT_HOMEPAGE} style={{color: 'rgba(0, 0, 0, 0.65)'}}><Icon type="github" theme="outlined"  /> CryoliteZ  ©2018 </a> 
    </Footer>
)