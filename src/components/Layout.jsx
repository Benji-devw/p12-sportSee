import React from 'react';
import Header from './Header';
import Aside from './Aside.jsx';
import text from '/public/fr.json';

const Layout = ({ children }) => {
  // console.log(text.header_text);
  return (
    <div>
      <Header text={text.header_text} />
      <Aside text={text.aside_text} />
      {children}
    </div>
  );
};

export default Layout;