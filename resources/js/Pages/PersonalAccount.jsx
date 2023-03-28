import React, { useState } from 'react';
import "../../css/account.css";
import MenuAccount from "../components/MenuAccount";
import {Link} from "react-router-dom";

export default function PersonalAccount({user}) {

    const gender = (value) => {
        if (value === 'male') {
            return "мужской";
        } else if (value === 'female' ) {
            return "Женский";
        }
    }

    const targetNum = (value) => {
        if (value === 1) {
            return "Похудение";
        } else if (value === 2) {
            return "Поддержание веса";
        } else if (value === 3) {
            return "Набор массы";
        }
    }
    const quotientNum = (value) => {
        if (value === 1) {
            return "1.2 - малоподвижиный образ жизни (тренировок мало или они отсутствуют)";
        } else if (value === 2) {
            return "1.38 - низкая активность (легкие тренировки 1-3 раза в неделю)";
        } else if (value === 3) {
            return "1.55 - умеренная активность (физическая работа средней тяжести или регулярные тренировки 3-5 дней в неделю)";
        } else if (value === 4) {
            return "1.73 - очень активный образ жизни (физическая работа полный день или интенсивные тренировки 6-7 раз в неделю)";
        } else if (value === 5) {
            return "2.2 - предельно активный образ жизни (физическая тяжелая физическая работа и интенсивные тренировки/занятия спортом.";
        }
    }

    return (
        <div className="account">

            <main className="account__box">
                {user.map(item => {
                    return<section className="account__profile">
                        <h2>Персональные данные</h2>
                        <div className="account__inner">
                            <p>Логин</p>
                            <span>{item.username}</span>
                        </div>

                        <div className="account__inner">
                            <p>Имя</p>
                            <span>{item.name}</span>
                        </div>
                        <div className="account__inner">
                            <p>Пол</p>
                            <span>{gender(item.profile.gender )}</span>
                        </div>
                        <div className="account__inner">
                            <p>Возраст</p>
                            <span>{item.profile.age}</span>
                        </div>
                        <div className="account__inner">
                            <p>Телефон</p>
                            <span>{item.phone}</span>
                        </div>
                        <div className="account__inner">
                            <p>Email</p>
                            <span>{item.email}</span>
                        </div>
                        {/*ЗАКОММЕНТИРОВАНО НА УРОК 27.03.*/}
                        {/*<button type="submit" className="account__btn">*/}
                        {/*    Изменить*/}
                        {/*</button>*/}
                        {/*КОНЕЦ КОММЕНТИРОВАНИЯ НА УРОК 27.03*/}
                    </section>
                })}
                {user.map(item => {
                    return <section className="account__profile">
                        <h2>Мои параметры</h2>
                        <div className="account__inner">
                            <p>Вес (в кг)</p>
                            <span>{item.profile.weight }</span>
                        </div>
                        <div className="account__inner">
                            <p>Рост (в см)</p>
                            <span>{item.profile.height }</span>
                        </div>
                        <div className="account__inner">
                            <p>Коэфициент активности</p>
                            <span>{quotientNum(item.profile.quotient )}</span>
                        </div>
                        <div className="account__inner">
                            <p>Цель</p>
                            <span>{targetNum(item.profile.target )}</span>
                        </div>
                        <button type="submit" className="account__btn"><a href={"/form"}>Изменить</a>
                        </button>
                    </section>
                })}
            </main>
            <div className="account__menu">
                <nuv>
                    <ul>
                        <li>
                            <a href="/account">Мой профиль</a>
                        </li>
                        <li>
                            <a href="/advice">Мои рекомендации</a>
                        </li>
                            <li>
                                {user.map(item => {
                                return<a href={"/menu/builder/" + item.menuWeek_id}>Мое меню на неделю</a>
                                })}
                            </li>

                    </ul>

                </nuv>

            </div>

        </div>
    );





}
