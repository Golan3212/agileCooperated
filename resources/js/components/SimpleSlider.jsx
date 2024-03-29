import React, { Component } from "react";
import Slider from "react-slick";
import '../../css/home.css';



export default class SimpleSlider extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 8000,
            cssEase: "linear"
        };


        const slidesData = [
            {
                image: "/assets/home/fon1.jpg",
                title: "Добро пожаловать",
                description: "Мы поможем вам создать здоровое, сильное и красивое тело  с помощью вкусных, полезных и разнообразных рецептов",
                isDarkBg: true
            },
            {
                image: "/assets/home/fon2.jpg",
                title: "Что мы предлагаем",
                description: "На основании ваших параметров мы рассчитаем необходимое количество калорий и создадим вам меню на неделю с подробными рецептами на каждый день",
                isDarkBg: false
            },
            {
                image: "/assets/home/fon3.jpg",
                title: "Всего в два клика",
                description: "Вам нужно зарегистрироваться на нашем сайте, заполнить анкету с вашими данными и  вы получите доступ к вашему меню и ко всем рецептам в целом",
                isDarkBg: true
            }
        ]


        return (
            <div style={{ width: 100 + '%' }}>
                <div className="mobile">
                    <h2>Добро пожаловать</h2>
                    <p>
                        "Мы поможем вам создать здоровое,
                        сильное и красивое тело  с помощью вкусных,
                        полезных и разнообразных рецептов"
                    </p>
                    <h3>Что мы предлагаем</h3>
                    <p>
                        На основании ваших параметров мы рассчитаем необходимое
                        количество калорий и создадим вам меню на неделю с подробными рецептами
                        на каждый день
                    </p>
                    <h3>Всего в два клика</h3>
                    <p>
                        Вам нужно зарегистрироваться на нашем сайте, заполнить анкету с вашими данными и  вы получите доступ к вашему меню и ко всем рецептам в целом
                    </p>
                </div>
                <Slider {...settings}>
                    {slidesData.map(d => (
                        <div>
                            <div className="slide-block " style={{ backgroundImage: `url(${d.image})` }}>
                                <h3 className={"slide-text " + (d.isDarkBg ? '' : 'slide-text-blacк')}>{d.title}</h3>
                                <h2 className={"slide-desc " + (d.isDarkBg ? '' : 'slide-desc-blacк')}>{d.description}</h2>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}



