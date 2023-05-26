import React, {useState} from 'react';

import MenuList from "../components/MenuAdminList"
import FooterList from "../components/FooterList";

export default function AdminLayout({ children }) {
    return (
        <main className="main">
            <MenuList></MenuList>
            <main className='container'>
                <article>{children}</article>
            </main>
            <FooterList></FooterList>
        </main>
    )
}
