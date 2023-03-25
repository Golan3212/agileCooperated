import React from 'react';
import '../../css/menu_builder.css';
import plus from '../../../public/assets/menu_builder_image/plus.svg';
import image from '../../../public/assets/recipe_image/images/4.jpg';


export default function MenuBuilder({ menu }) {

    console.log(menu);


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
                                    <div className="cons_col cons_col0">
                                        <div className="cons_title">
                                            {item.day_name} </div>
                                    </div>
                                    <div className="cons_col cons_col1" >
                                        <div className="cons_pic cons_add" style={{ backgroundImage: `url(${image})` }}>
                                            <img className="cons_pic_img"
                                                 src={plus} title="Добавить рецепт" alt="Добавить рецепт"></img>
                                        </div>

                                        <div className="cons_txt">&nbsp;</div>

                                        <div><p className="cons_title_menu"><a href={"/menu/builder/category/"+item.breakfast.category_id}>{item.breakfast.title}</a></p></div>
                                    </div>

                                    <div className="cons_col cons_col2">
                                        <div className="cons_pic cons_add" style={{ backgroundImage: `url(${image})` }}>
                                            <img className="cons_pic_img"
                                                 src={plus} title="Добавить рецепт" alt="Добавить рецепт"></img>
                                        </div>


                                        <div className="cons_txt">&nbsp;</div>
                                        <div><p className="cons_title_menu"><a href={"/menu/builder/category/"+item.firstSnack.category_id}>{item.firstSnack.title}</a></p></div>
                                    </div>

                                    <div className="cons_col cons_col3">
                                        <div className="cons_pic cons_add" style={{ backgroundImage: `url(${image})` }}>
                                            <img className="cons_pic_img"
                                                 src={plus} title="Добавить рецепт" alt="Добавить рецепт"></img>
                                        </div>


                                        <div className="cons_txt">&nbsp;</div>
                                        <div><p className="cons_title_menu"><a href={"/menu/builder/category/"+item.lunch.category_id}>{item.lunch.title}</a></p></div>
                                    </div>

                                    <div className="cons_col cons_col4" >
                                        <div className="cons_pic cons_add" style={{ backgroundImage: `url(${image})` }}>
                                            <img className="cons_pic_img"
                                                 src={plus} title="Добавить рецепт" alt="Добавить рецепт"></img>
                                        </div>


                                        <div className="cons_txt">&nbsp;</div>
                                        <div><p className="cons_title_menu"><a href={"/menu/builder/category/"+item.secondSnack.category_id}>{item.secondSnack.title}</a></p></div>
                                    </div>

                                    <div className="cons_col cons_col5" >
                                        <div className="cons_pic cons_add" style={{ backgroundImage: `url(${image})` }}>
                                            <img className="cons_pic_img"
                                                 src={plus} title="Добавить рецепт" alt="Добавить рецепт"></img>
                                        </div>


                                        <div className="cons_txt">&nbsp;</div>
                                        <div><p className="cons_title_menu"><a href={"/menu/builder/category/"+item.dinner.category_id}>{item.dinner.title}</a></p></div>
                                    </div>

                                    <div className="cons_col cons_col1" >
                                        <div className="cons_pic cons_itog">
                                            <div className="cons_itog_title">На 1 порцию</div>
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
                                    </div>

                                </div>
                            </div>
                        })}
                    </div>
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
