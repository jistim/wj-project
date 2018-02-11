import React from 'react';

import Admin from '../Components/Admin';
import API from '../modules/api';

/* global JistimUtils */

const adminMenu = [
  "BASIC SETTINGS",
  "MENU SETTINGS"
];


class AdminContainer extends React.Component {
  //
  constructor(props) {
    //
    super(props);
    this.state = {
      isLogin: undefined,
      selectedMenu: null
    };
    
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentWillMount() {
    //
    API.isLogin(((isLogin) => {
      this.setState({isLogin: isLogin});
    }).bind(this));
  }
  componentWillUnmount() {
    //
    this.logout();
  }
  login(username, password) {
    //
    API.login(username, password, ((isLogin) => {
      this.setState({isLogin: isLogin});
    }).bind(this));
  }
  logout() {
    //
    API.logout((() => {
      this.setState({isLogin: false});
    }).bind(this));
  }
  render() {
    //
    const isLogin = this.state.isLogin;
    
    if (JistimUtils.isNull(isLogin)) {
      return null;
    }
    
    return (
      <Admin
        isLogin={isLogin}
        login={this.login}
        logout={this.logout}
      />
    );
  }

}

export default AdminContainer
