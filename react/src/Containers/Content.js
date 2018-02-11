import React from 'react';
import PropTypes from 'prop-types';

import MenuList from './MenuList';
import Content from '../Components/Content';

class ContentContainer extends React.Component {
  //
  constructor(props) {
    //
    super(props);
    this.state = {
      selectedMenu: null,
      basket: []
    };
    this.selectMenu = this.selectMenu.bind(this);
    this.putBasket = this.putBasket.bind(this);
    this.pullBasket = this.pullBasket.bind(this);
    this.resetBasket = this.resetBasket.bind(this);
  }
  selectMenu(menuId) {
    //
    const
      menuList = this.props.menuList,
      selectedMenu = JistimUtils.isNull(menuId) ? null : menuList.find(menu => menu.id === menuId);
    this.setState({selectedMenu: selectedMenu});
  }
  putBasket(menu, count) {
    //
    const
      basket = this.state.basket,
      newItem = {
        menu: menu,
        count: count
      };
    if (basket.findIndex(item => item.menu.id === menu.id) === -1) {
      this.setState({
        basket: [...basket, newItem]
      });
    } else {
      this.setState({
        basket: basket.map(item => {
          if (item.menu.id === menu.id) {
            return newItem;
          }
          return item;
        })
      });
    }
  }
  pullBasket(menu) {
    //
    this.setState({
      basket: this.state.basket.filter(item => item.menu.id !== menu.id)
    });
  }
  resetBasket() {
    //
    this.setState({basket: []});
  }
  render() {
    //
    const MenuListContainer = (
      <MenuList
        category={this.props.category}
        menuList={this.props.menuList}
        selectMenu={this.selectMenu}
      />
    );

    return (
      <Content
        MenuList={MenuListContainer}
        closeDetail={() => this.selectMenu(null)}
        selectedMenu={this.state.selectedMenu}

        basket={this.state.basket}
        putBasket={this.putBasket}
        pullBasket={this.pullBasket}
        resetBasket={this.resetBasket}
      />
    );
  }
}

ContentContainer.propTypes = {
  //
  category: PropTypes.object.isRequired,
  menuList: PropTypes.array.isRequired
};

export default ContentContainer
