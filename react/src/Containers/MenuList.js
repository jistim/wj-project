import React from 'react';
import PropTypes from 'prop-types';

import MenuList from '../Components/MenuList';

class MenuListContainer extends React.Component {
  //
  constructor(props) {
    //
    super(props);
    this.state = {
      menuList: null
    };
    this.initialize = this.initialize.bind(this);
  }
  componentWillMount() {
    //
    this.initialize();
  }
  componentWillReceiveProps(nextProps) {
    //
    if (this.props.category.name !== nextProps.category.name) {
      this.setState({menuList: null});
      this.props.selectMenu(null);
    }
  }
  componentDidUpdate(prevProps) {
    //
    if (this.props.category.name !== prevProps.category.name) {
      this.initialize();
    }
  }
  initialize() {
    //
    const
      groupList = this.props.category.groupList,
      menuList = this.props.menuList,
      orderedMenuList = [];

    groupList.forEach(groupName => {
      const groupMenu = {
        name: groupName,
        menuList: []
      };
      menuList.forEach(menu => {
        if (groupName === menu.group) {
          groupMenu.menuList.push(menu);
        }
      });
      orderedMenuList.push(groupMenu);
    });

    const noGroupMenu = {
      name: groupList.length === 0 ? this.props.category.name : 'Etc',
      menuList: []
    };
    menuList.forEach(menu => {
      if (JistimUtils.isNull(menu.group)) {
        noGroupMenu.menuList.push(menu);
      }
    });
    if (noGroupMenu.menuList.length > 0) {
      orderedMenuList.push(noGroupMenu);
    }

    this.setState({
      menuList: orderedMenuList
    });
  }
  render() {
    //
    const menuList = this.state.menuList;

    if (JistimUtils.isNull(menuList)) {
      return null;
    }

    return (
      <MenuList
        menuList={menuList}
        selectMenu={this.props.selectMenu}
      />
    );
  }
}

MenuListContainer.propTypes = {
  //
  category: PropTypes.object.isRequired,
  menuList: PropTypes.array.isRequired,
  selectMenu: PropTypes.func.isRequired
};

export default MenuListContainer
