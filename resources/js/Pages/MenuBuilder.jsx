import React from 'react';
import '../../css/menu_builder.css';
import image from '../../../public/assets/menu_builder_image/62c2cee20bd62.jpg';
import plus from '../../../public/assets/menu_builder_image/plus.svg';
import shop from '../../../public/assets/menu_builder_image/shopping.svg';
import { useSearchParams } from 'react-router-dom';

export default function MenuBuilder({menu}){

    console.log(menu);

    return (
        <div>
            <div className="section section_grey section_submenu1 hidden nomobile">
                <div className="container">

                </div>
            </div>

            <div className="section section_field_big"></div>
            <div className="section bg_hr_green">
                <div className="container">
                    <div className="title_h1">
                        <h1 className="title_main bg_white">Конструктор меню</h1>
                    </div>
                </div>
            </div>
            <div className="section section_field_small"></div>
            {/* <div className="section">
                <div className="container">
                    <div className="title_h3">
                        Составьте меню на неделю
                    </div>
                </div>
            </div> */}
            <div className="section section_field_small"></div>


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
                            return<div className="constructor">
                                <div className="cons_row cons_row1">
                                    <div className="cons_col cons_col0">
                                        <div className="cons_title">
                                            {item.day_name} </div>
                                    </div>
                                    <div className="cons_col cons_col1" data-day="1" data-rectype="1" id="col-1-1">
                                        <div className="cons_pic cons_add" style={{backgroundImage: `url(${image})`, backgroundSize: "cover",
                                            backgroundPosition: "center"}} data-day="1" data-rectype="1" id="add-1-1">
                                            <img className="cons_pic_img"
                                                 src={plus} title="Добавить рецепт" alt="Добавить рецепт"></img>
                                        </div>
                                        <p>{item.breakfast_title}</p>
                                        <div className="cons_txt">&nbsp;</div>
                                    </div>

                                    <div className="cons_col cons_col2" data-day="2" data-rectype="1" id="col-2-1">
                                        <div className="cons_pic cons_add" style={{backgroundImage: `url(${image})`, backgroundSize: "cover",
                                            backgroundPosition: "center"}} data-day="2" data-rectype="1" id="add-2-1">
                                            <img className="cons_pic_img"
                                                 src={plus} title="Добавить рецепт" alt="Добавить рецепт"></img>
                                        </div>
                                        <p>{item.firstSnack_title}</p>
                                        <div className="cons_txt">&nbsp;</div>
                                    </div>

                                    <div className="cons_col cons_col3" data-day="3" data-rectype="1" id="col-3-1">
                                        <div className="cons_pic cons_add" style={{backgroundImage: `url(${image})`, backgroundSize: "cover",
                                            backgroundPosition: "center"}} data-day="3" data-rectype="1" id="add-3-1">
                                            <img className="cons_pic_img"
                                                 src={plus} title="Добавить рецепт" alt="Добавить рецепт"></img>
                                        </div>
                                        <p>{item.lunch_title}</p>
                                        <div className="cons_txt">&nbsp;</div>
                                    </div>

                                    <div className="cons_col cons_col4" data-day="4" data-rectype="1" id="col-4-1">
                                        <div className="cons_pic cons_add" style={{backgroundImage: `url(${image})`, backgroundSize: "cover",
                                            backgroundPosition: "center"}} data-day="4" data-rectype="1" id="add-4-1">
                                            <img className="cons_pic_img"
                                                 src={plus} title="Добавить рецепт" alt="Добавить рецепт"></img>
                                        </div>
                                        <p>{item.dinner_title}</p>
                                        <div className="cons_txt">&nbsp;</div>
                                    </div>

                                    <div className="cons_col cons_col5" data-day="5" data-rectype="1" id="col-5-1">
                                        <div className="cons_pic cons_add" style={{backgroundImage: `url(${image})`, backgroundSize: "cover",
                                            backgroundPosition: "center"}} data-day="5" data-rectype="1" id="add-5-1">
                                            <img className="cons_pic_img"
                                                 src={plus} title="Добавить рецепт" alt="Добавить рецепт"></img>
                                        </div>
                                        <p>{item.secondSnack_title}</p>
                                        <div className="cons_txt">&nbsp;</div>
                                    </div>

                                    <div className="cons_col cons_col1" data-day="1" data-rectype="3" id="col-1-3">
                                        <div className="cons_pic cons_itog">
                                            <div className="cons_itog_title">На 1 порцию</div>
                                            <div className="cons_itog_str" id="itog_k_1">
                                                <div className="cons_itog_str_name">ККалории</div>
                                                <div className="cons_itog_str_val">0</div>
                                            </div>
                                            <div className="cons_itog_str" id="itog_b_1">
                                                <div className="cons_itog_str_name">Белки, г</div>
                                                <div className="cons_itog_str_val">0</div>
                                            </div>
                                            <div className="cons_itog_str" id="itog_z_1">
                                                <div className="cons_itog_str_name">Жиры, г</div>
                                                <div className="cons_itog_str_val">0</div>
                                            </div>
                                            <div className="cons_itog_str" id="itog_u_1">
                                                <div className="cons_itog_str_name">Углеводы, г</div>
                                                <div className="cons_itog_str_val">0</div>
                                            </div>
                                        </div>
                                        <div className="cons_shopping" id="" style={{display: "none"}}><img src={shop}></img></div>
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
                            <div > <button className="buttons_row_button" id="btn_sohranit_recepti">Вернуть первоначальное меню </button></div>
                        </div>
                        <div className="buttons_row_text_wrap">
                            <div className="buttons_row_text" id="txt_vernut_menu"><strong>Сбросить рецепты</strong> в недельной
                                сетке до "рекомендуемых".<span className="append_text"></span></div>
                        </div>
                    </div>
                    <div className="buttons_row">
                        <div className="buttons_row_button_wrap">
                            <div > <button className="buttons_row_button" id="btn_sohranit_recepti">Удалить все рецепты из списка</button></div>
                        </div>
                        <div className="buttons_row_text_wrap">
                            <div className="buttons_row_text" id="txt_udalit_recepti"><strong>Очистить все рецепты</strong> из
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
