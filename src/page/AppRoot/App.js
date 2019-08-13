import React from 'react';
import { ActivityIndicator } from 'antd-mobile';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Login from '../LogIn/LogIn';
import RouterList from '../../router/RouterList';
import './App.scss';
import TabList from '../../component/tabList/tabList';
import { connect } from 'react-redux';
import * as commonActions from '../../redux/action/commonAction';

const tabList = [
  { icon: 'iconfont icon-caidaniconshouyehui', name: '首页', url: '/Home' },
  { icon: 'iconfont icon-clone', name: '专题', url: '/Topic' },
  { icon: 'iconfont icon-sort', name: '分类', url: '/CateLog' },
  { icon: 'iconfont icon-cart', name: '购物车', url: '/Cart' },
  { icon: 'iconfont icon-mine', name: '我的', url: '/Mine' }
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

class App extends React.Component {
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
    const { isLogIn, animating } = this.props;
    console.log('aaaa', this.props);
    return (
      <div className="AppRoot">
        <ActivityIndicator toast text="Loading..." animating={animating} />
        {isLogIn ? (
          <>
            <Router>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/Home"></Redirect>}
              ></Route>
              <Switch>
                <RenderRouterList
                  routers={RouterList}
                  setAnimationState={this.setAnimationState.bind(this)}
                  setAnimationStateFalse={this.setAnimationStateFalse.bind(
                    this
                  )}
                ></RenderRouterList>
              </Switch>
              <TabList tabList={tabList}></TabList>
            </Router>
          </>
        ) : (
          <Login setLoginState={this.setLoginState.bind(this)}></Login>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  animating: state.commonReducer.isLoading,
  isLogIn: state.commonReducer.isLogIn
});

const mapDispatchToProps = dispatch => ({
  action: () => dispatch(commonActions.showLoading())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
