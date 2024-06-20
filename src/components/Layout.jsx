import React from 'react';
import Header from './Header';
import Aside from './Aside.jsx';
import labels from '/public/fr.json';

const Layout = ({ children }) => {
  // console.log(labels.header_labels);
    return (
    <div>
        <Header labels={labels.header_labels} />
        <Aside labels={labels.aside_labels} />
        {children}
    </div>
    );
};

export default Layout;