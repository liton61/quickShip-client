import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';
import React from 'react';

const Layout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;