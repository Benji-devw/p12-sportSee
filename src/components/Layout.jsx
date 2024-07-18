import React from 'react';
import Header from './Header/Header.jsx';
import Aside from './Aside/Aside.jsx';

const Layout = ({children}) => {
    return (
    <div>
        <Header />
        <Aside />
        {children}
    </div>
    );
};

export default Layout;