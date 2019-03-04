import React from 'react';
import PropTypes from 'prop-types';

const UserList = ({users}) => (
  <table className="table">
    <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
    </thead>
    <tbody>
    {users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
        </tr>
      )
    })}
    </tbody>
  </table>
);

UserList.propTypes = {
  users: PropTypes.array
};

export default UserList;
