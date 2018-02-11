import FetchAjax from './fetchAjax';

// mock
import localData from './localData';


const ajaxErrorCallback = (errCode) => {

  if (errCode === 401) {
    window.location.reload();
  }
};

FetchAjax.setErrorCallback(ajaxErrorCallback.bind(this));

export default {

  findTalks: (roomId, offset, limit, successCallback) => {
    FetchAjax.getJSON(`talk-api/talk-rooms/${roomId}/talks?offset=${offset}&limit=${limit}`)
      .then(() => {
        if (typeof successCallback === 'function') successCallback();
      });
  },


  // mock
  loadData: (successCallback) => {
    if (typeof successCallback === 'function') successCallback(localData);
  },
  
  // mock - admin
  login: (username, password, successCallback) => {
    if (typeof successCallback === 'function') successCallback(true);
  },
  logout: (successCallback) => {
    if (typeof successCallback === 'function') successCallback();
  },
  isLogin: (successCallback) => {
    if (typeof successCallback === 'function') successCallback(true);
  },
  

};
