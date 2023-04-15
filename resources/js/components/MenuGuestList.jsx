import React from 'react';
import {
    Link
} from "react-router-dom";
import '../../css/recipe.css';

import logo from "../../../public/assets/logo.svg";
import instagram from "../../../public/assets/links/instagram-f-svgrepo-com.svg";
import telegram from "../../../public/assets/links/telegram-fill-svgrepo-com.svg";
import youtube from "../../../public/assets/links/youtube-round-svgrepo-com.svg";
import vk from "../../../public/assets/links/vk-with-circle-svgrepo-com.svg";

import wt from "../../../public/assets/recipe_image/icons/icons-whatsapp.png";
import { InertiaLink } from '@inertiajs/inertia-react';
import menu from "../../../public/assets/menu-svgrepo-com.svg";
import ThemeSwitch from "react-theme-switch";
import account from "../../../public/assets/account-avatar-man-svgrepo-com.svg";


const MenuList = (props) => {
    return (
        <div>
            <div className="section1 section_grey1">


                <div className="menu__black">
                    <div className="container1 menu__inner">
                        <div className="menu__left">
                            <ThemeSwitch />
                        </div>

                        <div className="menu__right" >



                            <a href="/login" className="login">Войти</a>
                            <a href="/register" className="login">Зарегистрироваться</a>
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

                            {/*<a href="#" className="login">Войти</a>*/}

                        </div>
                    </div>
                    <div className="main_menu1">
                        <ul className="main_menu_items1" style={{ justifyContent: 'flex-start' }}>
                            <li className="main_menu_item1" style={{ marginRight: 40 + 'px' }} >
                                <InertiaLink href="/">Главная</InertiaLink>
                            </li>
                            <li className="main_menu_item1" style={{ marginRight: 40 + 'px' }}>
                                <InertiaLink href="/about">О нас</InertiaLink>
                            </li>
                            <li className="main_menu_item1" style={{ marginRight: 40 + 'px' }}>
                                <InertiaLink href="/recipes">Рецепты</InertiaLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MenuList;
