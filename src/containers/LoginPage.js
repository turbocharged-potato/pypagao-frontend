import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';
import {fetchToken} from '../actions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleLogin(event) {
    event.preventDefault();
    const {email, password} = this.state;
    const {dispatch} = this.props;
    dispatch(fetchToken({email, password}));
    // alert(`Hahaha! Your email is ${email} and password is ${password}`);
  }

  render() {
    return (
      <LoginForm
        onLogin={this.handleLogin}
        onEmailChange={this.handleEmailChange}
        onPasswordChange={this.handlePasswordChange}
      />
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(LoginPage);
