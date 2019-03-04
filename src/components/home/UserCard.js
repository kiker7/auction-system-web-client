import React from 'react';
import PropTypes from 'prop-types';


const UserCard = ({user}) => (
  <div className="card user-card" >
    <img className="card-img-top" style={{width: '100%'}} src="../../images/img_avatar.png"/>
    <div className="card-body">
      <h4 className="card-title">{user.firstName + " " + user.lastName}</h4>
      <p>Games in {user.username} library</p>
    </div>
  </div>
);

UserCard.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserCard;
