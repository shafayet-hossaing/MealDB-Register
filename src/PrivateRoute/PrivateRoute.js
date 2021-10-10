import React from 'react';
import { Redirect, Route } from 'react-router';
import useData from '../Hooks/useData';

const PrivateRoute = ({children, ...rest}) => {
    const {user} = useData()
    return (
        <Route
            {...rest}
            render= {({location}) => user.email ? children : <Redirect
                to={{
                    pathname: '/login',
                    state: {from: location}
                }}
            >
            </Redirect>     
            }
        >   
        </Route>
    );
};

export default PrivateRoute;