import React from 'react';
import '../../css/recipe.css';


import logo1 from "../../../public/assets/recipe_image/icons/ico_time.svg";
import logo2 from "../../../public/assets/recipe_image/icons/ico_portions.svg";
import logo3 from "../../../public/assets/recipe_image/icons/ico_portion.svg";
import image2 from '../../../public/assets/recipe_image/images/63fce8843e5d2.jpg';
import image3 from "../../../public/assets/recipe_image/images/62c30bce0f146.jpg";
import image4 from "../../../public/assets/recipe_image/images/6167ef33eec82.jpg";
import image5 from "../../../public/assets/recipe_image/images/62e2b373ae9f5.webp";





const Recipe = (props) => {
    return (
        <div>

            <div className="section bg_hr_green">
                <div className="container">
                    <div className="title_h1">
                        <h1 className="title_main bg_white">Рецепт № 1</h1>
                    </div>
                </div>
            </div>
            <div className="section section_field_small"></div>
            <div className="section">
                <div className="container">
                    <div className="title_h3 h3_href">
                        <a href="#"> Все рецепты </a>

                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="reclist_main">


                        <div className="reccard_wrap">
                            <div className="reccard_content">
                                <div className="reccard_main_title">Жареный халуми в хрустящей панировке с салатом</div>
                                <div className="reccard_main_photo_wrap" style={{ width: 100 + '%' }}>
                                    <div className="rec_item_plus_txt">
                                        <div className="reccard_main_add">+ добавить рецепт в меню на неделю</div>
                                    </div>
                                    <img className="reccard_main_photo" src={image2} style={{ width: 100 + '%' }}></img>
                                </div>
                                <div className="reccard_main_info">
                                    <div className="reccard_main_info1">

                                        <div className="reccard_main_time">
                                            <div className="reccard_main_time1">
                                                <img src={logo1} ></img>
                                                &nbsp;&nbsp;15&nbsp;минут
                                            </div>
                                            <div className="reccard_main_time2">
                                                <img src={logo2} ></img>
                                                &nbsp;&nbsp;Порций:&nbsp;&nbsp;<span className="portions_minus">&mdash;</span><span id="portions">3</span><span className="portions_plus">+</span>
                                            </div>

                                        </div>
                                        <div className="reccard_main_kbzhu">
                                            <div className="reccard_kbzhu_title"><strong>Пищевая ценность порции</strong></div>
                                            <div className="reccard_kbzhu1">
                                                <div className="reccard_kbzhu_name">ККалории</div>
                                                <div className="reccard_kbzhu_dotted"></div>
                                                <div className="reccard_kbzhu_values">632</div>
                                            </div>
                                            <div className="reccard_kbzhu1">
                                                <div className="reccard_kbzhu_name">Белки, г.</div>
                                                <div className="reccard_kbzhu_dotted"></div>
                                                <div className="reccard_kbzhu_values">25</div>
                                            </div>
                                            <div className="reccard_kbzhu1">
                                                <div className="reccard_kbzhu_name">Жиры, г.</div>
                                                <div className="reccard_kbzhu_dotted"></div>
                                                <div className="reccard_kbzhu_values">50</div>
                                            </div>
                                            <div className="reccard_kbzhu1">
                                                <div className="reccard_kbzhu_name">Углеводы, г.</div>
                                                <div className="reccard_kbzhu_dotted"></div>
                                                <div className="reccard_kbzhu_values">22</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reccard_main_info3">
                                        <div className="ingredients_title">Ингредиенты</div>
                                        <div className="ingredients_content">
                                            <div className="reccard_kbzhu1">
                                                <div className="reccard_kbzhu_name">Сыр Халуми, г.</div>
                                                <div className="reccard_kbzhu_dotted"></div>
                                                <div className="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="250">
                                                    250</div>
                                            </div>
                                            <div className="reccard_kbzhu1">
                                                <div className="reccard_kbzhu_name">Яйца, г.</div>
                                                <div className="reccard_kbzhu_dotted"></div>
                                                <div className="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="50">
                                                    50</div>
                                            </div>
                                            <div className="reccard_kbzhu1">
                                                <div className="reccard_kbzhu_name">Мука пшеничная в/с, г.</div>
                                                <div className="reccard_kbzhu_dotted"></div>
                                                <div className="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="20">
                                                    20</div>
                                            </div>
                                            <div className="reccard_kbzhu1">
                                                <div className="reccard_kbzhu_name">Орегано сушеный, г.</div>
                                                <div className="reccard_kbzhu_dotted"></div>
                                                <div className="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="10">
                                                    10</div>
                                            </div>
                                            <div className="reccard_kbzhu1">
                                                <div className="reccard_kbzhu_name">Сухари панировочные, г.</div>
                                                <div className="reccard_kbzhu_dotted"></div>
                                                <div className="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="50">
                                                    50</div>
                                            </div>
                                            <div className="reccard_kbzhu1">
                                                <div className="reccard_kbzhu_name">Масло растительное, г.</div>
                                                <div className="reccard_kbzhu_dotted"></div>
                                                <div className="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="50">
                                                    50</div>
                                            </div>
                                            <div className="reccard_kbzhu1">
                                                <div className="reccard_kbzhu_name">Огурцы, г.</div>
                                                <div className="reccard_kbzhu_dotted"></div>
                                                <div className="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="70">
                                                    70</div>
                                            </div>
                                            <div className="reccard_kbzhu1">
                                                <div className="reccard_kbzhu_name">Помидоры свежие, г.</div>
                                                <div className="reccard_kbzhu_dotted"></div>
                                                <div className="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="70">
                                                    70</div>
                                            </div>
                                            <div className="reccard_kbzhu1">
                                                <div className="reccard_kbzhu_name">Зелень (любая по вкусу), г.</div>
                                                <div className="reccard_kbzhu_dotted"></div>
                                                <div className="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="20">
                                                    20</div>
                                            </div>
                                            <div className="reccard_kbzhu1">
                                                <div className="reccard_kbzhu_name">Оливки зеленые без косточки, г.</div>
                                                <div className="reccard_kbzhu_dotted"></div>
                                                <div className="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="50">
                                                    50</div>
                                            </div>
                                            <div className="reccard_kbzhu1">
                                                <div className="reccard_kbzhu_name">Масло оливковое, г.</div>
                                                <div className="reccard_kbzhu_dotted"></div>
                                                <div className="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="20">
                                                    20</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="reccard_main_info4">
                                        <div className="poshag_title">ШАГ 1 из 6</div>
                                        <div className="poshag_content">
                                            Сыр нарежьте крупными ломтиками толщиной не больше 1 см. </div>
                                        <div className="poshag_title">ШАГ 2 из 6</div>
                                        <div className="poshag_content">
                                            Яйцо слегка взбейте вилкой или венчиком. Просеянную муку соедините с перцем и
                                            орегано.
                                            Панировочные сухари насыпьте в отдельную миску. </div>
                                        <div className="poshag_title">ШАГ 3 из 6</div>
                                        <div className="poshag_content">
                                            Сыр обваляйте в муке и стряхните излишки. После опустите в яйцо и покройте
                                            сухарями. </div>
                                        <div className="poshag_title">ШАГ 4 из 6</div>
                                        <div className="poshag_content">
                                            В сковороде разогрейте масло на среднем огне. Обжаривайте халуми примерно по
                                            30–60 секунд с
                                            каждой стороны. </div>
                                        <div className="poshag_title">ШАГ 5 из 6</div>
                                        <div className="poshag_content">
                                            Готовый жареный сыр выложите на бумажные полотенца, чтобы убрать излишки жира.
                                        </div>
                                        <div className="poshag_title">ШАГ 6 из 6</div>
                                        <div className="poshag_content">
                                            В качестве гарнира подготовьте салат из свежих помидор, огурцов, зеленых оливок
                                            и зелени.
                                            Заправить оливковым маслом. Посолить, поперчить по вкусу. </div>
                                    </div>
                                </div>
                            </div>



                            <div className="reclist_wrap reclist_inda_reccard">
                                <div className="reclist_inda_reccard_title">РЕКОМЕНДАЦИИ</div>
                                <div className="rec_item">
                                    <div className="rec_item_plus"></div>
                                    {/* <a href="" onClick='addRecToWeek(152, "/recipes_photos/62e3ad1340146.webp", "Гуляш из курицы со сметаной и карри", 267, 30, 15, 7, 8, 1, "gulyash_iz_kuricy_so_smetanoy_i_karri"); return false;'><img src="assets/icons/plus_small.svg" title="Добавить рецепт в список" alt="Добавить рецепт в список"></img></a></div>  */}
                                    <div className="rec_item_plus"><a href="#"> <img src={image3} style={{ width: 100 + '%' }}></img></a></div>
                                    {<a href="#">
                                        <div className="rec_img">
                                        </div>
                                        <div className="rec_content">
                                            <div className="rec_name">Гуляш из курицы со сметаной и карри</div>
                                            <div className="rec_time_kkal">
                                                <div className="rec_time">
                                                    <img src={logo1}></img>
                                                    &nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>55</span>&nbsp;минут
                                                </div>
                                                <div className="rec_kkal">
                                                    <img src={logo3}></img>
                                                    &nbsp;&nbsp;<span style={{ fontWeight: 'bold' }}>267</span>&nbsp;ккал.&nbsp;на&nbsp;1&nbsp;порц.
                                                </div>
                                                <div className="rec_porc">
                                                    <img src={logo2}></img>
                                                    &nbsp;&nbsp;<span style={{ fontWeight: 'bold' }}>8</span>&nbsp;порций
                                                </div>
                                            </div>
                                        </div>
                                    </a>}
                                </div>
                                <div className="rec_item">
                                    <div className="rec_item_plus"></div>
                                    {/* <a href="" onClick='addRecToWeek(56, "/recipes_photos/62c30bce0f146.jpg", "Гриль-салат с курицей", 443, 36, 16, 41, 4, 1, "grily-salat_s_kuricey"); return false;'><img src="assets/icons/plus_small.svg" title="Добавить рецепт в список" alt="Добавить рецепт в список"></img></a> */}
                                    <div className="rec_item_plus"><a href="#"> <img src={image4} style={{ width: 100 + '%' }}></img></a></div>
                                    <a href="#">
                                        <div className="rec_img" >
                                        </div>
                                        <div className="rec_content">
                                            <div className="rec_name">Гриль-салат с курицей</div>
                                            <div className="rec_time_kkal">
                                                <div className="rec_time">
                                                    <img src={logo1}></img>
                                                    &nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>30</span>&nbsp;минут
                                                </div>
                                                <div className="rec_kkal">
                                                    <img src={logo3}></img>
                                                    &nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>443</span>&nbsp;ккал.&nbsp;на&nbsp;1&nbsp;порц.
                                                </div>
                                                <div className="rec_porc">
                                                    <img src={logo2}></img>
                                                    &nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>4</span>&nbsp;порции
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="rec_item">
                                    <div className="rec_item_plus"></div>
                                    {/* <a href="" onClick='addRecToWeek(19, "assets/images/6167ef33eec82.jpg", "Шашлык из индейки", 274, 38, 13, 1, 4, 1, "shashlyk_iz_indeyki"); return false;'><img src="assets/icons/plus_small.svg" title="Добавить рецепт в список" alt="Добавить рецепт в список"></img></a></div> */}
                                    <div className="rec_item_plus"><a href="#"> <img src={image4} style={{ width: 100 + '%' }}></img></a></div>
                                    <a href="#">
                                        <div className="rec_img" >
                                        </div>
                                        <div className="rec_content">
                                            <div className="rec_name">Шашлык из индейки</div>
                                            <div className="rec_time_kkal">
                                                <div className="rec_time">
                                                    <img src={logo1}></img>
                                                    &nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>30</span>&nbsp;минут
                                                </div>
                                                <div className="rec_kkal">
                                                    <img src={logo3}></img>
                                                    &nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>274</span>&nbsp;ккал.&nbsp;на&nbsp;1&nbsp;порц.
                                                </div>
                                                <div className="rec_porc">
                                                    <img src={logo2}></img>
                                                    &nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>4</span>&nbsp;порции
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="rec_item">
                                    <div className="rec_item_plus"></div>
                                    {/*<a href="" onClick='addRecToWeek(141, "assets/images/62e2b373ae9f5.webp", "Филе минтая, запеченное в панировочных сухарях", 438, 50, 10, 38, 4, 1, "file_mintaya_zapechennoe_v_panirovochnyh_suharyah"); return false;'><img src="assets/icons/plus_small.svg" title="Добавить рецепт в список" alt="Добавить рецепт в список"></img></a></div> */}
                                    <div className="rec_item_plus"><a href="#"> <img src={image5} style={{ width: 100 + '%' }}></img></a></div>
                                    <a href='#'>
                                        <div className="rec_img" >
                                        </div>
                                        <div className="rec_content">
                                            <div className="rec_name">Филе минтая, запеченное в панировочных сухарях
                                            </div>
                                            <div className="rec_time_kkal">
                                                <div className="rec_time">
                                                    <img src={logo1}></img>
                                                    &nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>40</span>&nbsp;минут
                                                </div>
                                                <div className="rec_kkal">
                                                    <img src={logo3}></img>
                                                    &nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>438</span>&nbsp;ккал.&nbsp;на&nbsp;1&nbsp;порц.
                                                </div>
                                                <div className="rec_porc">
                                                    <img src={logo2}></img>
                                                    &nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>4</span>&nbsp;порции
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
};

export default Recipe;







