import React from "react";

function Header({ user }) {
    const { name, status } = user;
    return (
        <header className="header">
            <h1 className="header-name">{name}</h1>
            <p className="header-status">{status}</p>
        </header>
    );
};

export default Header;