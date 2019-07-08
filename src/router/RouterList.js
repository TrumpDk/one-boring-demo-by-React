import AsyncComponent from '../AsyncDynamicComponent/AsyncComponent';
const Home = AsyncComponent(() => import('../page/Home/Home'));
const Categorys = AsyncComponent(() => import('../page/category/category'));
const Topic = AsyncComponent(() => import('../page/Topic/Topic'));
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
  }
];

export default RouterList;
