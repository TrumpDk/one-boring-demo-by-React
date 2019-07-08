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
  /*
   * 获取分类ID分类Nav数据
   * params:
   *   id: 当前分类Id
   * */
  getCategoryNavData = parmas => HttpUtil.get('/goods/category', parmas);

  /*
   *  根据分类Id或者制造商Id获取商品
   *  parmas:
   *   brandId: 制造商Id（非必填）
   *   categoryId: 分类Id（非必填）
   *   sort: id(默认排序)、price(价格排序)
   *   order: 排序方式
   *   page: 当前页数
   *   size: 每页数据量
   * */
  getGoodsData = parmas => HttpUtil.get('/goods/list', parmas);

  /*
   * 分类页初始化信息获取
   * */
  getCatalogInitData = parmas => HttpUtil.get('/catalog/index', parmas);

  /*
   *  获取专题数据
   *  parmas:
   *   page: 当前页数
   *   size: 每页数据量
   * */
  getTopicData = parmas => HttpUtil.get('/topic/list', parmas);
}

export default new HttpService();
