import React from 'react';
import { ActivityIndicator } from 'antd-mobile';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from '../LogIn/LogIn';
import RouterList from '../../router/RouterList';
import './App.scss';
const tabList = [
  { icon: 'iconfont icon-caidaniconshouyehui', name: '首页', url: '/home' },
  { icon: 'iconfont icon-clone', name: '专题', url: '/topic' },
  { icon: 'iconfont icon-sort', name: '分类', url: '/catelog' },
  { icon: 'iconfont icon-cart', name: '购物车', url: '/cart' },
  { icon: 'iconfont icon-mine', name: '我的', url: '/mine' }
];

function RenderRouterList({
  routers,
  setAnimationState,
  setAnimationStateFalse
}) {
  return routers.map(item => (
    <Route
      path={item.link}
      key={item.link}
      render={() => (
        <div className={item.isTab ? 'tabPageContent' : 'noTabPageContent'}>
          <item.component
            setAnimationState={setAnimationState}
            setAnimationStateFalse={setAnimationStateFalse}
          />
        </div>
      )}
    />
  ));
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: true,
      isLogin: false
    };
  }

  componentWillMount() {
    this.setState({
      animating: true
    });
  }

  setLoginState() {
    this.setState({
      isLogin: true
    });
  }

  // after view loaded,stop animating
  componentDidMount() {
    this.setState({
      animating: false
    });
  }

  setAnimationState() {
    this.setState({
      animating: true
    });
  }

  setAnimationStateFalse() {
    this.setState({
      animating: false
    });
  }

  render() {
    return (
      <div className="AppRoot">
        <ActivityIndicator
          toast
          text="Loading..."
          animating={this.state.animating}
        />
        {this.state.isLogin ? (
          <Router>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/Home"></Redirect>}
            ></Route>
            <RenderRouterList
              routers={RouterList}
              setAnimationState={this.setAnimationState.bind(this)}
              setAnimationStateFalse={this.setAnimationStateFalse.bind(this)}
            ></RenderRouterList>
          </Router>
        ) : (
          <Login setLoginState={this.setLoginState.bind(this)}></Login>
        )}
      </div>
    );
  }
}
