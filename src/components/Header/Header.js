import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/placeorder">Placeorder</Link>
            <Link to="/login">Login</Link>
            {user?.email && <button onClick={logOut}>Log Out {user.displayName}</button>}
        </div>
    );
};

export default Header;