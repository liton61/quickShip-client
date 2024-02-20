
import React from 'react';
import Navbar from '../../components/shared/Navbar/Navbar';
import Footer from '../../components/shared/Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;