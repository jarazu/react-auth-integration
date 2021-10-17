import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please register</h2>
            <form>
                <input type="email" name="" id="" /> <br />
                <input type="password" name="" id="" /> <br />
                <input type="submit" value="Register" />
            </form>
            <Link to="login">Already Registered</Link>
        </div>
    );
};

export default Register;