// arquivo Users.js
import React from 'react';

type UsersProps = {
  greetingMessage: string;
};

const Users = ({ greetingMessage }: UsersProps) => (
  <div>
    <h2> Users </h2>
    <p> {greetingMessage}, this is my awesome Users component </p>
  </div>
);

export default Users;
