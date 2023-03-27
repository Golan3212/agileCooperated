import React from 'react';
import '../../css/recipe.css';

import { Link } from '@inertiajs/react'


import logo1 from "../../../public/assets/recipe_image/icons/time.svg";
import logo2 from "../../../public/assets/recipe_image/icons/calories.svg";
import logo3 from "../../../public/assets/recipe_image/icons/portions.svg";
import image from "../../../public/assets/recipe_image/images/1.jpg";


export default function Recipe({ recipeOne, recipeOneAdvice }) {

    function declOfNum(n) {
        n = Math.abs(n) % 100;
        const text_forms = ["МИНУТА", "МИНУТЫ", "МИНУТ"];
        var n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }
        return text_forms[2]

    }
    declOfNum();

    console.log(recipeOne);

    return (
        <div>
            <div className="section">
                <div className="container">
                    <div className="reclist_main">


                        <div className="reccard_wrap">
                            <div className="reccard_content">
                                {recipeOne.map(recipe => {
                                    return <div className="reccard_main_title">{recipe.title}
                                        <div className="reccard_content_title">{recipe.category_title}</div>
                                    </div>
                                })}
                                <div className="reccard_main_photo_wrap" style={{ width: 100 + '%' }}>
                                    <div className="rec_item_plus_txt">
                                        <div className="reccard_main_add">+ добавить рецепт в меню на неделю</div>
                                    </div>
                                    <img className="reccard_main_photo" src={image} style={{ width: 100 + '%' }}></img>
                                    {/*{recipeOne.map(recipe => {*/}
                                    {/*return<><img className="reccard_main_photo" src={recipe.image} style={{ width: 100 + '%' }}></img></>*/}
                                    {/*})}*/}
                                </div>
                                <div className="reccard_main_info">
                                    <div className="reccard_main_info1">

                                        <div className="reccard_main_time">
                                            {recipeOne.map(recipe => {
                                                return <><div className="rec_time">
                                                    <img src={logo1} ></img>
                                                    &nbsp;&nbsp;{recipe.cooking_time}&nbsp;{declOfNum(recipe.cooking_time)}
                                                </div>
                                                    <div className="rec_time">
                                                        <img src={logo2}></img>
                                                        &nbsp;&nbsp;{recipe.portion}&nbsp;ПОРЦИИ
                                                    </div>
                                                </>
                                            })}
                                        </div>
                                        {recipeOne.map(recipe => {
                                            return <div className="reccard_main_kbzhu">
                                                <div className="rec_time"><strong>Пищевая ценность порции</strong></div>
                                                <div className="reccard_kbzhu1">
                                                    <div className="rec_time">Калории, г</div>
                                                    <div className="reccard_kbzhu_dotted"></div>
                                                    <div className="rec_time">{recipe.calorie}</div>
                                                </div>
                                                <div className="reccard_kbzhu1">
                                                    <div className="rec_time">Белки, г.</div>
                                                    <div className="reccard_kbzhu_dotted"></div>
                                                    <div className="rec_time">{recipe.proteins}</div>
                                                </div>
                                                <div className="reccard_kbzhu1">
                                                    <div className="rec_time">Жиры, г.</div>
                                                    <div className="reccard_kbzhu_dotted"></div>
                                                    <div className="rec_time">{recipe.fats}</div>
                                                </div>
                                                <div className="reccard_kbzhu1">
                                                    <div className="rec_time">Углеводы, г.</div>
                                                    <div className="reccard_kbzhu_dotted"></div>
                                                    <div className="rec_time">{recipe.carbohydrates}</div>
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                    <div className="reccard_main_info3">
                                        <div className="ingredients_title">Ингредиенты</div>
                                        {
                                            recipeOne.map(recipe => {
                                                return <div className="ingredients_content">
                                                    {
                                                        recipe.ingredients.map((ingredient => {
                                                            return (<div>
                                                                <div className="reccard_kbzhu1">
                                                                    <div className="reccard_kbzhu_name">{ingredient.title}, {ingredient.pivot.mass_unit}</div>
                                                                    <div className="reccard_kbzhu_dotted"></div>
                                                                    <div className="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="250">{ingredient.pivot.quantity_ingredient}</div>
                                                                </div>
                                                            </div>
                                                            )
                                                        }))
                                                    }
                                                </div>
                                            })}
                                    </div>
                                    <div className="reccard_main_info4">
                                        {
                                            recipeOne.map(recipe => {
                                                return <div>
                                                    {
                                                        recipe.steps.map((step => {
                                                            return (
                                                                <>
                                                                    <div className="poshag_title">ШАГ {step.step_number} из {recipe.count_steps}</div>
                                                                    <div className="poshag_content">{step.description}</div>
                                                                </>
                                                            )
                                                        }))
                                                    }
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>


                            <div className="reclist_wrap reclist_inda_reccard">
                                {/* <div className="reclist_inda_reccard_title">РЕКОМЕНДАЦИИ</div> */}
                                {recipeOneAdvice.map(recipeAdvice => {
                                    return <div className="rec_item">
                                        <div className="rec_item_plus"></div>
                                        <div className="rec_item_plus">

                                            <img src={image} style={{ width: 100 + '%', height: 190 + "px" }} className="product-item"></img>
                                            < a href={"/recipe/" + recipeAdvice.id} className="but">Перейти</a>
                                        </div>
                                        {<a href="#">
                                            <div className="rec_img">
                                            </div>





                                            <div className="rec_content">
                                                
                                            <div className="product-title">
                                                <a href={"/recipe/" + recipeAdvice.id} style={{ fontSize: 20 + 'px' }}>{recipeAdvice.title}</a>
                                                <span className="product-price">{recipeAdvice.category_title}</span>
                                                <span className="product-price img"></span>
                                            </div>
                                             
                                                <div className="rec_time_kkal">
                                                    <div className="rec_time">
                                                        <img src={logo1}></img>
                                                        &nbsp;&nbsp;<span
                                                          >{recipeAdvice.cooking_time}</span>&nbsp;{declOfNum(recipeAdvice.cooking_time)}
                                                    </div>
                                                    <div className="rec_kkal">
                                                        <img src={logo3}></img>
                                                        &nbsp;&nbsp;<span
                                                            >ККАЛОРИИ:{recipeAdvice.calorie}</span>&nbsp;/&nbsp;1&nbsp;ПОРЦ.
                                                    </div>
                                                    <div className="rec_porc">
                                                        <img src={logo2}></img>
                                                        &nbsp;&nbsp;<span
                                                            >{recipeAdvice.portion}</span>&nbsp;ПОРЦИИ
                                                    </div>
                                                </div>
                                            </div>
                                        </a>}
                                    </div>
                                })}

                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
};


