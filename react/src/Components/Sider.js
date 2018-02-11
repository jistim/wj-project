import React from 'react';
import PropTypes from 'prop-types';

import { Layout, Menu } from 'antd';

const Sider = ({ categoryList, selectCategory, selectedCategory }) => {
  //
  return (
    <Layout.Sider
      width={200}
      style={{
        padding: '0',
        backgroundColor: '#D0D0CE'
      }}
    >
      <Menu
        defaultOpenKeys={['Menu']}
        defaultSelectedKeys={[selectedCategory.id]}
        onSelect={(e) => selectCategory(e.key)}
        mode="inline"
        style={{
          backgroundColor: '#D0D0CE'
        }}
      >
        <Menu.SubMenu
          key="Menu"
          title={<div style={{fontSize: '18px'}}>Menu</div>}
        >
          {
            categoryList.map(category => {
              return (
                <Menu.Item
                  key={category.id}
                  style={{
                    fontSize: '17px',
                    backgroundColor: '#CFCDC9'
                  }}
                >
                  { category.name }
                </Menu.Item>
              );
            })
          }
        </Menu.SubMenu>
      </Menu>
    </Layout.Sider>
  );
};

Sider.propTypes = {
  //
  categoryList: PropTypes.array.isRequired,
  selectCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.object.isRequired
};

export default Sider
