import React, { useEffect, useState } from 'react';
import '../../css/menu_builder.css';
import plus from '../../../public/assets/menu_builder_image/plus.svg';
import image from '../../../public/assets/recipe_image/images/4.jpg';
import logo3 from "../../../public/assets/recipe_image/icons/portions.svg";
import { Inertia } from '@inertiajs/inertia';

export default function MenuBuilder({ menu, recipes, caloricNorm }) {

    const [menuAll, setMenuAll] = useState(menu);
    const [menuList, setMenuList] = useState(menuAll);
    const [idDay, setIdDay] = useState(0);
    const [idRecipe, setIdRecipe] = useState(0);
    const [recipeId, setRecipeId] = useState("");
    const [newRecipeId, setNewRecipeId] = useState(recipeId);
    const [newRecipe, setNewRecipe] = useState({});
    const [positionMenuInMenuWeek, setPositionMenuInMenuWeek] = useState('');
    const [positionRecipeInMenu, setpositionRecipeInMenu] = useState('');
    const [dataDay, setDataDay] = useState("");


    const [show, setShow] = useState(false);


    const openModal = () => {
        document.body.setAttribute("style", "overflow-y:hidden");
        setShow(true);
    }
    const closeModal = () => {
        document.body.setAttribute("style", "overflow-y:scroll");
        setShow(false);
    }

    useEffect(() => {
        if (newRecipeId !== "") {
            menuList[idDay].menu_recipes[idRecipe] = newRecipeId;

        }
    },);

    function hangleResetMenu(e) {
        e.preventDefault();
        Inertia.post('/menu/builder/constructor');
    }

    function handleUpdateRecipes(e, id) {
        e.preventDefault();
        const value = {
            menuId: dataDay,
            positionRecipe: positionRecipeInMenu,
            positionMenu: positionMenuInMenuWeek,
            newRecipeId: id
        };

        Inertia.put('/menu/builder/constructor/update', value);
    }

    function handleRecipeId(id, category, day, positionMenu, positionRecipe) {

        setPositionMenuInMenuWeek(positionMenu);
        setpositionRecipeInMenu(positionRecipe);
        setNewRecipe(() => recipes.filter(recipe => recipe.category_id == category));
        setDataDay(day);
        menuAll.map(function (recipes, index) {
            if (recipes.menu_id == day) {
                recipes.menu_recipes.map((recipe) => {
                    if (recipe.id == id) {
                        return setRecipeId(recipe);
                    }
                })
            }
        });

    }


    function weekDay(dayIndex) {
        const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
        return days[dayIndex];
    }

    function MenuList() {
        return (
            <div className="constructor">
                <div className="cons_row cons_row0">
                    <div className="cons_col cons_col0"></div>
                    <div className="cons_col cons_col1">Завтрак</div>
                    <div className="cons_col cons_col2">Перекус</div>
                    <div className="cons_col cons_col3">Обед</div>
                    <div className="cons_col cons_col4">Перекус</div>
                    <div className="cons_col cons_col5">Ужин</div>
                    <div className="cons_col cons_col5">Итог дня</div>

                </div>
                {menuAll.map((item, index) => (
                    <div className="constructor">
                        <div className="cons_row cons_row1" id={item.menu_id}>
                            <div className="cons_col cons_col0" style={{ height: 233 + "px" }}>
                                <div className="cons_day">
                                    {weekDay(index)}
                                </div>

                            </div>
                            {item.menu_recipes.map((menuRecipe, key)=> (
                                <div className="cons_col cons_col1">
                                    <div className="cons_pic cons_add" style={{ backgroundImage: `url(${menuRecipe.image})`, cursor: "auto" }}
                                        // data-day={item.menu_id} id={menuRecipe.id} data-category={menuRecipe.category_id}
                                    >
                                        {!show && <button className="menu__btn" onClick={() => { openModal(); handleRecipeId(menuRecipe.id, menuRecipe.category_id, item.menu_id, index, key) }}
                                                          data-day={item.menu_id} id={menuRecipe.id} data-category={menuRecipe.category_id}>
                                            <img className="cons_pic_img"
                                                 src={plus} title="Заменить рецепт" alt="Заменить рецепт"></img>
                                        </button>}
                                    </div>
                                    <div className="cons_txt">
                                        <div className="cons_title_menu">
                                            <a href={"/recipe/" + menuRecipe.id}>{menuRecipe.title}</a>
                                        </div>
                                        <div className="cons_calorie">
                                            <div>
                                                <img className="cons_title_logo" src={logo3}></img>
                                            </div>
                                            <div>
                                                <p className="cons_title_calorie">ККАЛОРИЙ: {menuRecipe.calorie}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="cons_col cons_col1" >
                                <div className="cons_pic cons_itog">
                                    <div className="cons_itog_str">
                                        <div className="cons_itog_str_name">ККалории</div>
                                        <div className="cons_itog_str_val">{item.totalCalories}</div>
                                    </div>
                                    <div className="cons_itog_str">
                                        <div className="cons_itog_str_name">Белки, г</div>
                                        <div className="cons_itog_str_val">{item.totalProteins}</div>
                                    </div>
                                    <div className="cons_itog_str">
                                        <div className="cons_itog_str_name">Жиры, г</div>
                                        <div className="cons_itog_str_val">{item.totalFats}</div>
                                    </div>
                                    <div className="cons_itog_str">
                                        <div className="cons_itog_str_name">Углеводы, г</div>
                                        <div className="cons_itog_str_val">{item.totalCarbohydrates}</div>
                                    </div>
                                </div>
                                <div>
                                    {
                                        ((caloricNorm-200)>item.totalCalories) ?  <div>У вас недобор калорий на {caloricNorm-item.totalCalories}</div> : <></>
                                    }
                                    {
                                        ((caloricNorm+200)<item.totalCalories) ?  <div>У вас перебор калорий на {item.totalCalories-caloricNorm}</div> : <></>
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        );
    }

    function CategoryList(props) {
        const { show, closeModal } = props;

        return (
            <>
                <div className={show ? "overlay" : "hide"} onClick={closeModal} >

                    <div className={show ? "modal" : "hide"}>
                        <div id="element" className="modal__box">

                            {newRecipe.map((item) => (

                                <div className="modal__card red"
                                     id={item.id}

                                >
                                    <div className="cons_pic cons_add product-item"
                                         style={{ backgroundImage: `url(${item.image})`, cursor: "auto", width: "100%", height: 190 + "px" }}
                                         data-category={item.category_id} id={item.id}>
                                        <a href={"#" + item.id}>
                                            <button  className="modal__btn" data-category={item.category_id} id={item.id}

                                                     onClick={(e) => { handleUpdateRecipes(e, item.id); }}
                                            > Заменить рецепт
                                            </button>
                                        </a>
                                    </div>


                                    <div className="cons_txt modal__text">
                                        <div className="cons_title_menu">
                                            <a href={"/recipe/" + item.id}>{item.title}</a>
                                        </div>
                                        <div className="cons_calorie">
                                            <div>
                                                <img className="cons_title_logo" src={logo3}></img>
                                            </div>
                                            <div>
                                                <p className="cons_title_calorie">ККАЛОРИЙ: {item.calorie} </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                        <button className="modal__button" onClick={closeModal}>Х</button>
                    </div>
                </div>
            </>
        )
    }
    console.log(newRecipe);
    function ShowCategoryList(props) {
        if (!show) {
            return <MenuList />
        }
        return (
            <div>
                {/*<CategoryList />*/}
                <MenuList />
                <CategoryList closeModal={closeModal} show={show}></CategoryList>


            </div>
        )
    }


    return (
        <div>
            <div className="section section_grey section_submenu1 hidden nomobile">
                <div className="container"></div>
            </div>

            <div className="section section_field_big"></div>
            <div className="section bg_hr_green">
                <div className="container">
                    <div className="title_h1">
                        <h1 className="title_main bg_white">Конструктор меню</h1>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="text_center">
                        <div className="simple_text_500">
                            Вы можете поменять рекомендуемые рецепты на другие.
                            Для этого нажмите на "+" и выберите рецепт по вкусу!
                        </div>
                    </div>
                </div>
            </div>
            <div className="section section_field"></div>

            <div className="section section_field_small"></div>


            <div className="section section_constructor">
                <div className="container container_constructor">
                    <ShowCategoryList />
                </div>
            </div>

            <div className="section section_field_small"></div>

            <div className="section section_field_small"></div>
            <div className="section">
                <div className="container">
                    <div className="buttons_row">

                    </div>
                    {/* <div className="buttons_row">
                        <div className="buttons_row_button_wrap">
                            <div > <button className="buttons_row_button" id="btn_sohranit_recepti">Сохранить рецепты</button></div>
                        </div>
                        <div className="buttons_row_text_wrap">
                            <div className="buttons_row_text" id="txt_sohranit_recepti"><strong>Сохранить рецепты</strong> в <a className="buttons_row_a"
                                href="№" >личный кабинет</a>, чтобы потом можно было
                                вернуться и приготовить понравившиеся блюда. В общей сложности можно сохранять только 5
                                недельных наборов.<span className="append_text"></span></div>
                        </div>
                    </div> */}
                    {/*ВРЕММЕННО КОММЕНТИРУЮ НА УРОК 27.03.*/}
                    <div className="buttons_row">
                        <div className="buttons_row_button_wrap">
                            <div > <button className="buttons_row_button" onClick={(e) => { hangleResetMenu(e); }}>Вернуть первоначальное меню </button></div>
                        </div>
                        <div className="buttons_row_text_wrap">
                            <div className="buttons_row_text" ><strong>Сбросить рецепты</strong> в недельной
                                сетке до "рекомендуемых".<span className="append_text"></span></div>
                        </div>
                    </div>
                    {/*<div className="buttons_row">*/}
                    {/*    <div className="buttons_row_button_wrap">*/}
                    {/*        <div > <button className="buttons_row_button" >Удалить все рецепты из списка</button></div>*/}
                    {/*    </div>*/}
                    {/*    <div className="buttons_row_text_wrap">*/}
                    {/*        <div className="buttons_row_text" ><strong>Очистить все рецепты</strong> из*/}
                    {/*            недельной сетки, чтобы самостоятельно заполнить её любимыми блюдами. Всегда можете вернуться к*/}
                    {/*            "рекомендуемому" набору рецептов - воспользуйтесь кнопкой "вернуть первоначальное меню".<span*/}
                    {/*                className="append_text"></span></div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*КОНЕЦ ВРЕМЕННОГО КОММЕНТИРОВАНИЯ НА УРОК 27.03*/}
                </div>
            </div>

        </div>

    )


};
