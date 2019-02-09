import React from 'react';
import _ from 'lodash';

import store from '../store';

import Header from '../components/Header';
import Messages from '../components/Messages';
import MessageInput from './MessageInput';


const ChatWindow = ({activeUserId}) => { // gets object.activeUserId
    const state = store.getState();
    const activeUser = state.contacts[activeUserId]; // gets user from state.contacts via activeUserId
    const userMessages = state.messages[activeUserId]; // gets messages of the selected user
    const inputValue = state.typing;

    return (
        <div className='chat-window'>
            <Header user={activeUser} />
            <Messages messages={_.values(userMessages)} />
            <MessageInput value={inputValue} />
        </div>
    );
};

export default ChatWindow;