import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u977D', 
      name: 'Mongo Martines', 
      image: '',
      places: 3
    }, 
    {
      id: 'u979G', 
      name: 'La Sra Boss', 
      image: '',
      places: 0
    },
    {
      id: 'u975X', 
      name: 'Monty Martinecs', 
      image: '',
      places: 0
    }];

  return <UsersList items={USERS}/>;
};

export default Users;