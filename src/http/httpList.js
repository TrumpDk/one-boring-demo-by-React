import HttpUtil from './http';

class HttpService {
  /*
   * 登录
   * parmas:
   *   mobile
   *   password
   * */
  postLogin = parmas => HttpUtil.post('/auth/loginByMobile', parmas);

  /*
   * 登录
   * parmas:
   *   null
   * */
  dataForHomePage = parmas => HttpUtil.get('/', parmas);
}

export default new HttpService();
