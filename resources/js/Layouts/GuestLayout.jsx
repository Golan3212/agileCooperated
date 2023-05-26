import ApplicationLogo from '../Components/mark/ApplicationLogo';
import { Link } from '@inertiajs/react';
import FooterList from "../components/FooterList";
import MenuList from "../components/MenuGuestList";

export default function GuestLayout({ children }) {
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
