import React from 'react';
import './Login.scss';
import { Button, Toast } from 'antd-mobile';
import { connect } from 'react-redux';
import * as LogInAction from '../../redux/action/LogInAction';
import { bindActionCreators } from 'redux';

class Login extends React.Component {
  submitLogin() {
    const mobile = this.refs.phoneNumber.value;
    const password = this.refs.passwords.value;
    this.props.action.LogInStart(mobile, password, Toast);
  }

  render() {
    return (
      <div className="loginBox">
        <div className="logo">
          <img
            src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"
            alt=""
          />
        </div>
        <div className="loginMain">
          <div className="inputWrap onePx_bottom">
            <input
              type="text"
              ref="phoneNumber"
              defaultValue={15323807318}
              placeholder="请输入手机号码"
            />
          </div>
          <div className="inputWrap onePx_bottom">
            <input
              type="password"
              ref="passwords"
              defaultValue={123456}
              placeholder="请输入登录密码"
            />
          </div>
          <div className="loginBtn">
            <Button type="primary" onClick={this.submitLogin.bind(this)}>
              登录
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(LogInAction, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
