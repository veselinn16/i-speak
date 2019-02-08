import React from 'react';

const User = contact => {
    const { profile_pic, name, status } = contact.user;

    return (
        <div className="user">
            <img src={profile_pic} alt={name} className="user-pic"/>
            <div className="user-details">
                <p className="user-details-name">{name}</p>
                <p className="user-details-status">{status}</p>
            </div>
        </div>
    )
}

export default User;