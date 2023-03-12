import React from 'react';
import '../../css/recipe.css';
import { Link } from '@inertiajs/react'


import logo1 from "../../../public/assets/recipe_image/icons/ico_time.svg";
import logo2 from "../../../public/assets/recipe_image/icons/ico_portions.svg";
import logo3 from "../../../public/assets/recipe_image/icons/ico_portion.svg";
import image3 from "../../../public/assets/recipe_image/images/62c30bce0f146.jpg";
import image4 from "../../../public/assets/recipe_image/images/6167ef33eec82.jpg";
import image5 from "../../../public/assets/recipe_image/images/62e2b373ae9f5.webp";

export default function Recipe({recipeOne, recipeOneAdvice}) {

    return (
        <div>

            <div className="section bg_hr_green">
                <div className="container">
                    <div className="title_h1">
                        {recipeOne.map(recipe => {
                            return <h1 className="title_main bg_white">Рецепт № {recipe.id}</h1>
                        })}

                    </div>
                </div>
            </div>
            <div className="section section_field_small"></div>
            <div className="section">
                <div className="container">
                    <div className="title_h3 h3_href">
                        <Link className="footer_menu_color" href="/recipes">Все Рецепты</Link>

                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="reclist_main">


                        <div className="reccard_wrap">
                            <div className="reccard_content">
                                {recipeOne.map(recipe => {
                                    return<div className="reccard_main_title">{recipe.title} ({recipe.category_title})</div>
                                })}
                                <div className="reccard_main_photo_wrap" style={{ width: 100 + '%' }}>
                                    <div className="rec_item_plus_txt">
                                        <div className="reccard_main_add">+ добавить рецепт в меню на неделю</div>
                                    </div>
                                    <img className="reccard_main_photo" src={image3} style={{ width: 100 + '%' }}></img>
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
                                                    &nbsp;&nbsp;{recipe.cooking_time}&nbsp;минут
                                                </div>
                                                    <div className="reccard_main_time1">
                                                        <img src={logo2}></img>
                                                        &nbsp;&nbsp;{recipe.portion}&nbsp;порции
                                                    </div>
                                                </>
                                            })}
                                        </div>
                                        {recipeOne.map(recipe => {
                                            return<div className="reccard_main_kbzhu">
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
                                                            return( <div>
                                                                    <div className="reccard_kbzhu1">
                                                                        <div className="reccard_kbzhu_name">{ingredient.title}, {ingredient.mass_unit}</div>
                                                                        <div className="reccard_kbzhu_dotted"></div>
                                                                        <div className="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="250">50</div>
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
                                                return<div>
                                                    {
                                                        recipe.steps.map((step => {
                                                            return(
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
                                <div className="reclist_inda_reccard_title">РЕКОМЕНДАЦИИ</div>
                                {recipeOneAdvice.map(recipeAdvice => {
                                    return<div className="rec_item">
                                        <div className="rec_item_plus"></div>
                                        {/* <a href="" onClick='addRecToWeek(152, "/recipes_photos/62e3ad1340146.webp", "Гуляш из курицы со сметаной и карри", 267, 30, 15, 7, 8, 1, "gulyash_iz_kuricy_so_smetanoy_i_karri"); return false;'><img src="assets/icons/plus_small.svg" title="Добавить рецепт в список" alt="Добавить рецепт в список"></img></a></div>  */}
                                        <div className="rec_item_plus">
                                            <a href="#">
                                                <img src={image3} style={{ width: 100 + '%' }}></img>
                                            </a></div>
                                        {<a href="#">
                                            <div className="rec_img">
                                            </div>
                                            <div className="rec_content">
                                                <div className="rec_name">{recipeAdvice.title}</div>
                                                <div className="rec_time_kkal">
                                                    <div className="rec_time">
                                                        <img src={logo1}></img>
                                                        &nbsp;&nbsp;<span
                                                        style={{fontWeight: "bold"}}>{recipeAdvice.cooking_time}</span>&nbsp;минут
                                                    </div>
                                                    <div className="rec_kkal">
                                                        <img src={logo3}></img>
                                                        &nbsp;&nbsp;<span
                                                        style={{fontWeight: 'bold'}}>{recipeAdvice.calorie}</span>&nbsp;ккал.&nbsp;на&nbsp;1&nbsp;порц.
                                                    </div>
                                                    <div className="rec_porc">
                                                        <img src={logo2}></img>
                                                        &nbsp;&nbsp;<span
                                                        style={{fontWeight: 'bold'}}>{recipeAdvice.portion}</span>&nbsp;порции
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


// const Recipe = (props) => {
//
//     const [recipe, setRecipe] = React.useState(null);
//
//     const steps = recipe?.recipe_steps?.map(s => {
//         return (
//             <div>
//                 <div className="poshag_title">ШАГ {s.step_numder} из {recipe.recipe_steps.length}</div>
//                 <div className="poshag_content">
//                     {s.description}</div>
//             </div>
//         )
//     })
//
//     const ingre = recipe?.ingregients?.map(i => {
//         const quantArr = recipe.quantites.filter(g => g.ingregients_id === i.id)
//         const quant = quantArr.length ? quantArr[0] : null
//
//         return (<div>
//                 <div className="reccard_kbzhu1">
//                     <div className="reccard_kbzhu_name">{i.title}, {i.mass_unit}</div>
//                     <div className="reccard_kbzhu_dotted"></div>
//                     <div className="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="250">
//                         {quant.quantity}</div>
//                 </div>
//             </div>
//         )
//
//     })
//
//
//     if (!recipe)
//         fetch("/fake-data/recipe-1.json")
//             .then(response => response.json())
//             .then((jsonData) => {
//                 console.log(jsonData)
//                 setRecipe(jsonData);
//             })
//             .catch((error) => {
//                 console.error(error)
//             })
// }







