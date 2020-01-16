import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u977D', 
      name: 'Mongo Martines', 
      image: '',
      places: 3
    }];

  return <UsersList items={USERS}/>;
};

export default Users;