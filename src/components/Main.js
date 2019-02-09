import React from 'react';
import Empty from '../components/Empty';
import ChatWindow from '../containers/ChatWindow';

const Main = ({ user, activeUserId }) => {
    const renderMainContent = () => {
        return !activeUserId ? <Empty user={user} activeUserId={activeUserId} /> : <ChatWindow activeUserId={activeUserId} />
    }
    return <main className="main">{renderMainContent()}</main>;
}

export default Main;