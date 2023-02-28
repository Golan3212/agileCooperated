<!DOCTYPE html>
<html lang="en">
<link rel="icon" type="image/svg+xml" href="logo_small2.svg">
<title>Рецепт</title>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    @viteReactRefresh
    @vite('resources/css/recipe.css')

    <link rel="stylesheet" href="{{ URL::asset('resources/css/recipe.css') }}" />



<body>

    <div class="section section_grey section_submenu1 hidden nomobile">
        <div class="container">

        </div>
    </div>


    <div class="section section_grey nomobile">
        <div class="container">
            <div class="main_menu">
                <div class="main_menu_items" style="justify-content: flex-start;">

                    <div class="main_menu_item" style="margin-right:40px;">
                        <a href="#">Главная</a>
                    </div>
                    <div class="main_menu_item" style="margin-right:40px;">
                        <a href="#">Конструктор меню</a>
                    </div>
                    <div class="main_menu_item">
                        <a href="#">Рецепты</a>
                    </div>
                </div>
                <div class="main_menu_user">
                    <div class="main_menu_ico main_menu_ico_login">
                        <img src="assets/icons/avatar_login.svg">

                    </div>
                </div>
            </div>
        </div>
    </div>




    </div>
    <div class="section bg_hr_green">
        <div class="container">
            <div class="title_h1">
                <h1 class="title_main bg_white">Рецепт № 1</h1>
            </div>
        </div>
    </div>
    <div class="section section_field_small"></div>
    <div class="section">
        <div class="container">
            <div class="title_h3 h3_href">
                <a href="#"> Все рецепты </a>

            </div>
        </div>
    </div>

    <div class="section">
        <div class="container">
            <div class="reclist_main">


                <div class="reccard_wrap">
                    <div class="reccard_content">
                        <div class="reccard_main_title">Жареный халуми в хрустящей панировке с салатом</div>
                        <div class="reccard_main_photo_wrap" style="width:100%">
                            <div class="rec_item_plus_txt">
                                <div class="reccard_main_add">+ добавить рецепт в меню на неделю</div>
                            </div>
                            <img class="reccard_main_photo" src="assets/images/63fce8843e5d2.jpg" style="width:100%">
                        </div>
                        <div class="reccard_main_info">
                            <div class="reccard_main_info1">

                                <div class="reccard_main_time">
                                    <div class="reccard_main_time1">
                                        <img src="assets/icons/ico_time.svg" width="25" height="25">&nbsp;&nbsp;15&nbsp;минут
                                    </div>
                                    <div class="reccard_main_time2">
                                        <img src="assets/icons/ico_portions.svg" width="25" height="25">&nbsp;&nbsp;Порций:&nbsp;&nbsp;<span class="portions_minus">&mdash;</span><span id="portions">3</span><span class="portions_plus">+</span>
                                    </div>

                                </div>
                                <div class="reccard_main_kbzhu">
                                    <div class="reccard_kbzhu_title"><strong>Пищевая ценность порции</strong></div>
                                    <div class="reccard_kbzhu1">
                                        <div class="reccard_kbzhu_name">ККалории</div>
                                        <div class="reccard_kbzhu_dotted"></div>
                                        <div class="reccard_kbzhu_values">632</div>
                                    </div>
                                    <div class="reccard_kbzhu1">
                                        <div class="reccard_kbzhu_name">Белки, г.</div>
                                        <div class="reccard_kbzhu_dotted"></div>
                                        <div class="reccard_kbzhu_values">25</div>
                                    </div>
                                    <div class="reccard_kbzhu1">
                                        <div class="reccard_kbzhu_name">Жиры, г.</div>
                                        <div class="reccard_kbzhu_dotted"></div>
                                        <div class="reccard_kbzhu_values">50</div>
                                    </div>
                                    <div class="reccard_kbzhu1">
                                        <div class="reccard_kbzhu_name">Углеводы, г.</div>
                                        <div class="reccard_kbzhu_dotted"></div>
                                        <div class="reccard_kbzhu_values">22</div>
                                    </div>
                                </div>
                            </div>
                            <div class="reccard_main_info3">
                                <div class="ingredients_title">Ингредиенты</div>
                                <div class="ingredients_content">
                                    <div class="reccard_kbzhu1">
                                        <div class="reccard_kbzhu_name">Сыр Халуми, г.</div>
                                        <div class="reccard_kbzhu_dotted"></div>
                                        <div class="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="250">
                                            250</div>
                                    </div>
                                    <div class="reccard_kbzhu1">
                                        <div class="reccard_kbzhu_name">Яйца, г.</div>
                                        <div class="reccard_kbzhu_dotted"></div>
                                        <div class="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="50">
                                            50</div>
                                    </div>
                                    <div class="reccard_kbzhu1">
                                        <div class="reccard_kbzhu_name">Мука пшеничная в/с, г.</div>
                                        <div class="reccard_kbzhu_dotted"></div>
                                        <div class="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="20">
                                            20</div>
                                    </div>
                                    <div class="reccard_kbzhu1">
                                        <div class="reccard_kbzhu_name">Орегано сушеный, г.</div>
                                        <div class="reccard_kbzhu_dotted"></div>
                                        <div class="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="10">
                                            10</div>
                                    </div>
                                    <div class="reccard_kbzhu1">
                                        <div class="reccard_kbzhu_name">Сухари панировочные, г.</div>
                                        <div class="reccard_kbzhu_dotted"></div>
                                        <div class="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="50">
                                            50</div>
                                    </div>
                                    <div class="reccard_kbzhu1">
                                        <div class="reccard_kbzhu_name">Масло растительное, г.</div>
                                        <div class="reccard_kbzhu_dotted"></div>
                                        <div class="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="50">
                                            50</div>
                                    </div>
                                    <div class="reccard_kbzhu1">
                                        <div class="reccard_kbzhu_name">Огурцы, г.</div>
                                        <div class="reccard_kbzhu_dotted"></div>
                                        <div class="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="70">
                                            70</div>
                                    </div>
                                    <div class="reccard_kbzhu1">
                                        <div class="reccard_kbzhu_name">Помидоры свежие, г.</div>
                                        <div class="reccard_kbzhu_dotted"></div>
                                        <div class="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="70">
                                            70</div>
                                    </div>
                                    <div class="reccard_kbzhu1">
                                        <div class="reccard_kbzhu_name">Зелень (любая по вкусу), г.</div>
                                        <div class="reccard_kbzhu_dotted"></div>
                                        <div class="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="20">
                                            20</div>
                                    </div>
                                    <div class="reccard_kbzhu1">
                                        <div class="reccard_kbzhu_name">Оливки зеленые без косточки, г.</div>
                                        <div class="reccard_kbzhu_dotted"></div>
                                        <div class="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="50">
                                            50</div>
                                    </div>
                                    <div class="reccard_kbzhu1">
                                        <div class="reccard_kbzhu_name">Масло оливковое, г.</div>
                                        <div class="reccard_kbzhu_dotted"></div>
                                        <div class="reccard_kbzhu_values reccard_ingr_values" data-ingr-value="20">
                                            20</div>
                                    </div>
                                </div>
                            </div>

                            <div class="reccard_main_info4">
                                <div class="poshag_title">ШАГ 1 из 6</div>
                                <div class="poshag_content">
                                    Сыр нарежьте крупными ломтиками толщиной не больше 1 см. </div>
                                <div class="poshag_title">ШАГ 2 из 6</div>
                                <div class="poshag_content">
                                    Яйцо слегка взбейте вилкой или венчиком. Просеянную муку соедините с перцем и
                                    орегано.
                                    Панировочные сухари насыпьте в отдельную миску. </div>
                                <div class="poshag_title">ШАГ 3 из 6</div>
                                <div class="poshag_content">
                                    Сыр обваляйте в муке и стряхните излишки. После опустите в яйцо и покройте
                                    сухарями. </div>
                                <div class="poshag_title">ШАГ 4 из 6</div>
                                <div class="poshag_content">
                                    В сковороде разогрейте масло на среднем огне. Обжаривайте халуми примерно по
                                    30–60 секунд с
                                    каждой стороны. </div>
                                <div class="poshag_title">ШАГ 5 из 6</div>
                                <div class="poshag_content">
                                    Готовый жареный сыр выложите на бумажные полотенца, чтобы убрать излишки жира.
                                </div>
                                <div class="poshag_title">ШАГ 6 из 6</div>
                                <div class="poshag_content">
                                    В качестве гарнира подготовьте салат из свежих помидор, огурцов, зеленых оливок
                                    и зелени.
                                    Заправить оливковым маслом. Посолить, поперчить по вкусу. </div>
                            </div>
                        </div>
                    </div>



                    <div class="reclist_wrap reclist_inda_reccard">
                        <div class="reclist_inda_reccard_title">РЕКОМЕНДАЦИИ</div>
                        <div class="rec_item">
                            <div class="rec_item_plus"><a href="" onclick='addRecToWeek(152, "/recipes_photos/62e3ad1340146.webp", "Гуляш из курицы со сметаной и карри", 267, 30, 15, 7, 8, 1, "gulyash_iz_kuricy_so_smetanoy_i_karri"); return false;'><img src="assets/icons/plus_small.svg" title="Добавить рецепт в список" alt="Добавить рецепт в список"></a></div>
                            <a href="/recipes/gulyash_iz_kuricy_so_smetanoy_i_karri">
                                <div class="rec_img" style="background: url(assets/images/62e3ad1340146.webp) no-repeat center center; background-size: cover;">
                                </div>
                                <div class="rec_content">
                                    <div class="rec_name">Гуляш из курицы со сметаной и карри</div>
                                    <div class="rec_time_kkal">
                                        <div class="rec_time">
                                            <img src="assets/icons/ico_time.svg">&nbsp;&nbsp;<span style="font-weight:bold;">55</span>&nbsp;минут
                                        </div>
                                        <div class="rec_kkal">
                                            <img src="assets/icons/ico_portion.svg">&nbsp;&nbsp;<span style="font-weight:bold;">267</span>&nbsp;ккал.&nbsp;на&nbsp;1&nbsp;порц.
                                        </div>
                                        <div class="rec_porc">
                                            <img src="assets/icons/ico_portions.svg">&nbsp;&nbsp;<span style="font-weight:bold;">8</span>&nbsp;порций
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="rec_item">
                            <div class="rec_item_plus"><a href="" onclick='addRecToWeek(56, "/recipes_photos/62c30bce0f146.jpg", "Гриль-салат с курицей", 443, 36, 16, 41, 4, 1, "grily-salat_s_kuricey"); return false;'><img src="assets/icons/plus_small.svg" title="Добавить рецепт в список" alt="Добавить рецепт в список"></a></div>
                            <a href="/recipes/grily-salat_s_kuricey">
                                <div class="rec_img" style="background: url(assets/images/62c30bce0f146.jpg) no-repeat center center; background-size: cover;">
                                </div>
                                <div class="rec_content">
                                    <div class="rec_name">Гриль-салат с курицей</div>
                                    <div class="rec_time_kkal">
                                        <div class="rec_time">
                                            <img src="assets/icons/ico_time.svg">&nbsp;&nbsp;<span style="font-weight:bold;">30</span>&nbsp;минут
                                        </div>
                                        <div class="rec_kkal">
                                            <img src="assets/icons/ico_portion.svg">&nbsp;&nbsp;<span style="font-weight:bold;">443</span>&nbsp;ккал.&nbsp;на&nbsp;1&nbsp;порц.
                                        </div>
                                        <div class="rec_porc">
                                            <img src="assets/icons/ico_portions.svg">&nbsp;&nbsp;<span style="font-weight:bold;">4</span>&nbsp;порции
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="rec_item">
                            <div class="rec_item_plus"><a href="" onclick='addRecToWeek(19, "assets/images/6167ef33eec82.jpg", "Шашлык из индейки", 274, 38, 13, 1, 4, 1, "shashlyk_iz_indeyki"); return false;'><img src="assets/icons/plus_small.svg" title="Добавить рецепт в список" alt="Добавить рецепт в список"></a></div>
                            <a href="/recipes/shashlyk_iz_indeyki">
                                <div class="rec_img" style="background: url(assets/images/6167ef33eec82.jpg) no-repeat center center; background-size: cover;">
                                </div>
                                <div class="rec_content">
                                    <div class="rec_name">Шашлык из индейки</div>
                                    <div class="rec_time_kkal">
                                        <div class="rec_time">
                                            <img src="assets/icons/ico_time.svg">&nbsp;&nbsp;<span style="font-weight:bold;">30</span>&nbsp;минут
                                        </div>
                                        <div class="rec_kkal">
                                            <img src="assets/icons/ico_portion.svg">&nbsp;&nbsp;<span style="font-weight:bold;">274</span>&nbsp;ккал.&nbsp;на&nbsp;1&nbsp;порц.
                                        </div>
                                        <div class="rec_porc">
                                            <img src="assets/icons/ico_portions.svg">&nbsp;&nbsp;<span style="font-weight:bold;">4</span>&nbsp;порции
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="rec_item">
                            <div class="rec_item_plus"><a href="" onclick='addRecToWeek(141, "assets/images/62e2b373ae9f5.webp", "Филе минтая, запеченное в панировочных сухарях", 438, 50, 10, 38, 4, 1, "file_mintaya_zapechennoe_v_panirovochnyh_suharyah"); return false;'><img src="assets/icons/plus_small.svg" title="Добавить рецепт в список" alt="Добавить рецепт в список"></a></div>
                            <a href="/recipes/file_mintaya_zapechennoe_v_panirovochnyh_suharyah">
                                <div class="rec_img" style="background: url(assets/images/62e2b373ae9f5.webp) no-repeat center center; background-size: cover;">
                                </div>
                                <div class="rec_content">
                                    <div class="rec_name">Филе минтая, запеченное в панировочных сухарях
                                    </div>
                                    <div class="rec_time_kkal">
                                        <div class="rec_time">
                                            <img src="assets/icons/ico_time.svg">&nbsp;&nbsp;<span style="font-weight:bold;">40</span>&nbsp;минут
                                        </div>
                                        <div class="rec_kkal">
                                            <img src="assets/icons/ico_portion.svg">&nbsp;&nbsp;<span style="font-weight:bold;">438</span>&nbsp;ккал.&nbsp;на&nbsp;1&nbsp;порц.
                                        </div>
                                        <div class="rec_porc">
                                            <img src="assets/icons/ico_portions.svg">&nbsp;&nbsp;<span style="font-weight:bold;">4</span>&nbsp;порции
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

    <div class="section section_footer">
        <div class="container">
            <div class="footer">
                <div class="footer_menu">

                    <div class="footer_menu_item"><a href="/">Главная</a></div>
                    <div class="footer_menu_item"><a href="/constr.php">Конструктор меню</a></div>
                    <div class="footer_menu_item"><a href="/reclist.php">Рецепты</a></div>
                </div>

            </div>
        </div>
    </div>




</body>

</head>





</html>