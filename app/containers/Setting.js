import React from 'react';
import { Input, Row, Col, Card, Button } from 'antd';
import styled from 'styled-components';


const IconButton = styled(Button)`
  margin: 0 -11px;
  border: 0px;
`

const MarginRow = styled(Row)`
  margin-bottom: 12px;
`

export default () => (
    <div>
        <Row
            style={{
            height: '100vh'
            }}
            type="flex"
            justify="space-around"
            align="middle"
        >
            <Col span={8}>
            <Card title="設定">
                <MarginRow>
                <Input placeholder="ETH Address" />
                </MarginRow>
                <MarginRow>
                <Input
                    value={`donate link here`}
                    disabled
                    addonBefore="收款連結"
                    addonAfter={<IconButton size="small" icon="copy" />}
                />
                </MarginRow>
                <MarginRow>
                <Input
                    value={`donate link here`}
                    disabled
                    addonBefore="通知連結"
                    addonAfter={<IconButton size="small" icon="copy" />}
                />
                </MarginRow>
            </Card>
            </Col>
        </Row>
    </div>
)
