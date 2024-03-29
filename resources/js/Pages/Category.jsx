import React, {useState} from 'react';
import '../../css/app.scss';
import img1 from "../../../public/assets/recipe_image/images/2.jpg"


export default function Category(){

    const recipes = [
        {title: 'title', nutrition:'nutrition'},
        {title: 'title', nutrition:'nutrition'},
        {title: 'title', nutrition:'nutrition'},
        {title: 'title', nutrition:'nutrition'},
        {title: 'title', nutrition:'nutrition'},
        {title: 'title', nutrition:'nutrition'},
        {title: 'title', nutrition:'nutrition'},
        {title: 'title', nutrition:'nutrition'},
    ];


    const img = img1;



    return (
        <div className="recipeListMain">
            <h2>Категория</h2>
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
                    <ul> <strong style={{fontSize: "20px", color: "#8c7d5e"}}> Список по категориям </strong>
                        <li className="navigation-link"><a href="/category">Завтрак</a></li>
                        <li className="navigation-link"><a href="/category">Обед</a></li>
                        <li className="navigation-link"><a href="/category">Перекус</a></li>
                        <li className="navigation-link"><a href="/category">Ужин</a></li>
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
        </div>
    )
}
