import React, { useState } from 'react';
import '../../css/form.css';
import { useLocalStorage } from '../formulas/saveLocalStorage';
import { Link } from "react-router-dom";

export default function Form() {

    const [gender, setGender] = useLocalStorage("gender", "");
    const [weight, setWeight] = useLocalStorage("weight", "");
    const [height, setHeight] = useLocalStorage("height", "");
    const [age, setAge] = useLocalStorage("age", "");
    const [quotient, setQuotient] = useLocalStorage("quotient", 0);
    const [target, setTarget] = useLocalStorage("target", 0);

    return (
        <div>
            <form className="box">
                <h1 className="form__heading">КАЛЬКУЛЯТОР НОРМЫ КАЛОРИЙ И БЖУ</h1>
                <div className="form">
                    <h4>Пол</h4>
                    <div className="form__inner">
                        <input
                            id="male"
                            type="radio"
                            name="gender"
                            checked={gender === 'male'}
                            onChange={(e) => setGender('male')}
                        />
                        <label htmlFor="male">Мужской</label>
                    </div>
                    <div className="form__inner">
                        <input
                            id="female"
                            type="radio"
                            name="gender"
                            checked={gender === 'female'}
                            onChange={(e) => setGender('female')}
                        />
                        <label htmlFor="female">Женский</label>
                    </div>
                </div>
                <div className="form form__wrap">
                    <label htmlFor="weight">Вес</label>
                    <input
                        className="form__input"
                        id="weight"
                        type="text"
                        name="weight"
                        value={weight}
                        placeholder="Введите ваш вес"
                        onChange={(e) => setWeight(e.target.value)}
                    />
                    <label htmlFor="height">Рост</label>
                    <input
                        className="form__input"
                        id="height"
                        type="text"
                        name="height"
                        value={height}
                        placeholder="Введите ваш рост"
                        onChange={(e) => setHeight(e.target.value)}
                    />
                    <label htmlFor="age">Возраст</label>
                    <input
                        className="form__input"
                        id="age"
                        type="text"
                        name="age"
                        value={age}
                        placeholder="Введите ваш возраст"
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div className="form">
                    <h4>Коэффициент активности</h4>
                    <div className="form__inner">
                        <input
                            id="quotientLow"
                            type="radio"
                            name="quotient"
                            checked={quotient === 1.2}
                            onChange={(e) => setQuotient(1.2)}
                        />
                        <label htmlFor="quotientLow">
                            1,2 (низкий) - малоподвижный образ жизни,
                            отсутствие занятий спортом,
                            меньше 10 тыс. шагов в день
                        </label>
                    </div>
                    <div className="form__inner">
                        <input
                            id="quotientSmall"
                            type="radio"
                            name="quotient"
                            checked={quotient === 1.38}
                            onChange={(e) => setQuotient(1.38)}
                        />
                        <label htmlFor="quotientSmall">
                            1,38 (малый) - работа, связанная с ходьбой/стоянием,
                            не очень интенсивные тренировки 1-3 раза в неделю
                            (зарядка, йога, пилатес и пр.)
                        </label>
                    </div>
                    <div className="form__inner">
                        <input
                            id="quotientMiddle"
                            type="radio"
                            name="quotient"
                            checked={quotient === 1.55}
                            onChange={(e) => setQuotient(1.55)}
                        />
                        <label htmlFor="quotientMiddle">
                            1,55 (средний) - интенсивные занятия спортом
                            стабильно 1-3 раза в неделю, активный образ жизни
                        </label>
                    </div>
                    <div className="form__inner">
                        <input
                            id="quotientHigh"
                            type="radio"
                            name="quotient"
                            checked={quotient === 1.73}
                            onChange={(e) => setQuotient(1.73)}
                        />
                        <label htmlFor="quotientHigh">
                            1,73 (высокий) - занятия спортом ежедневно
                        </label>
                    </div>
                    <div className="form__inner">
                        <input
                            id="quotientHighest"
                            type="radio"
                            name="quotient"
                            checked={quotient === 2.2}
                            onChange={(e) => setQuotient(2.2)}
                        />
                        <label htmlFor="quotientHighest">
                            2,2 (очень высокий) - тяжелая физическая работа,
                            занятия спортом 2 раза в день
                        </label>
                    </div>
                </div>
                <div className="form">
                    <h4>Цель</h4>
                    <div className="form__inner">
                        <input
                            id="weightLose"
                            type="radio"
                            name="target"
                            checked={target === 0.9}
                            onChange={(e) => setTarget(0.9)}
                        />
                        <label htmlFor="weightLose">Похудение</label>
                    </div>
                    <div className="form__inner">
                        <input
                            id="weightSave"
                            type="radio"
                            name="target"
                            checked={target === 1}
                            onChange={(e) => setTarget(1)}
                        />
                        <label htmlFor="weightSave">Поддержание веса</label>
                    </div>
                    <div className="form__inner">
                        <input
                            id="weightAdd"
                            type="radio"
                            name="target"
                            checked={target === 1.1}
                            onChange={(e) => setTarget(1.1)}
                        />
                        <label htmlFor="weightAdd">Набор массы</label>
                    </div>
                </div>

                <Link to="/advice"
                      state={{
                          gender: gender,
                          weight: weight,
                          height: height,
                          age: age,
                          quotient: quotient,
                          target: target
                      }}
                      className="form__button">
                        Рассчитать
                </Link>
            </form>
        </div>
    );
}









