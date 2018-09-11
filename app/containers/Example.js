import React from 'react'
import { Input, Row, Col, Card, Button } from 'antd'
import styled from 'styled-components'

const IconButton = styled(Button)`
  margin: 0 -11px;
  border: 0px !important;
`
const MarginRow = styled(Row)`
  margin-bottom: 12px;
`
export default () => (
  <Row
    style={{
      height: '60vh'
    }}
    type="flex"
    justify="space-around"
    align="middle"
  >
  <Col xs={{ span: 16 }} lg={{ span: 8 }}>
      <Card title="Input Exmaples">
        <MarginRow>
          <Input placeholder="Some input..." />
        </MarginRow>
        <MarginRow>
          <Input
            value={`Some link here...`}
            disabled
            addonBefore="Pay"
            addonAfter={<IconButton size="small" icon="copy" />}
          />
        </MarginRow>
      </Card>
    </Col>
  </Row>
)
