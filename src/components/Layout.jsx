import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Preloader from './Preloader';

const Layout = ({ children }) => {
    return (
        <>
            <Preloader />
            <div className="min-h-screen flex flex-col relative">
                <Navbar />
                <main className="flex-grow pt-20">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
