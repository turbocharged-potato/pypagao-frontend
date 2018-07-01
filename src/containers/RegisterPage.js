import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {UncontrolledAlert} from 'reactstrap';
import RegisterForm from '../components/RegisterForm';
import {postRegister, fetchUniversities} from '../actions';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameValid: false,
      email: '',
      emailValid: false,
      password: '',
      passwordConfirmationValid: false,
      universityId: null,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(
      this,
    );
    this.handleUniversityChange = this.handleUniversityChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchUniversities());
  }

  componentDidUpdate(prevProps, prevState) {
    (() => {
      const {universities} = this.props;
      if (universities && !prevState.universityId) {
        this.setState({universityId: universities[0].id});
      }
    })();
  }

  handleNameChange(event) {
    const name = event.target.value;
    this.setState({name, nameValid: name !== ''});
  }

  handleEmailChange(event) {
    const email = event.target.value;
    const emailValid = !!email.match(/\S+@\S+/);
    this.setState({email, emailValid});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handlePasswordConfirmationChange(event) {
    const {password} = this.state;
    const passwordConfirmation = event.target.value;
    const passwordConfirmationValid = password === passwordConfirmation;
    this.setState({passwordConfirmationValid});
  }

  handleUniversityChange(event) {
    this.setState({universityId: event.target.value});
  }

  handleRegister(event) {
    event.preventDefault();
    const {name, universityId, email, password} = this.state;
    const {dispatch} = this.props;
    dispatch(postRegister({name, universityId, email, password}));
  }

  render() {
    const {nameValid, emailValid, passwordConfirmationValid} = this.state;
    const formValid = nameValid && emailValid && passwordConfirmationValid;
    const {error, success, universities} = this.props;
    return (
      <div>
        <h2>Register</h2>
        <UncontrolledAlert color="danger" className={error ? null : 'd-none'}>
          {error}
        </UncontrolledAlert>
        <UncontrolledAlert color="success" className={success ? null : 'd-none'}>
          Registration successful. Please check your email for verification to activate your account.
        </UncontrolledAlert>
        <RegisterForm
          onNameChange={this.handleNameChange}
          nameValid={nameValid}
          onEmailChange={this.handleEmailChange}
          emailValid={emailValid}
          onPasswordChange={this.handlePasswordChange}
          onPasswordConfirmationChange={this.handlePasswordConfirmationChange}
          passwordConfirmationValid={passwordConfirmationValid}
          onUniversityChange={this.handleUniversityChange}
          universities={universities}
          onRegister={this.handleRegister}
          formValid={formValid}
        />
      </div>
    );
  }
}

RegisterPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  universities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
  error: PropTypes.string,
  success: PropTypes.bool
};

RegisterPage.defaultProps = {
  universities: null,
  error: null,
  success: null
};

const mapStateToProps = state => {
  const {universities, register} = state;
  return {universities, ...register};
};

export default connect(mapStateToProps)(RegisterPage);
