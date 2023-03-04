import React from 'react';
import { Outlet } from 'react-router-dom';


import MenuList from "../components/MenuList";
import FooterList from "../components/FooterList";






const Layout = () => {
    return (
        <>
            <MenuList></MenuList>
            <main className='main container'>
                <Outlet></Outlet>
            </main>

            <FooterList></FooterList>
        </>
    );
};

export default Layout;