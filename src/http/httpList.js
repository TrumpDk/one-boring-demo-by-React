import HttpUtil from './http';

export default class HttpService {
  /*
   * 登录
   * parmas:
   *   mobile
   *   password
   * */
  static postLogin = parmas => HttpUtil.post('/auth/loginByMobile', parmas);
}
