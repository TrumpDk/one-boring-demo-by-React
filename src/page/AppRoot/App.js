import React from 'react';
import { ActivityIndicator } from 'antd-mobile';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../LogIn/LogIn';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: false,
      isLogin: false
    };
  }

  setIsLogIn() {
    this.setState({
      animating: false
    });
  }

  render() {
    return (
      <div className="App">
        <ActivityIndicator
          toast
          text="Loading..."
          animating={this.state.animating}
        />
        {this.state.isLogin ? (
          <Router>
            <Route path="/" component={Login}></Route>
          </Router>
        ) : (
          <Login></Login>
        )}
      </div>
    );
  }
}
