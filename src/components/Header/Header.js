import React from 'react';
import { Link } from 'react-router-dom';
import useFireBase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user, logOut} = useFireBase();
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            {/* <Link to="/logout">Logout</Link> */}
            {user?.email && <button onClick={logOut}>Log Out {user.displayName}</button>}
        </div>
    );
};

export default Header;