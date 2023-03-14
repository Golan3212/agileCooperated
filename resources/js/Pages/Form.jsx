import React, {useState} from 'react';
import '../../css/form.css';
import { useLocalStorage } from '../formulas/saveLocalStorage';
import { Inertia } from '@inertiajs/inertia';

import female from "../../../public/assets/form/9517cc177b7e3dd42d02c9c8c63af3f5.jpg";
import male from "../../../public/assets/form/1c8bfd7f0bf260a5d131f9ed96f2475e.jpg";
import quotientLow from "../../../public/assets/form/1.jpg";
import quotientSmall from "../../../public/assets/form/2.jpg";
import quotientMiddle from "../../../public/assets/form/3.jpg";
import quotientHigh from "../../../public/assets/form/4.jpg";
import quotientHighest from "../../../public/assets/form/5.jpg";
import weightLose from "../../../public/assets/form/7.jpg";
import weightSave from "../../../public/assets/form/6.jpg";
import weightAdd from "../../../public/assets/form/8.jpg";

export default function Form() {

    const [gender, setGender] = useLocalStorage("gender", "");
    const [weight, setWeight] = useLocalStorage("weight", "");
    const [height, setHeight] = useLocalStorage("height", "");
    const [age, setAge] = useLocalStorage("age", "");
    const [quotient, setQuotient] = useLocalStorage("quotient", 0);
    const [target, setTarget] = useLocalStorage("target", 0);

    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    const [step4, setStep4] = useState(false);


    function handleSubmit(e){
        e.preventDefault()
        const values = [
            {
                'gender': gender,
                'weight': weight,
                'height': height,
                'age': age,
                'quotient': quotient,
                'target': target,
            }
        ]
        Inertia.post('/form', values)
    }

    const handleClick = e => {
        e.preventDefault();

        if (e.target.id === "step1") {
            setStep1(false);
            setStep2(true);
        }
        if (e.target.id === "step2") {
            setStep2(false);
            setStep3(true);
        }
        if (e.target.id === "step3") {
            setStep3(false);
            setStep4(true);
        }
    }


    return (
        <div>
            <form className="box">
                <h1 className="box__heading">Калькулятор БЖУ</h1>
                {step1 &&
                    <div className="form">
                        <h4>Выберите ваш пол:</h4>
                        <div className="gender">
                            <div className="gender__item">
                                <label className="gender__label" htmlFor="female">
                                    <input
                                        id="female"
                                        type="radio"
                                        name="gender"
                                        checked={gender === 'female'}
                                        onChange={(e) => setGender('female')}
                                    />
                                    <span className="gender__inner">
                                    <img className="gender__img" src={female} alt="female"></img>
                                    <span className="gender__name">Женский</span>
                                </span>
                                </label>
                            </div>
                            <div className="gender__item">
                                <label className="gender__label" htmlFor="male">
                                    <input
                                        id="male"
                                        type="radio"
                                        name="gender"
                                        checked={gender === 'male'}
                                        onChange={(e) => setGender('male')}
                                    />
                                    <span className="gender__inner">
                                    <img className="gender__img" src={male} alt="male"></img>
                                    <span className="gender__name">Мужской</span>
                                </span>
                                </label>
                            </div>
                        </div>
                        <button id="step1" className="form__btn" onClick={handleClick}>Продолжить</button>
                    </div>
                }
                {step2 &&
                    <div className="form">
                        <h4>Выберите уровень ежедневной активности:</h4>
                        <div className="action">
                            <div className="action__item">
                                <label className="action__label" htmlFor="quotientLow">
                                    <input
                                        id="quotientLow"
                                        type="radio"
                                        name="quotient"
                                        checked={quotient === 1.2}
                                        onChange={(e) => setQuotient(1.2)}
                                    />
                                    <span className="action__inner">
                                    <img src={quotientLow} alt=""/>
                                    <span className="action__text">
                                        <span>1.2</span>
                                        <p>Для малоподвижных людей, тренировок мало
                                            или они отсутствуют
                                        </p>
                                    </span>
                                </span>
                                </label>
                            </div>
                            <div className="action__item">
                                <label className="action__label" htmlFor="quotientSmall">
                                    <input
                                        id="quotientSmall"
                                        type="radio"
                                        name="quotient"
                                        checked={quotient === 1.38}
                                        onChange={(e) => setQuotient(1.38)}
                                    />
                                    <span className="action__inner">
                                    <img src={quotientSmall} alt=""/>
                                    <span className="action__text">
                                        <span>1.38</span>
                                        <p>
                                            Для людей с низкой активностью,
                                            легкие тренировки 1-3 раза в неделю или
                                            в виде эквивалента другой активности.
                                        </p>
                                    </span>
                                </span>
                                </label>
                            </div>
                            <div className="action__item">
                                <label className="action__label" htmlFor="quotientMiddle">
                                    <input
                                        id="quotientMiddle"
                                        type="radio"
                                        name="quotient"
                                        checked={quotient === 1.55}
                                        onChange={(e) => setQuotient(1.55)}
                                    />
                                    <span className="action__inner">
                                    <img src={quotientMiddle} alt=""/>
                                    <span className="action__text">
                                        <span>1.55</span>
                                        <p>
                                            Для умеренно активных людей:
                                            физическая работа средней тяжести или
                                            регулярные тренировки 3-5 дней в неделю.
                                        </p>
                                    </span>
                                </span>
                                </label>
                            </div>
                            <div className="action__item">
                                <label className="action__label" htmlFor="quotientHigh">
                                    <input
                                        id="quotientHigh"
                                        type="radio"
                                        name="quotient"
                                        checked={quotient === 1.73}
                                        onChange={(e) => setQuotient(1.73)}
                                    />
                                    <span className="action__inner">
                                    <img src={quotientHigh} alt=""/>
                                    <span className="action__text">
                                        <span>1.73</span>
                                        <p>
                                           Для очень активных людей:
                                            физическая работа полный день или
                                            интенсивные тренировки 6-7 раз в неделю.
                                        </p>
                                    </span>
                                </span>
                                </label>
                            </div>
                            <div className="action__item">
                                <label className="action__label" htmlFor="quotientHighest">
                                    <input
                                        id="quotientHighest"
                                        type="radio"
                                        name="quotient"
                                        checked={quotient === 2.2}
                                        onChange={(e) => setQuotient(2.2)}
                                    />
                                    <span className="action__inner">
                                    <img src={quotientHighest} alt=""/>
                                    <span className="action__text">
                                        <span>2.2</span>
                                        <p>
                                            Для предельно активных людей:
                                            тяжелая физическая работа и интенсивные
                                            тренировки/занятия спортом.
                                        </p>
                                    </span>
                                </span>
                                </label>
                            </div>
                        </div>
                        <button id="step2" className="form__btn" onClick={handleClick}>Продолжить</button>
                    </div>
                }
                {step3 &&
                    <div className="form">
                        <h4>Внесите свои данные:</h4>
                        <div className="parameters">
                            <label htmlFor="weight">Вес</label>
                            <input
                                className="parameters__input"
                                id="weight"
                                type="text"
                                name="weight"
                                value={weight}
                                placeholder="Введите ваш вес (кг)"
                                onChange={(e) => setWeight(e.target.value)}
                            />
                            <label htmlFor="height">Рост</label>
                            <input
                                className="parameters__input"
                                id="height"
                                type="text"
                                name="height"
                                value={height}
                                placeholder="Введите ваш рост (см)"
                                onChange={(e) => setHeight(e.target.value)}
                            />
                            <label htmlFor="age">Возраст</label>
                            <input
                                className="parameters__input"
                                id="age"
                                type="text"
                                name="age"
                                value={age}
                                placeholder="Введите ваш возраст (лет)"
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <button id="step3" className="form__btn" onClick={handleClick}>Продолжить</button>
                    </div>
                }
                {step4 &&
                    <div className="form">
                        <h4>Выберите цель:</h4>
                        <div className="target">
                            <div className="target__item">
                                <label className="target__label" htmlFor="weightLose">
                                    <input
                                        id="weightLose"
                                        type="radio"
                                        name="target"
                                        checked={target === 0.9}
                                        onChange={(e) => setTarget(0.9)}
                                    />
                                    <span className="target__inner">
                                    <img className="target__img" src={weightLose} alt="female"></img>
                                    <span className="target__name">Похудение &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                </span>
                                </label>
                            </div>
                            <div className="target__item">
                                <label className="target__label" htmlFor="weightSave">
                                    <input
                                        id="weightSave"
                                        type="radio"
                                        name="target"
                                        checked={target === 1}
                                        onChange={(e) => setTarget(1)}
                                    />
                                    <span className="target__inner">
                                    <img className="target__img" src={weightSave} alt="female"></img>
                                    <span className="target__name">Поддержание веса</span>
                                </span>
                                </label>
                            </div>
                            <div className="target__item">
                                <label className="target__label" htmlFor="weightAdd">
                                    <input
                                        id="weightAdd"
                                        type="radio"
                                        name="target"
                                        checked={target === 1.1}
                                        onChange={(e) => setTarget(1.1)}
                                    />
                                    <span className="target__inner">
                                    <img className="target__img" src={weightAdd} alt="female"></img>
                                    <span className="target__name">Набор массы</span>
                                </span>
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="form__btn">
                            Рассчитать
                        </button>
                    </div>
                }
            </form>
        </div>
    );
}









