import React, {useState} from 'react';
import { Link } from '@inertiajs/react';
import "../../css/header.css";
import "../../css/footer.css";
import ThemeSwitch from 'react-theme-switch';
import logo from "../../../public/assets/2023-03-16_17-05.png";
import instagram from "../../../public/assets/links/instagram-f-svgrepo-com.svg";
import telegram from "../../../public/assets/links/telegram-fill-svgrepo-com.svg";
import youtube from "../../../public/assets/links/youtube-round-svgrepo-com.svg";
import vk from "../../../public/assets/links/vk-with-circle-svgrepo-com.svg";
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';

import menu from "../../../public/assets/menu-svgrepo-com.svg";
import account from "../../../public/assets/account-avatar-man-svgrepo-com.svg";

export default function Layout({ children }) {
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

const MenuList = (props) => {
    const hangleClick = e =>{
        e.preventDefault();
        Inertia.post('/logout');
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
                                                    <a href="/about">О нас</a>
                                                </li>
                                                <li>
                                                    <a href="/account">Мой профиль</a>
                                                </li>
                                                <li>
                                                    <a href="/advice">Мои рекомендации</a>
                                                </li>
                                                <li>
                                                    <a href="/menu/builder/1">Меню на неделю</a>
                                                </li>
                                            </ul>
                                            <button onClick={hangleClick} className="menu__button">Выйти</button>
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
                                <InertiaLink href="/home">Главная</InertiaLink>
                            </li>
                            <li className="main_menu_item1" style={{ marginRight: 40 + 'px' }}>
                                <InertiaLink href="/menu/builder/1">Конструктор меню</InertiaLink>
                            </li>
                            <li className="main_menu_item1" style={{ marginRight: 40 + 'px' }}>
                                <InertiaLink href="/form">Калькулятор БЖУ</InertiaLink>
                            </li>
                            <li className="main_menu_item1">
                                <InertiaLink href="/recipes">Рецепты</InertiaLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

const FooterList = () => {
    return (
        <div>
            <div className="section2">
                <div className="container">
                    <div className="footer2">
                        <div className="footer__top">
                            <div className="footer__box text">
                                <h3>AVOCADO</h3>
                                <p>Советы, которые работают.
                                    Рецепты, которые вы хотите приготовить.
                                    Рекомендации, которым вы доверяете.</p>
                            </div>
                            <div className="footer__box">
                                <ul className="footer_menu2">
                                    <li className="footer_menu_item2"><Link href="/">Главная</Link></li>
                                    <li className="footer_menu_item2"><Link href="/menu/builder">Конструктор меню</Link></li>
                                    <li className="footer_menu_item2"><Link href="/recipes">Рецепты</Link></li>
                                </ul>
                            </div>
                            <div className="footer__box">
                                <h4>Контакты</h4>
                                <p>&#9993; avocado@mail.ru</p>
                            </div>
                        </div>
                        <div className="footer__bottom">
                            <p>2023 © Конструктор питания Avocado</p>
                            <div className="anchor">
                                <a href="#up">&#94;</a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
};


