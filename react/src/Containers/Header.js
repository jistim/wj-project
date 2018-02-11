import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Components/Header';

class HeaderContainer extends React.Component {
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
      <Header
        title={this.props.title}
      />
    );
  }
}

HeaderContainer.propTypes = {
  //
  title: PropTypes.string.isRequired
};

export default HeaderContainer
