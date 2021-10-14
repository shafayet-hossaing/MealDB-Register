import React from 'react';
import { Redirect, Route } from 'react-router';
import useData from '../Hooks/useData';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useData()
    if(isLoading){
        return <h2>Loading...</h2>
    }
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