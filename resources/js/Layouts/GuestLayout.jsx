
import ApplicationLogo from '../Components/mark/ApplicationLogo';
import { Link } from '@inertiajs/react';
import FooterList from "../Components/FooterList";
import MenuGuestList from "../Components/MenuGuestList";

export default function GuestLayout({ children }) {
    return (
        <main className="main">
            <MenuGuestList></MenuGuestList>
            <main className='container'>
                <article>{children}</article>
            </main>
            <FooterList></FooterList>
        </main>
    )
}
