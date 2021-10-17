import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    // debugger
    const {user} = useAuth(); 
    console.log('user=>',user.displayName)
    console.log('user=>',user.email)
    return (
        <Route 
            {...rest}
            render = {({location}) => user?.email ? children : 
            <Redirect to={{
                pathname:'/login',
                state:{from: location}
            }}></Redirect>}
        >
            
        </Route>
        // <h2>This is h2</h2>
    );
};

export default PrivateRoute;   