import React from 'react';
import { Redirect } from 'react-router-dom';

interface StrictAcessProps {
  username: string;
  password: string;
}

class StrictAcess extends React.Component<StrictAcessProps> {
  render() {
    const { username, password } = this.props;
    return (
      <React.Fragment>
        {username === 'João' && password === '1234' ? (
          <div className="class">Welcome João</div>
        ) : (
          <Redirect to="/" />
        )}
      </React.Fragment>
    );
  }
}

export default StrictAcess;
