import React, { Component } from 'react';

const Message = ({ message }) => {
    const { text, is_user_msg } = message;

    return (
        <span className={`${is_user_msg ? 'user-msg' : 'contact-msg'}`}>{text}</span>
    );
};

class Messages extends Component {
    scrollToBottom = () => {
        // scrolls down to see the latest texts 
        this.refs.messages.scrollTop = this.refs.messages.scrollHeight;
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        return(
            <div className='messages' ref="messages">
                {this.props.messages.map(message => (
                    <Message message={message} key={message.number}/>
                    )
                )}
            </div>
        );
    };
};

export default Messages;