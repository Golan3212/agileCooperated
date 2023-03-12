import React, {useState} from 'react';
import '../../css/App.scss';
import img1 from "../../../public/assets/recipe_image/images/62c30bce0f146.jpg"


export default function Recipes({recipes}){


    const img = img1;

    return (
        <div className="recipeListMain">
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
                                <span className="product-price">{item.category_title}</span>
                                <span className="product-price">Ккалории: {item.calorie}</span>
                                <span className="product-price">{item.cooking_time} мин.</span>
                            </div>
                        </div>
                    ))}
                </div>

                <nav className="navigation">
                    <ul className="navigation-list"> <strong style={{fontSize: "20px", color: "#8c7d5e"}}> Рецепты по категориям </strong>
                        <li className="navigation-link"><a href="/category">Завтрак</a></li>
                        <li className="navigation-link"><a href="/category">Обед</a></li>
                        <li className="navigation-link"><a href="/category">Перекус</a></li>
                        <li className="navigation-link"><a href="/category">Ужин</a></li>
                    </ul>
                    <ul className="navigation-list"> <strong style={{fontSize: "20px", color: "#8c7d5e"}}> Рецепты блюд по калорийности </strong>
                        <li className="navigation-link"><a href="">До 100ккал</a></li>
                        <li className="navigation-link"><a href="">До 400ккал</a></li>
                        <li className="navigation-link"><a href="">До 700ккал</a></li>
                        <li className="navigation-link"><a href="">До 1000ккал</a></li>
                    </ul>
                    <ul className="navigation-list"> <strong style={{fontSize: "20px", color: "#8c7d5e"}}> Рецепты по времени приготовления </strong>
                        <li className="navigation-link"><a href="">До 5 минут</a></li>
                        <li className="navigation-link"><a href="">До 15 минут</a></li>
                        <li className="navigation-link"><a href="">До 30 минут</a></li>
                        <li className="navigation-link"><a href="">До 60 минут</a></li>
                    </ul>
                </nav>
            </div>
        </div>
)
}
