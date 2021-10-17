import React from 'react';
import { Link } from 'react-router-dom';
import useFireBase from '../../hooks/useFirebase';

const Login = () => {
    const {signInUsingGoogle} = useFireBase();
    return (
        <div>
            <h2>Please login</h2>
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <br />
            <Link to='/register'>New user?</Link>
        </div>
    );
};

export default Login;