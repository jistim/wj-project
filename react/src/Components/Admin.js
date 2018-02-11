import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';

const Admin = (props) => {
  //
  return (
    <Layout>
      <Layout.Header
        className="header"
        style={{
          height: '10vh',
          background: '#3255a4',
          color: '#FFF',
          textAlign: 'center',
          lineHeight: '10vh',
          fontSize: '40px'
        }}
      >
        관리 페이지
      </Layout.Header>
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

Admin.propTypes = {
  //
  isLogin: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export default Admin
