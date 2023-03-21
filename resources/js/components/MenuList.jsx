import React from 'react';
import {
    Link
} from "react-router-dom";
import '../../css/recipe.css';

import logo from "../../../public/assets/recipe_image/icons/icons-avocado.png";
import wt from "../../../public/assets/recipe_image/icons/icons-whatsapp.png";


const MenuList = (props) => {
    return (
        <div>

            <div className="section section_grey section_submenu1 hidden nomobile">
                <div className="container">

                </div>
            </div>


            <div className="section section_grey nomobile">
                <div className="container">

                    <div className="main_menu">

                        <img className="img_logo" src={logo}></img>

                        <ul className="main_menu_items" style={{ justifyContent: 'flex-start' }}>


                            <li className="main_menu_item" style={{ marginRight: 40 + 'px' }} >
                                <Link to="/">Главная</Link>
                            </li>
                            <li className="main_menu_item" style={{ marginRight: 40 + 'px' }}>
                                <Link to="/menu">Конструктор меню</Link>
                            </li>
                            <li className="main_menu_item">
                                <Link to="/recipes">Рецепты</Link>
                            </li>
                        </ul>
                        <div className="main_menu_user">
                            <div className="main_menu_ico main_menu_ico_login ">
                                <a href="" className="avatar">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M37.549 19.7745C37.549 24.0307 36.0497 27.9484 33.5346 31.0196C30.2699 35.0098 25.3124 37.549 19.7745 37.549C14.6719 37.549 10.0771 35.3967 6.8366 31.9627C3.83791 28.7706 2 24.4902 2 19.7745C2 9.95621 9.95621 2 19.7745 2C29.5928 2 37.549 9.95621 37.549 19.7745Z" stroke="#41272B" strokeWidth="2" strokeMiterlimit="10" />
                                        <path d="M20.0131 22.4346C23.8863 22.4346 27.0261 19.2948 27.0261 15.4216C27.0261 11.5484 23.8863 8.40849 20.0131 8.40849C16.1399 8.40849 13 11.5484 13 15.4216C13 19.2948 16.1399 22.4346 20.0131 22.4346Z" stroke="#41272B" strokeWidth="2" strokeMiterlimit="10" />
                                        <path d="M33.5346 31.0196C30.2699 35.0098 25.3124 37.549 19.7745 37.549C14.6718 37.549 10.0771 35.3967 6.83655 31.9627C8.81955 26.4007 14.1398 22.4346 20.379 22.4346C26.2555 22.4346 31.3097 25.9654 33.5346 31.0196Z" stroke="#41272B" strokeWidth="2" strokeMiterlimit="10" />
                                    </svg>
                                </a>


                            </div>
                            <a href="#" target="_blank"><img  src={wt} style={{ width: 55 + '%', marginLeft: 20 + '%' }}></img></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
};

export default MenuList;
