import React, {useState} from 'react';
import { Link } from '@inertiajs/react';
import "../../css/header.css";
import "../../css/footer.css";
import ThemeSwitch from 'react-theme-switch';
import logo from "../../../public/assets/logo.svg";
import instagram from "../../../public/assets/links/instagram-f-svgrepo-com.svg";
import telegram from "../../../public/assets/links/telegram-fill-svgrepo-com.svg";
import youtube from "../../../public/assets/links/youtube-round-svgrepo-com.svg";
import vk from "../../../public/assets/links/vk-with-circle-svgrepo-com.svg";
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';


import menu from "../../../public/assets/menu-svgrepo-com.svg";
import account from "../../../public/assets/account-avatar-man-svgrepo-com.svg";


const MenuList = (props) => {

    const logoutClick = e => {
        e.preventDefault();
        Inertia.post('/logout');
    }

    const profileClick = e => {
        e.preventDefault();
        Inertia.get('/profile');
    }


    const [isOpen, setIsOpen] = useState(false);

    const clickOpen = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }


    return (
        <div>
            <div className="section1 section_grey1">
                <div className="menu__black">
                    <div className="container1 menu__inner">
                        <div className="menu__left">
                            <button onClick={clickOpen} className="menu__button">
                                <img src={menu} className="menu__img" />
                            </button>

                            {isOpen &&
                                <div className="visible">
                                    <div className="nav__box">
                                        <div className="nav__links">
                                            <ul>
                                                <li>
                                                    <a href="/">Главная сайта</a>
                                                </li>
                                                <li>
                                                    <a href="/admin/index">Главная админки</a>
                                                </li>
                                                <li>
                                                    <a href="/admin/recipes">Рецепты</a>
                                                </li>
                                                <li>
                                                    <a href="/admin/recipes/create">Новый рецепт</a>
                                                </li>
                                                <li>
                                                    <a href="/admin/users">Пользователи</a>
                                                </li>
                                            </ul>
                                            <button onClick={logoutClick} className="menu__button">Выйти</button>
                                        </div>
                                        <button className="nav__btn" onClick={clickOpen}>X</button>
                                    </div>
                                </div>
                            }
                        </div>

                        <div className="menu__right" >

                            <ThemeSwitch />

                            <a href="/account">
                                <img src={account} className="menu__img"/>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="container1 wrap">
                    <div className="inner">
                        <div id="up">
                            <img className="logo" src={logo}></img>
                            <p className="logo__text">AVOCADO</p>
                        </div>
                        <div className="social__wrap">
                            <a href="#"><img src={telegram} className="social"></img></a>
                            <a href="#"><img src={instagram} className="social"></img></a>
                            <a href="#"><img src={youtube} className="social"></img></a>
                            <a href="#"><img src={vk} className="social"></img></a>

                        </div>
                    </div>
                    <div className="main_menu1">
                        <ul className="main_menu_items1" style={{ justifyContent: 'flex-start' }}>
                            <li className="main_menu_item1" style={{ marginRight: 40 + 'px' }} >
                                <InertiaLink href="/home">Главная сайта</InertiaLink>
                            </li>
                            <li className="main_menu_item1" style={{ marginRight: 40 + 'px' }}>
                                <InertiaLink href="/admin/index">Главная админки</InertiaLink>
                            </li>
                            <li className="main_menu_item1" style={{ marginRight: 40 + 'px' }}>
                                <InertiaLink href="/admin/users">Пользователи</InertiaLink>
                            </li>
                            <li className="main_menu_item1">
                                <InertiaLink href="/admin/recipes">Рецепты</InertiaLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MenuList;

