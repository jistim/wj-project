import React from 'react';

import Header from './Header';
import Sider from './Sider';
import Content from './Content';
import Base from '../Components/Base';
import API from '../modules/api';

/* global JistimUtils */

class BaseContainer extends React.Component {
  //
  constructor(props) {
    //
    super(props);
    this.state = {
      data: null,
      // data: {
      //   title: null,
      //   categoryList: null,
      //   menuList: null
      // }
      selectedCategory: null
    };
    this.loadData = this.loadData.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
  }
  componentWillMount() {
    //
    this.loadData();
  }
  loadData() {
    //
    API.loadData(((data) => {
      const categoryList = data.categoryList;
      this.setState({
        data: data,
        selectedCategory: JistimUtils.isEmpty(categoryList) ? null : categoryList[0]
      });
    }).bind(this));
  }
  selectCategory(categoryId) {
    //
    const selectedCategory = this.state.data.categoryList.find(category => category.id === categoryId);
    this.setState({selectedCategory: selectedCategory});
  }
  render() {
    //
    const
      data = this.state.data,
      selectedCategory = this.state.selectedCategory;

    if (JistimUtils.isNull(data) || JistimUtils.isNull(selectedCategory)) {
      return null;
    }

    const
      HeaderContainer = (
        <Header
          title={data.title}
        />
      ),
      SiderContainer = (
        <Sider
          categoryList={data.categoryList}
          selectCategory={this.selectCategory}
          selectedCategory={selectedCategory}
        />
      ),
      ContentContainer = (
        <Content
          category={selectedCategory}
          menuList={data.menuList.filter(menu => menu.category === selectedCategory.name)}
        />
      );

    return (
      <Base
        Header={HeaderContainer}
        Sider={SiderContainer}
        Content={ContentContainer}
      />
    );
  }
}

export default BaseContainer
