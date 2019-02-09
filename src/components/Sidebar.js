import React from 'react';
import User from '../containers/User';

const Sidebar = ({ contacts }) => {
    return <aside className="sidebar">
                {contacts.map(contact => {
                // contact is a user object
                return <User user={contact} key={contact.user_id}/>})}
            </aside>
}

export default Sidebar;