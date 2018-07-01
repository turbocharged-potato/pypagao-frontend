import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {UncontrolledAlert} from 'reactstrap';
import {Redirect} from 'react-router-dom';
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
  }

  render() {
    const hidden = {display: 'none'};
    const { error, loggedIn } = this.props;
    return (
      <div>
        {loggedIn ? <Redirect to="/" /> : null}
        <UncontrolledAlert color="danger" style={error ? null : hidden}>{error}</UncontrolledAlert>
        <LoginForm
          onLogin={this.handleLogin}
          onEmailChange={this.handleEmailChange}
          onPasswordChange={this.handlePasswordChange}
        />
      </div>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.string,
  loggedIn: PropTypes.bool.isRequired
}

LoginPage.defaultProps = {
  error: null
}

const mapStateToProps = (state) => {
  const { accessToken, error } = state.tokens;
  return { error, loggedIn: !!accessToken }
}

export default connect(mapStateToProps)(LoginPage);
