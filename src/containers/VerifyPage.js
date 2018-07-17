import React from 'react';
import fetch from 'cross-fetch';
import { UncontrolledAlert } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import querystring from 'querystring';

import { BACKEND } from '../actions';
import LoginButton from '../components/LoginButton';

class VerifyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { verified: false, error: null };
  }

  async componentDidMount() {
    const {
      location: { search }
    } = this.props;
    // Remove the leading question mark
    const queryString = search.slice(1);
    const { token } = querystring.parse(queryString);
    if (token) {
      const payload = querystring.stringify({ token });
      const response = await fetch(`${BACKEND}/authentication/verify?${payload}`);
      if (response.status === 200) {
        this.setState({ verified: true });
      } else {
        const { error } = response.json();
        this.setState({ error });
      }
    }
  }

  render() {
    const { verified, error } = this.state;
    return (
      <div>
        <h2>Account Verification</h2>
        <UncontrolledAlert color="danger" className={error ? null : 'd-none'}>
          {error}
        </UncontrolledAlert>
        <UncontrolledAlert color="success" className={verified ? null : 'd-none'}>
          Account successfully verified. <LoginButton />
        </UncontrolledAlert>
      </div>
    );
  }
}

export default withRouter(VerifyPage);
