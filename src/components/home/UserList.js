import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';

const UserList = ({users}) => (
  <div className=" row user-list">
    {users.map(user => {
      return (
        <UserCard key={user.id} user={user}/>
      )})
    }
  </div>
);

UserList.propTypes = {
  users: PropTypes.array
};

export default UserList;
