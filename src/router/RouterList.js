import AsyncComponent from '../AsyncDynamicComponent/AsyncComponent';
const Home = AsyncComponent(() => import('../page/Home/Home'));
const RouterList = [
  {
    name: '首页',
    link: '/Home',
    isTab: true,
    component: Home
  }
];

export default RouterList;
