import React from "react";
import Header from "./Header/Header.jsx";
import Aside from "./Aside/Aside.jsx";

const Layout = ({ children }) => {
    return (
        <main>
            <Header />
            <Aside />
            {children}
        </main>
    );
};

export default Layout;
