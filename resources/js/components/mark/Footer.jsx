import { Link } from '@inertiajs/react';
import '../../../css/recipe.css';

// import vk from "../../../public/assets/recipe_image/icons/icons-vk.png";
// import yt from "../../../public/assets/recipe_image/icons/icons-youtube.png";
// import tg from "../../../public/assets/recipe_image/icons/icons-telegram.png";


export default function Footer() {
    return (


        <div className="section section_footer">
        <div className="container">
            <div className="footer">
                <ul className="footer_menu">
                    <li className="footer_menu_item">
                        <Link className="footer_menu_color" href={route('posts.index')} active={route().current('posts.index')}>Главная</Link>
                    </li>

                    <li className="footer_menu_item">
                        <Link className="footer_menu_color" href={route('posts.index')} active={route().current('posts.index')}>Главная</Link>
                    </li>
                    <li className="footer_menu_item">
                        <Link className="footer_menu_color" href={route('posts.index')} active={route().current('posts.index')}>Главная</Link>
                    </li>

                </ul>
            </div>
        </div>
    </div>

    );
}
