import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, UncontrolledAlert} from 'reactstrap';
import {Redirect, withRouter} from 'react-router-dom';
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
    const {error, loggedIn} = this.props;
    const RegisterButton = withRouter(({history}) => (
      <Button onClick={() => history.push('/register')}>Register</Button>
    ));
    return (
      <div>
        {loggedIn ? <Redirect to="/" /> : null}
        <h2>Login</h2>
        <UncontrolledAlert color="danger" className={error ? null : 'd-none'}>
          {error}
        </UncontrolledAlert>
        <LoginForm
          onLogin={this.handleLogin}
          onEmailChange={this.handleEmailChange}
          onPasswordChange={this.handlePasswordChange}
        />
        <hr />
        <h2>No account?</h2>
        <RegisterButton />
      </div>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.string,
  loggedIn: PropTypes.bool.isRequired,
};

LoginPage.defaultProps = {
  error: null,
};

const mapStateToProps = state => {
  const {accessToken, error} = state.tokens;
  return {error, loggedIn: !!accessToken};
};

export default connect(mapStateToProps)(LoginPage);
