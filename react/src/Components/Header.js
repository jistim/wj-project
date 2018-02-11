import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';

const Header = ({ title }) => {
  //
  return (
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
      { title }
    </Layout.Header>
  );
};

Header.propTypes = {
  //
  title: PropTypes.string.isRequired
};

export default Header
