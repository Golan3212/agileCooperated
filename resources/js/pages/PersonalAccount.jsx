import React, { useState } from 'react';
import "../../css/account.css";
import MenuAccount from "../components/MenuAccount";

export default function PersonalAccount() {

    const user = {
        "login": "user123",
        "name": "Иван",
        "gender": "мужской",
        "age": "30",
        "email": "1234@mail.ru",
        "phone": "8-999-000-00-00",
        "weight": "110",
        "height": "180",
        "quotient": "1,2 (низкий) - малоподвижный образ жизни," +
            "отсутствие занятий спортом,\n" +
            "меньше 10 тыс. шагов в день",
        "target": "похудение",
    }

    return (
        <div className="account">
            <div className="account__menu">
                <MenuAccount></MenuAccount>
            </div>
            <main className="account__box">
                <section className="account__profile">
                    <h2>Персональные данные</h2>
                    <div className="account__inner">
                        <p>Логин</p>
                        <span>{ user.login }</span>
                    </div>
                    <div className="account__inner">
                        <p>Имя</p>
                        <span>{ user.name }</span>
                    </div>
                    <div className="account__inner">
                        <p>Пол</p>
                        <span>{ user.gender }</span>
                    </div>
                    <div className="account__inner">
                        <p>Возраст</p>
                        <span>{ user.age }</span>
                    </div>
                    <div className="account__inner">
                        <p>Телефон</p>
                        <span>{ user.phone }</span>
                    </div>
                    <div className="account__inner">
                        <p>Email</p>
                        <span>{ user.email }</span>
                    </div>
                    <button type="submit" className="account__btn">
                        Изменить
                    </button>
                </section>
                <section className="account__profile">
                    <h2>Мои параметры</h2>
                    <div className="account__inner">
                        <p>Вес (в кг)</p>
                        <span>{ user.weight }</span>
                    </div>
                    <div className="account__inner">
                        <p>Рост (в см)</p>
                        <span>{ user.height }</span>
                    </div>
                    <div className="account__inner">
                        <p>Коэфициент активности</p>
                        <span>{ user.quotient }</span>
                    </div>
                    <div className="account__inner">
                        <p>Цель</p>
                        <span>{ user.target }</span>
                    </div>
                    <button type="submit" className="account__btn">
                        Изменить
                    </button>
                </section>
            </main>

        </div>
    )





}
