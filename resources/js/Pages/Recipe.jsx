import React, {useEffect} from 'react';
import '../../css/recipe.css';

import {Link, router} from '@inertiajs/react'


import logo1 from "../../../public/assets/recipe_image/icons/time.svg";
import logo2 from "../../../public/assets/recipe_image/icons/calories.svg";
import logo3 from "../../../public/assets/recipe_image/icons/portions.svg";
import image from "../../../public/assets/recipe_image/images/1.jpg";
// import {useState} from "@types/react";
import { useState } from 'react';
import {useLocalStorage} from "../formulas/saveLocalStorage";
import usePagination from "../hooks/usePagintaion";

export default function Recipe({ recipeOne, recipeOneAdvice, comments, recipeId }) {

    const [values, setValues] = useState({
        name: "",
        content: "",
        recipe_id: (recipeId)
    });

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage: 8,
        count: comments.length,
    });


    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        // e.target.reset();
        router.post('/comments', values);

    }

   useEffect(() => {
       setValues(values => (  {
           name: "",
           content: "",
           recipe_id: (recipeId)
       }));
   },[comments])


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

   const Comment = (props) => {
       let comments = props.commentList;
       console.log(comments);
       if (comments.length < 1){
           return <div className="account__inner">
               Комментариев пока нет
           </div>
       }else{
           return <div style={{height: "700px", display:"flex", flexDirection: "column",
               justifyContent: "space-between"}}>
               {comments.slice(firstContentIndex, lastContentIndex).map(item =>
                   (
                       <div className="account__inner">
                           <p>Автор: {item.name} ({item.date})</p>
                           <span>{item.content}</span>
                       </div>
                   )
               )}
               <br/>
               <div className="pagination">

                   <button onClick={prevPage} className="page">
                       &larr;
                   </button>
                   {/* @ts-ignore */}
                   {[...Array(totalPages).keys()].map((el) => (
                       <button
                           className={`page ${page === el + 1 ? "active" : ""}`}
                           onClick={ () => setPage(el + 1)}
                           key={el}

                       > {el + 1}
                       </button>))}
                   <button onClick={nextPage} className="page">
                       &rarr;
                   </button>
               </div>
           </div>
       }




   }

    return (
        <div>
            <div className="section">
                <div className="container">
                    <div className="reclist_main">


                        <div className="reccard_wrap">
                            <div className="reccard_content">
                                {recipeOne.map((recipe, index) => {
                                    return <div className="reccard_main_title">{recipe.title}
                                            <div className="reccard_content_title">{recipe.category_title}</div>
                                        </div>

                                })}
                                <div className="reccard_main_photo_wrap" style={{ width: 100 + '%' }}>
                                    <div className="rec_item_plus_txt">
                                        <div className="reccard_main_add"><a href="#comments">Ваши комментарии по рецепту</a></div>
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
                                                                    <div className="reccard_kbzhu_name">
                                                                        {ingredient.title.replace(",","")}
                                                                        {ingredient.pivot.quantity_ingredient ? "," : ""}
                                                                        {ingredient.pivot.mass_unit.replace("по вкусу","")}</div>
                                                                    <div className="reccard_kbzhu_dotted"></div>

                                                                    {
                                                                        <div className="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="250">{
                                                                            ingredient.pivot.quantity_ingredient === 0 ?
                                                                                "по вкусу" :
                                                                                ingredient.pivot.quantity_ingredient
                                                                        }</div>
                                                                    }

                                                                </div>
                                                            </div>
                                                            )
                                                        }))
                                                    }
                                                </div>
                                            })}
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
                                                        <div>
                                                            <div>
                                                                <h1 id="comments" className="ingredients_title">Ваши комментарии ({comments.length})</h1>
                                                                <form className="account__box" onSubmit={handleSubmit}>
                                                                    <label htmlFor="name">Введите имя:</label>
                                                                    <input className="input_name" id="name" value={values.name}
                                                                           onChange={handleChange}
                                                                    />

                                                                    <label htmlFor="content">Оставьте комментарий</label>
                                                                    <textarea className="input_name" id="content" value={values.content}
                                                                           onChange={handleChange}
                                                                    />
                                                                    <button  className="account__btn" type="submit">Отправить</button>
                                                                </form>
                                                            </div>
                                                                    <Comment commentList={comments}/>

                                                        </div>
                                                    </div>

                                                })
                                            }

                                        </div>
                                    </div>

                                </div>

                            </div>


                            <div className="reclist_wrap reclist_inda_reccard">
                                {/* <div className="reclist_inda_reccard_title">РЕКОМЕНДАЦИИ</div> */}
                                {recipeOneAdvice.map((recipeAdvice, index) => {
                                    return <div>
                                    <div style={{width:"290px", height:"170px",
                                    marginBottom:"20%", border:"3px solid gold",
                                    backgroundColor:"#E4E4D9", borderRadius:"20px",
                                    display:"flex", alignItems:"center", justifyContent:"center"}}>
                                       <p style={{fontSize: 20 + 'px', color:"yellowgreen"}}>Реклама №{index+1}</p>
                                    </div>
                                    <div className="rec_item">
                                        <div className="rec_item_plus"></div>
                                        <div className="rec_item_plus">
                                            <div className="product-item">
                                                <img src={image} style={{ width: 100 + '%', height: 190 + "px" }}></img>
                                                <div className="but">
                                                    < a href={"/recipe/" + recipeAdvice.id} >Перейти</a>
                                                </div>
                                            </div>
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





