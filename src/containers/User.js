import React from 'react';
import { setActiveUserId } from '../actions';
import store from '../store';

const User = contact => {
    const { profile_pic, name, status } = contact.user; // figure out way to remove .user

    return (
        <div className="user" onClick={handleUserClick.bind(null, contact.user)}>
            <img src={profile_pic} alt={name} className="user-pic"/>
            <div className="user-details">
                <p className="user-details-name">{name}</p>
                <p className="user-details-status">{status}</p>
            </div>
        </div>
    )
}

function handleUserClick({ user_id }) { // === user.user_id
    store.dispatch(setActiveUserId(user_id));
}

export default User;