import React from 'react';
import PropTypes from 'prop-types';

import Sider from '../Components/Sider';

class SiderContainer extends React.Component {
  //
  constructor(props) {
    //
    super(props);
    this.state = {
    };
  }
  render() {
    //
    return (
      <Sider
        categoryList={this.props.categoryList}
        selectCategory={this.props.selectCategory}
        selectedCategory={this.props.selectedCategory}
      />
    );
  }
}

SiderContainer.propTypes = {
  //
  categoryList: PropTypes.array.isRequired,
  selectCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.object.isRequired
};

export default SiderContainer
