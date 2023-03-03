import React, {useState} from 'react';
import logo4 from "../../../public/assets/recipe_image/icons/avatar_login.svg";


export default function Recipes({list}){

    const recipes = list;


    const img = "https://raw.githubusercontent.com/Golan3212/agileCooperated/recipe_php_models/public/assets/images/6167ef33eec82.jpg";



    return (
        <div className="recipeListMain">
            <div className="section section_grey nomobile">
                <div className="container">
                    <div className="main_menu">
                        <div className="main_menu_items" style={{justifyContent: 'flex-start'}}>

                            <div className="main_menu_item" style={{marginRight: 40 + 'px'}}>
                                <a href="#">Главная</a>
                            </div>
                            <div className="main_menu_item" style={{marginRight: 40 + 'px'}}>
                                <a href="#">Конструктор меню</a>
                            </div>
                            <div className="main_menu_item">
                                <a href="#">Рецепты</a>
                            </div>
                        </div>
                        <div className="main_menu_user">
                            <div className="main_menu_ico main_menu_ico_login">
                                <img src={logo4}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container recipes_main" >
                <div className="recipeList">
                    {recipes.map((item, index) => (
                        <div className="product-wrap">
                            <div className="product-item" key={item.title}>
                                <div className="product-buttons">
                                    <a href="" className="button">Перейти</a>
                                </div>
                                <img src={img} alt="atata" />
                            </div>
                            <div className="product-title">
                                <a href="">{item.title}</a>
                                <span className="product-price">{item.nutrition}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <nav className="navigation">
                    <ul> <strong style={{fontSize: "20px", color: "#8c7d5e"}}> menu-list </strong>
                        <li className="navigation-link"><a href="">Menuitem</a></li>
                        <li className="navigation-link"><a href="">Menuitem</a></li>
                        <li className="navigation-link"><a href="">Menuitem</a></li>
                        <li className="navigation-link"><a href="">Menuitem</a></li>
                    </ul>
                    <ul> <strong style={{fontSize: "20px", color: "#8c7d5e"}}> menu-list </strong>
                        <li className="navigation-link"><a href="">Menuitem</a></li>
                        <li className="navigation-link"><a href="">Menuitem</a></li>
                        <li className="navigation-link"><a href="">Menuitem</a></li>
                        <li className="navigation-link"><a href="">Menuitem</a></li>
                    </ul>
                    <ul> <strong style={{fontSize: "20px", color: "#8c7d5e"}}> menu-list </strong>
                        <li className="navigation-link"><a href="">Menuitem</a></li>
                        <li className="navigation-link"><a href="">Menuitem</a></li>
                        <li className="navigation-link"><a href="">Menuitem</a></li>
                        <li className="navigation-link"><a href="">Menuitem</a></li>
                    </ul>
                </nav>
            </div>

            <div className="section section_footer">
                <div className="container">
                    <div className="footer">
                        <div className="footer_menu">

                            <div className="footer_menu_item"><a href="/">Главная</a></div>
                            <div className="footer_menu_item"><a href="/constr.php">Конструктор меню</a></div>
                            <div className="footer_menu_item"><a href="/reclist.php">Рецепты</a></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
)
}
