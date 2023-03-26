import React, {useState} from 'react';
import '../../css/menu_builder.css';
import plus from '../../../public/assets/menu_builder_image/plus.svg';
import image from '../../../public/assets/recipe_image/images/4.jpg';
import logo3 from "../../../public/assets/recipe_image/icons/portions.svg";

export default function MenuBuilder({ menu, recipeOneAdvice }) {

    console.log(menu);

    const [menuList, setMenuList] = useState(menu);
    const [recipeId, setRecipeId] = useState(menuList);
    const [newRecipe, setNewRecipe] = useState(recipeOneAdvice);

    const [show, setShow] = useState(false);
    const openModal = () => {
        document.body.setAttribute("style", "overflow-y:hidden");
        setShow(true);
    }
    const closeModal = () => {
        document.body.setAttribute("style", "overflow-y:scroll");
        setShow(false);
    }

    function handleRecipeId (event){
        setRecipeId(() => menuList.filter(recipe => recipe.breakfast_id == event.target.id));
        setNewRecipe(() => recipeOneAdvice.filter(recipe => recipe.id == event.target.id));

        // console.log(menuList.find(e => e == event.target ));
        console.log(recipeId[0]);
        console.log(newRecipe[0]);
        // console.log(menuList);
        // setIsActive((prevActive) => !prevActive);

        openModal();

    }

    function updateRecipes (event){
        // setMenuList(() => menuList.forEach(recipe => {
        //     if (recipe == recipeId[0]){
        //         recipe.breakfast_id = newRecipe[0].id;
        //         recipe.breakfast_title = newRecipe[0].title;
        //         recipe.breakfast_id = newRecipe[0].id;
        //         recipe.breakfast_id = newRecipe[0].id;
        //         recipe.breakfast_id = newRecipe[0].id;
        //         recipe.breakfast_id = newRecipe[0].id;
        //
        //         console.log(recipe);
        //         console.log(recipeId[0]);
        //     }
        // }));

        closeModal();

    }

    function MenuList(props) {
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
                {menu.map(item => {
                    return <div className="constructor">
                        <div className="cons_row cons_row1">
                            <div className="cons_col cons_col0" style={{ height: 233 + "px" }}>
                                <div className="cons_day">
                                    {item.day_name} </div>
                            </div>

                            <div className="cons_col cons_col1"
                                 data-day="1" data-rectype="1" id="col-1-1">
                                <div className="cons_pic cons_add" style={{ backgroundImage: `url(${image})`, cursor: "auto" }}
                                     data-day="1" data-rectype="1" id={item.breakfast_id}>
                                    {!show && <button className="menu__btn" onClick={handleRecipeId}>
                                        <img className="cons_pic_img"
                                             src={plus} title="Добавить рецепт" alt="Добавить рецепт"></img>
                                    </button>}
                                </div>
                                <div className="cons_txt">
                                    <div className="cons_title_menu">
                                        <a href={"/recipe/"}>{item.breakfast_title}</a>
                                    </div>
                                    <div className="cons_calorie">
                                        <div>
                                            <img className="cons_title_logo" src={logo3}></img>
                                        </div>
                                        <div>
                                            <p className="cons_title_calorie">ККАЛОРИЙ: 521 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cons_col cons_col2"
                                 data-day="2" data-rectype="1" id="col-2-1">
                                <div className="cons_pic cons_add" style={{ backgroundImage: `url(${image})`, cursor: "auto" }}
                                     data-day="2" data-rectype="1" id="add-2-1">
                                    {!show && <button className="menu__btn" onClick={handleRecipeId}>
                                        <img className="cons_pic_img"
                                             src={plus} title="Добавить рецепт" alt="Добавить рецепт"></img>
                                    </button>}
                                </div>
                                <div className="cons_txt">
                                    <div className="cons_title_menu">
                                        <a href={"/recipe/"}>{item.firstSnack_title}</a>
                                    </div>
                                    <div className="cons_calorie">
                                        <div>
                                            <img className="cons_title_logo" src={logo3}></img>
                                        </div>
                                        <div>
                                            <p className="cons_title_calorie">ККАЛОРИЙ: 521 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cons_col cons_col3"
                                 data-day="3" data-rectype="1" id="col-3-1">
                                <div className="cons_pic cons_add" style={{ backgroundImage: `url(${image})`, cursor: "auto" }}
                                     data-day="3" data-rectype="1" id="add-3-1">
                                    {!show && <button className="menu__btn" onClick={handleRecipeId}>
                                        <img className="cons_pic_img"
                                             src={plus} title="Добавить рецепт" alt="Добавить рецепт"></img>
                                    </button>}
                                </div>
                                <div className="cons_txt">
                                    <div className="cons_title_menu">
                                        <a href={"/recipe/"}>{item.lunch_title}</a>
                                    </div>
                                    <div className="cons_calorie">
                                        <div>
                                            <img className="cons_title_logo" src={logo3}></img>
                                        </div>
                                        <div>
                                            <p className="cons_title_calorie">ККАЛОРИЙ: 521 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cons_col cons_col4"
                                 data-day="4" data-rectype="1" id="col-4-1">
                                <div className="cons_pic cons_add" style={{ backgroundImage: `url(${image})`, cursor: "auto" }}
                                     data-day="4" data-rectype="1" id="add-4-1">
                                    {!show && <button className="menu__btn" onClick={handleRecipeId}>
                                        <img className="cons_pic_img"
                                             src={plus} title="Добавить рецепт" alt="Добавить рецепт"></img>
                                    </button>}
                                </div>
                                <div className="cons_txt">
                                    <div className="cons_title_menu">
                                        <a href={"/recipe/"}>{item.dinner_title}</a>
                                    </div>
                                    <div className="cons_calorie">
                                        <div>
                                            <img className="cons_title_logo" src={logo3}></img>
                                        </div>
                                        <div>
                                            <p className="cons_title_calorie">ККАЛОРИЙ: 521 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cons_col cons_col5"
                                 data-day="5" data-rectype="1" id="col-5-1">
                                <div className="cons_pic cons_add" style={{ backgroundImage: `url(${image})`, cursor: "auto" }}
                                     data-day="5" data-rectype="1" id="add-5-1">
                                    {!show && <button className="menu__btn" onClick={handleRecipeId}>
                                        <img className="cons_pic_img"
                                             src={plus} title="Добавить рецепт" alt="Добавить рецепт"></img>
                                    </button>}
                                </div>
                                <div className="cons_txt">
                                    <div className="cons_title_menu">
                                        <a href={"/recipe/"}>{item.secondSnack_title}</a>
                                    </div>
                                    <div className="cons_calorie">
                                        <div>
                                            <img className="cons_title_logo" src={logo3}></img>
                                        </div>
                                        <div>
                                            <p className="cons_title_calorie">ККАЛОРИЙ: 521 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cons_col cons_col1" >
                                <div className="cons_pic cons_itog">
                                    {/*<div className="cons_itog_title">На 1 порцию</div>*/}
                                    <div className="cons_itog_str">
                                        <div className="cons_itog_str_name">ККалории</div>
                                        <div className="cons_itog_str_val">0</div>
                                    </div>
                                    <div className="cons_itog_str">
                                        <div className="cons_itog_str_name">Белки, г</div>
                                        <div className="cons_itog_str_val">0</div>
                                    </div>
                                    <div className="cons_itog_str">
                                        <div className="cons_itog_str_name">Жиры, г</div>
                                        <div className="cons_itog_str_val">0</div>
                                    </div>
                                    <div className="cons_itog_str">
                                        <div className="cons_itog_str_name">Углеводы, г</div>
                                        <div className="cons_itog_str_val">0</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                })}
            </div>
        )
    }

    function CategoryList(props){
        const { show, closeModal } = props;

        return (
            <>
                <div className={show ? "overlay" : "hide"} onClick={closeModal} />
                {/*<div className="cons_col cons_col1">*/}
                <div className={show ? "modal" : "hide"}>
                    <div id="element" className="modal__box">

                    {recipeOneAdvice.map( (item) => (

                        <div className="modal__card"
                             data-day="1" data-rectype="1" id="col-1-1">
                            <div className="cons_pic cons_add"
                                 style={{ backgroundImage: `url(${image})`, cursor: "auto", width: "100%" }}
                                 data-day="1" data-rectype="1" id={item.id}>
                            </div>
                            <div className="cons_txt modal__text">
                                <div className="cons_title_menu">
                                    <a href={"/recipe/"}>{item.title}</a>
                                </div>
                                <div className="cons_calorie">
                                    <div>
                                        <img className="cons_title_logo" src={logo3}></img>
                                    </div>
                                    <div>
                                        <p className="cons_title_calorie">ККАЛОРИЙ: 521 </p>
                                    </div>
                                </div>
                                <button className="modal__btn" onClick={updateRecipes}>Добавить рецепт</button>
                            </div>




                            {/*<div> <p className="cons_title_menu modal__title">{item.title}</p></div>*/}

                        </div>
                    ))}
                    </div>
                    <button className="modal__button" onClick={closeModal}>Х</button>
                </div>
            </>
        )
    }

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
                            Добавьте рецепт в&nbsp;конструктор&nbsp; и выберите в
                            списке самый вкусный!
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
                    <div className="buttons_row">
                        <div className="buttons_row_button_wrap">
                            <div > <button className="buttons_row_button">Вернуть первоначальное меню </button></div>
                        </div>
                        <div className="buttons_row_text_wrap">
                            <div className="buttons_row_text" ><strong>Сбросить рецепты</strong> в недельной
                                сетке до "рекомендуемых".<span className="append_text"></span></div>
                        </div>
                    </div>
                    <div className="buttons_row">
                        <div className="buttons_row_button_wrap">
                            <div > <button className="buttons_row_button" >Удалить все рецепты из списка</button></div>
                        </div>
                        <div className="buttons_row_text_wrap">
                            <div className="buttons_row_text" ><strong>Очистить все рецепты</strong> из
                                недельной сетки, чтобы самостоятельно заполнить её любимыми блюдами. Всегда можете вернуться к
                                "рекомендуемому" набору рецептов - воспользуйтесь кнопкой "вернуть первоначальное меню".<span
                                    className="append_text"></span></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )


};

// export default MenuBuilder;
