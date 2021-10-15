import React from 'react';
import { useLocation } from 'react-router';
import Header from '../Header/Header';

const Navbar = () => {
    const {pathname} = useLocation()
    return pathname !== '/login' ? <Header></Header> : null
};

export default Navbar;