import React from 'react';
import "../../css/header.css";
import "../../css/footer.css";
// import '../../css/recipe.css';

import vk from "../../../public/assets/recipe_image/icons/icons-vk.png";
import yt from "../../../public/assets/recipe_image/icons/icons-youtube.png";
import tg from "../../../public/assets/recipe_image/icons/icons-telegram.png";
import { InertiaLink } from '@inertiajs/inertia-react';



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
                                    <li className="footer_menu_item2"><InertiaLink href="/">Главная</InertiaLink></li>
                                    <li className="footer_menu_item2"><InertiaLink href="/menu/builder">Конструктор меню</InertiaLink></li>
                                    <li className="footer_menu_item2"><InertiaLink href="/recipes">Рецепты</InertiaLink></li>
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

export default FooterList;
