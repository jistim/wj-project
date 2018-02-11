import React from 'react';
import PropTypes from 'prop-types';

import { Collapse, Row, Col, Icon, Popconfirm, Button } from 'antd';

import InputNumber from './InputNumber';

const Panel = Collapse.Panel;

const Basket = ({ basket, putBasket, pullBasket, resetBasket }) => {
  //
  const
    totalCount = (() => {
      let count = 0;
      basket.forEach(item => count += item.count);
      return count;
    })(),
    totalPrice = (() => {
      let sum = 0;
      basket.forEach(item => sum += item.count * parseFloat(item.menu.price));
      return sum;
    })(),
    Header = (
      <Row gutter={24}>
        <Col xs={{span: 10, offset: 0}}>
          total : {totalCount} items
        </Col>
        <Col
          xs={{span: 7, offset: 7}}
          style={{textAlign: 'right'}}
        >
          &#8361; {(totalPrice*1000).toLocaleString()} &nbsp; &nbsp;
        </Col>
      </Row>
    );

  return (
    <Collapse style={{position: 'absolute', bottom: '0', width: '520px'}}>
      <Panel header={Header} key="1">
        {
          basket.map(item => {
            return (
              <Row key={item.menu.id} gutter={24} align="middle">
                <Col xs={{span: 12, offset: 0}}>
                  {item.menu.name} {item.menu.volume === null ? null : `(${item.menu.volume})`}
                </Col>
                <Col
                  xs={{span: 5, offset: 1}}
                  style={{textAlign: 'right'}}
                >
                  &#8361; {(parseFloat(item.menu.price)*1000).toLocaleString()}
                </Col>
                <Col xs={{span: 4, offset: 0}}>
                  <InputNumber
                    defaultValue={item.count}
                    size="Small"
                    onChange={(value) => putBasket(item.menu, value)}
                  />
                </Col>
                <Col
                  xs={{span: 1, offset: 0}}
                >
                  <Icon type="delete" onClick={() => pullBasket(item.menu)}/>
                </Col>
              </Row>
            );
          })
        }
        <div style={{textAlign: 'right', marginTop: '30px'}}>
          <Popconfirm
            placement="topRight" title="confirm" onConfirm={resetBasket}
            okText="Yes" cancelText="No"
          >
            <Button type="danger" ghost>Remove All</Button>
          </Popconfirm>
        </div>
      </Panel>
    </Collapse>
  );
};

Basket.propTypes = {
  //
  basket: PropTypes.array.isRequired,
  putBasket: PropTypes.func.isRequired,
  pullBasket: PropTypes.func.isRequired,
  resetBasket: PropTypes.func.isRequired
};

export default Basket
