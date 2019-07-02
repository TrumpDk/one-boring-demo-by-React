import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  timeout: 2000,
  withCredentials: true // 跨域类型时是否在请求中协带cookie
});

const getNewHeaders = {
  'x-nideshop-token': window.localStorage.getItem('token')
};

export default class HttpUtil {
  // set a default value for params
  static get(url, params = {}) {
    return new Promise((resolve, reject) => {
      instance
        .get(url, { params, headers: getNewHeaders })
        .then(({ data }) => {
          if (data.errno === 0) {
            resolve(data.data);
          } else {
            resolve(data);
          }
        })
        .catch(error => {
          reject({ err: JSON.stringify(error) });
        });
    });
  }

  // set a default value for params
  static post(url, params = {}) {
    return new Promise((resolve, reject) => {
      instance
        .post(url, { ...params }, { headers: getNewHeaders })
        .then(({ data }) => {
          resolve(data);
        })
        .catch(err => {
          reject({ err: JSON.stringify(err) });
        });
    });
  }
}
