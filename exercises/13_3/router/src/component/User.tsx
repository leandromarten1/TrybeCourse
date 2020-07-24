import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  id: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {
}

class User extends React.Component<MatchProps> {
  render() {
    
    const { match } = this.props;
    return (
      <React.Fragment>
        <div>Hellor User {match.params.id}</div>
      </React.Fragment>
    );
  }
}

export default User;
