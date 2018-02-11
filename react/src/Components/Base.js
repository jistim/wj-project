import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';

const Base = (props) => {
  //
  return (
    <Layout>
      { props.Header }
      <Layout
        className="ant-layout-has-sider"
        style={{height: '90vh'}}
      >
        { props.Sider }
        <Layout style={{paddingLeft: '24px'}}>
          { props.Content }
        </Layout>
      </Layout>
    </Layout>
  );
};

Base.propTypes = {
  //
  Header: PropTypes.element.isRequired,
  Sider: PropTypes.element.isRequired,
  Content: PropTypes.element.isRequired
};

export default Base
