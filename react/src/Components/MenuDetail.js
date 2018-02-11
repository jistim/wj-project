import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Button } from 'antd';

import InputNumber from './InputNumber';

const MenuDetail = ({ menu, putBasket, visible, onClose }) => {
  //
  let count = 1;
  const onSelect = () => {
    putBasket(menu, count);
    onClose();
  };

  return (
    <Modal
      style={{height: '70vh'}}
      key={menu.id}
      visible={visible}
      title={menu.name}
      onOk={onClose}
      onCancel={onClose}
      footer={null}
    >
      <div style={{textAlign: 'center'}}>
        {
          menu.img === null ?
            <img
              src="/assets/img/null.jpg"
              width={400}
            />
            :
            <img
              src={menu.img}
              width={400}
            />
        }
      </div>
      <br/><br/><br/>
      <p style={{textAlign: 'right'}}>&#8361; {(parseFloat(menu.price)*1000).toLocaleString()}</p>
      {menu.name} {menu.volume === null ? null : `(${menu.volume})`}
      <div style={{marginTop: '20px', textAlign: 'right'}}>
        <InputNumber
          defaultValue={count}
          size="Large"
          onChange={(value) => count = value}
        />
        &nbsp;&nbsp;
        <Button onClick={onSelect} type="primary" ghost>Add</Button>
      </div>
    </Modal>
  );
};

MenuDetail.propTypes = {
  //
  menu: PropTypes.object.isRequired,
  putBasket: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default MenuDetail
