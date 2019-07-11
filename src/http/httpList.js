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

  /*
   * 根据分类ID获取当前分类信息和子分类
   * parmas:
   *   id: 分类Id
   * */
  getCatalogMsg = parmas => HttpUtil.get('/catalog/current', parmas);

  /*
   * 获取在售商品数量
   * */
  getSellGoodsCount = parmas => HttpUtil.get('/goods/count', parmas);

  /*
   * 获取商品详情
   * /api/goods/detail
   * parmas:
   *   id: 商品id
   * */
  getGoodsDetail = (parmas = {}) => HttpUtil.get('/goods/detail', parmas);

  /*
   * 相关商品
   * /api/goods/related
   * parmas:
   *   id: 商品id
   * */
  getGoodsRelated = (parmas = {}) => HttpUtil.get('/goods/related', parmas);

  /*
   * 获取用户购物车商品数量
   * /api/cart/goodscount
   * parmas:
   * */
  getCartNum = (parmas = {}) => HttpUtil.get('/cart/goodscount', parmas);

  /*
   * 是否添加到收藏栏
   * /api/collect/addordelete
   * parmas:
   *   typeId: 0：是 、1:否（商品状态）
   *   valueId: 商品Id
   * */
  postDoLikes = parmas => HttpUtil.post('/collect/addordelete', parmas);

  /*
   * 添加到购物车
   * /api/cart/add
   * parmas:
   *   goodsId: 商品Id
   *   number: 数量
   *   productId: 产品价格ID
   * */
  postAddCart = parmas => HttpUtil.post('/cart/add', parmas);
}

export default new HttpService();
