import React from 'react';
import store from '../store';
import { setTypingValue, sendMessage } from '../actions';


const MessageInput = ({ value }) => {
    const state = store.getState(); // state object
    
    const handleSubmit = e => {
        // handles the submission and 
        e.preventDefault();

        const { typing, activeUserId } = state;

        store.dispatch(sendMessage(typing, activeUserId)); // sends action with value and user id
    } 

    const handleChange = e => {
        // sets the state typing value
        store.dispatch(setTypingValue(e.target.value));
    }

    return(
        <form className="message" onSubmit={handleSubmit}>
            <input className="message-input" onChange={handleChange} value={value} placeholder="Write a message..."></input>
        </form>
    );
};

export default MessageInput;