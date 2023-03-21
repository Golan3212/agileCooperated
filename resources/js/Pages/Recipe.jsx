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
        const text_forms = ["минута", "минуты", "минут"];
        var n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }
        return text_forms[2]

    }
    declOfNum();

    return (
        <div>
            {/* <div className="section bg_hr_green">
                <div className="container">
                    <div className="title_h1">
                        {recipeOne.map(recipe => {
                            return <h1 className="title_main bg_white">Рецепт № {recipe.id}</h1>
                        })}

                    </div>
                </div>
            </div> */}
            {/* <div className="section section_field_small"></div>
            <div className="section">
                <div className="container">
                    <div className="title_h3 h3_href">
                        <Link className="footer_menu_color" href="/recipes">Все Рецепты</Link>

                    </div>
                </div>
            </div> */}

            <div className="section">
                <div className="container">
                    <div className="reclist_main">


                        <div className="reccard_wrap">
                            <div className="reccard_content">
                                {recipeOne.map(recipe => {
                                    return <div className="reccard_main_title">{recipe.title}
                                        <div className="reccard_main_title">{recipe.category_title}</div>
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
                                                return <><div className="reccard_main_time1">
                                                    <img src={logo1} ></img>
                                                    &nbsp;&nbsp;{recipe.cooking_time}&nbsp;{declOfNum(recipe.cooking_time)}
                                                </div>
                                                    <div className="reccard_main_time1">
                                                        <img src={logo2}></img>
                                                        &nbsp;&nbsp;{recipe.portion}&nbsp;порции
                                                    </div>
                                                </>
                                            })}
                                        </div>
                                        {recipeOne.map(recipe => {
                                            return <div className="reccard_main_kbzhu">
                                                <div className="reccard_kbzhu_title"><strong>Пищевая ценность порции</strong></div>
                                                <div className="reccard_kbzhu1">
                                                    <div className="reccard_kbzhu_name">Калории</div>
                                                    <div className="reccard_kbzhu_dotted"></div>
                                                    <div className="reccard_kbzhu_values">{recipe.calorie}</div>
                                                </div>
                                                <div className="reccard_kbzhu1">
                                                    <div className="reccard_kbzhu_name">Белки, г.</div>
                                                    <div className="reccard_kbzhu_dotted"></div>
                                                    <div className="reccard_kbzhu_values">{recipe.proteins}</div>
                                                </div>
                                                <div className="reccard_kbzhu1">
                                                    <div className="reccard_kbzhu_name">Жиры, г.</div>
                                                    <div className="reccard_kbzhu_dotted"></div>
                                                    <div className="reccard_kbzhu_values">{recipe.fats}</div>
                                                </div>
                                                <div className="reccard_kbzhu1">
                                                    <div className="reccard_kbzhu_name">Углеводы, г.</div>
                                                    <div className="reccard_kbzhu_dotted"></div>
                                                    <div className="reccard_kbzhu_values">{recipe.carbohydrates}</div>
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
                                                                    <div className="reccard_kbzhu_name">{ingredient.title}, {ingredient.mass_unit}</div>
                                                                    <div className="reccard_kbzhu_dotted"></div>
                                                                    <div className="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="250">{ingredient.quantity}</div>
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
                                            
                                                <img src={image} style={{ width: 100 + '%' }} className="product-item"></img>
                                               < a href={"/recipe/" + recipeAdvice.id} className="but">Перейти</a>
                                        </div>
                                        {<a href="#">
                                            <div className="rec_img">
                                            </div>
                                            <div className="rec_content">
                                                <div className="rec_name">{recipeAdvice.title}
                                                    <div className="rec_name">{recipeAdvice.category_title}</div>
                                                </div>
                                                <div className="rec_time_kkal">
                                                    <div className="rec_time">
                                                        <img src={logo1}></img>
                                                        &nbsp;&nbsp;<span
                                                            style={{ fontWeight: "bold" }}>{recipeAdvice.cooking_time}</span>&nbsp;{declOfNum(recipeAdvice.cooking_time)}
                                                    </div>
                                                    <div className="rec_kkal">
                                                        <img src={logo3}></img>
                                                        &nbsp;&nbsp;<span
                                                            style={{ fontWeight: 'bold' }}>{recipeAdvice.calorie}</span>&nbsp;ккал.&nbsp;на&nbsp;1&nbsp;порц.
                                                    </div>
                                                    <div className="rec_porc">
                                                        <img src={logo2}></img>
                                                        &nbsp;&nbsp;<span
                                                            style={{ fontWeight: 'bold' }}>{recipeAdvice.portion}</span>&nbsp;порции
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


