import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Preloader from './Preloader';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col relative w-full font-sans text-[#0a1930] selection:bg-[#16a34a] selection:text-white bg-white">
            <Preloader />
            <Navbar />
            <main className="flex-grow w-full m-0 p-0">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
