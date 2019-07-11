import AsyncComponent from '../AsyncDynamicComponent/AsyncComponent';
const Home = AsyncComponent(() => import('../page/Home/Home'));
const Categorys = AsyncComponent(() => import('../page/category/category'));
const Topic = AsyncComponent(() => import('../page/Topic/Topic'));
const CateLog = AsyncComponent(() => import('../page/cateLog/CateLog'));
const Mine = AsyncComponent(() => import('../page/Mine/Mine'));
const Goods = AsyncComponent(() => import('../page/goods/Goods'));

const RouterList = [
  {
    name: '首页',
    link: '/Home',
    isTab: true,
    component: Home
  },
  {
    name: '分类商品',
    link: '/categorys/:id',
    isTab: false,
    component: Categorys
  },
  {
    name: '专题',
    link: '/Topic',
    isTab: true,
    component: Topic
  },
  {
    name: '分类',
    link: '/CateLog',
    isTab: true,
    component: CateLog
  },
  {
    name: '我的',
    link: '/Mine',
    isTab: true,
    component: Mine
  },
  {
    name: '商品详情',
    link: '/goods/:id',
    isTab: false,
    component: Goods
  }
];

export default RouterList;
