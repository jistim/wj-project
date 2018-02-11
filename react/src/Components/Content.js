import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';

import MenuDetail from './MenuDetail';
import Basket from './Basket';

const Content = (props) => {
  //
  return (
    <Layout.Content
      style={{
        paddingBottom: '40px'
      }}
    >
      { props.MenuList }
      {
        props.selectedMenu !== null ?
          <MenuDetail
            menu={props.selectedMenu}
            putBasket={props.putBasket}
            visible={props.selectedMenu !== null}
            onClose={props.closeDetail}
          />
          : null
      }
      {
        props.basket.length > 0 && props.selectedMenu === null ?
          <Basket
            basket={props.basket}
            putBasket={props.putBasket}
            pullBasket={props.pullBasket}
            resetBasket={props.resetBasket}
          />
          : null
      }
    </Layout.Content>
  );
};

Content.propTypes = {
  //
  MenuList: PropTypes.element.isRequired,
  closeDetail: PropTypes.func.isRequired,
  selectedMenu: PropTypes.object,

  basket: PropTypes.array.isRequired,
  putBasket: PropTypes.func.isRequired,
  pullBasket: PropTypes.func.isRequired,
  resetBasket: PropTypes.func.isRequired
};

export default Content
