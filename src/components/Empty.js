import React from 'react';

const Empty = ({ user }) => {
    const { name, profile_pic, status } = user;
    const firstName = name.split(' ')[0];

    return(
        <div className="empty">
            <h1 className="empty-name">Welcome, {firstName} </h1>
            <img src={profile_pic} alt={name} className="empty-img" />
            <p className="empty-status">
                <b>Status:</b> {status}
            </p>
            <button className="empty-btn">Start a conversation</button>
            <p className="empty-info">
                Search for someone to start chatting with or go to Contacts
                to see who
                is available
            </p>
        </div>
    )
}

export default Empty;