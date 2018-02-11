import 'whatwg-fetch';

export default (() => {
  //
  let fetchAjax = {};

  let errorCallback;

  let checkStatus = (response) => {
    //
    if (!response.ok) {
      if (typeof errorCallback === 'function') errorCallback(response.status);
      throw new Error(response.statusText); // FIXME
    }
    let responseType = response.headers.get('Content-Type');
    if (responseType === undefined || responseType === null) {
      return response.blob();
    }
    if (responseType.includes('text')) {
        return response.text();
    }
    if (responseType.includes('json')) {
        return response.json();
    }
    return response.blob();
  };

  let requestJSON = (url, method, reqJSON) => {
    //
    if (!url || typeof url !== 'string') {
      console.error('[FetchAjax] Invalid url for Ajax JSON');
      return;
    }

    console.debug(`[FetchAjax] ${method} JSON : ${url}`);

    if (typeof reqJSON === 'object') {
      reqJSON = JSON.stringify(reqJSON);
    }

    return fetch(url, {
      method: method,
      mode: "same-origin",
      credentials: "same-origin",
      headers: {
        'Content-Type': 'application/json'
      },
      body: reqJSON
    }).then(checkStatus);

  };

  fetchAjax.setErrorCallback = (callback) => {
    //
    if (typeof callback === 'function') {
      errorCallback = callback;
    }
  };

  fetchAjax.getJSON = (url) => {
    //
    return requestJSON(url, 'GET');
  };

  fetchAjax.postJSON = (url, reqJSON) => {
    //
    return requestJSON(url, 'POST', reqJSON);
  };

  fetchAjax.putJSON = (url, reqJSON) => {
    //
    return requestJSON(url, 'PUT', reqJSON);
  };

  fetchAjax.deleteJSON = (url) => {
    //
    return requestJSON(url, 'DELETE');
  };

  fetchAjax.postFormData = (url, formData) => {
    //
    if (!url || typeof url !== 'string') {
      console.error('[FetchAjax] Invalid url for File upload');
      return;
    }

    console.debug(`[FetchAjax] File upload : ${url}`);

    return fetch(url, {
      method: 'POST',
      mode: "same-origin",
      credentials: "same-origin",
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    }).then(checkStatus);
  };

  return fetchAjax;
})()
