import React from 'react';
import PropTypes from 'prop-types';

import { Tree, Row, Col } from 'antd';

import NationalUtil from '../modules/national';

const TreeNode = Tree.TreeNode;

const MenuList = ({ menuList, selectMenu }) => {
  //
  const onSelect = (keys, event) => {
    const nodeProps = event.node.props;
    if (nodeProps.isLeaf) {
      selectMenu(nodeProps.eventKey);
    }
  };

  return (
    <Tree
      defaultExpandAll={true}
      onSelect={onSelect}
    >
      {
        menuList.map(group => {
          return (
            <TreeNode
              title={
                <div style={{fontSize: '15px'}}>
                  {group.name}
                </div>
              }
              key={group.name}
              isLeaf={false}
            >
              {
                group.menuList.map((menu, index, arr) => {
                  return (
                    <TreeNode
                      title={
                        <Row
                          gutter={24}
                          style={{
                            fontSize: '14px',
                            width: '65vw'
                          }}
                        >

                          <Col xs={{span: 1, offset: 0}}>
                            {
                              index !== 0 && arr[index-1].name === menu.name ?
                                null
                                :
                                menu.national === null ?
                                  null
                                  :
                                  <img
                                    style={{
                                      backgroundColor: '#FFF',
                                      verticalAlign: 'middle'
                                    }}
                                    height={17}
                                    src={NationalUtil.getNationalImagePath(menu.national)}
                                  />
                            }
                          </Col>

                          <Col xs={{span: 10, offset: 1}}>
                            {
                              index !== 0 && arr[index-1].name === menu.name ?
                                null
                                :
                                menu.name
                            }
                          </Col>

                          <Col
                            xs={{span: 3, offset: 3}}
                            style={{textAlign: 'right'}}
                          >
                            {
                              menu.volume === null ?
                                null
                                :
                                `(${menu.volume})`
                            }
                          </Col>

                          <Col
                            xs={{span: 3, offset: 1}}
                            style={{textAlign: 'right'}}
                          >
                            {parseFloat(menu.price).toLocaleString()}
                          </Col>
                        </Row>
                      }
                      key={menu.id}
                      isLeaf={true}
                    />
                  );
                })
              }
            </TreeNode>
          );
        })
      }
    </Tree>
  );
};

MenuList.propTypes = {
  //
  menuList: PropTypes.array.isRequired,
  selectMenu: PropTypes.func.isRequired
};

export default MenuList
