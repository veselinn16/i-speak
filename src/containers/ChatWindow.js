import React from 'react';
import store from '../store';
import Header from '../components/Header';

const ChatWindow = ({activeUserId}) => { // gets object.activeUserId
    const state = store.getState();
    const activeUser = state.contacts[activeUserId]; // gets user from state.contacts via activeUserId

    return (
        <div className='chat-window'>
            <Header user={activeUser} />
        </div>
    );
};

export default ChatWindow;