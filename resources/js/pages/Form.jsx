import React, {useEffect, useState} from 'react';
// import '../../css/form.css';

export default function Form() {
    const [gender, setGender] = useLocalStorage('gender', "");
    const [weight, setWeight] = useLocalStorage("weight", "");
    const [height, setHeight] = useLocalStorage("height", "");
    const [age, setAge] = useLocalStorage("age", "");
    const [quotient, setQuotient] = useLocalStorage("quotient", 0);
    const [target, setTarget] = useLocalStorage("target", 0);
    const [norm, setNorm] = useState(0);
    const handleClick = e => {
        e.preventDefault();

        let resultFoGender = 0;
        if (gender === 'female') {
            resultFoGender = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
        } else {
            resultFoGender = 66.5 + (13.75 * weight) + (5.003 * height) - (6.775 * age);
        }

        setNorm(Math.round(resultFoGender * quotient * target));

        if (weight!=="" && height!=="" && age!=="") {
            document.querySelector(".result").classList.remove('invisible');
        }
    }

    let normsCalories = calculationCalories(target, norm);
    let bodyMassIndex = getBodyMassIndex(weight, height);

    return (
        <div>
            <form className="box">
                <h1 className="form__heading">КАЛЬКУЛЯТОР НОРМЫ КАЛОРИЙ И БЖУ</h1>
                <div className="form">
                    <h4>Пол</h4>
                    <div className="form__inner">
                        <input id="male" type="radio" name="gender" checked={gender === 'male'} onChange={(e) => setGender('male')} />
                        <label htmlFor="male">Мужской</label>
                    </div>
                    <div className="form__inner">
                        <input id="female" type="radio" name="gender" checked={gender === 'female'} onChange={(e) => setGender('female')}/>
                        <label htmlFor="female">Женский</label>
                    </div>
                </div>
                <div className="form form__wrap">
                    <label htmlFor="weight">Вес</label>
                    <input className="form__input" id="weight" type="text" name="weight" value={weight} placeholder="Введите ваш вес" onChange={(e) => setWeight(e.target.value)}/>
                    <label htmlFor="height">Рост</label>
                    <input className="form__input" id="height" type="text" name="height" value={height} placeholder="Введите ваш рост" onChange={(e) => setHeight(e.target.value)}/>
                    <label htmlFor="age">Возраст</label>
                    <input className="form__input" id="age" type="text" name="age" value={age} placeholder="Введите ваш возраст" onChange={(e) => setAge(e.target.value)}/>
                </div>
                <div className="form">
                    <h4>Коэффициент активности</h4>
                    <div className="form__inner">
                        <input id="quotientLow" type="radio" name="quotient" checked={quotient === 1.2} onChange={(e) => setQuotient(1.2)}/>
                        <label htmlFor="quotientLow">1,2 (низкий) - малоподвижный образ жизни, отсутствие занятий спортом, меньше 10 тыс. шагов в день</label>
                    </div>
                    <div className="form__inner">
                        <input id="quotientSmall" type="radio" name="quotient" checked={quotient === 1.38} onChange={(e) => setQuotient(1.38)}/>
                        <label htmlFor="quotientSmall">1,38 (малый) - работа, связанная с ходьбой/стоянием, не очень интенсивные тренировки 1-3 раза в неделю (зарядка, йога, пилатес и пр.)</label>
                    </div>
                    <div className="form__inner">
                        <input id="quotientMiddle" type="radio" name="quotient" checked={quotient === 1.55} onChange={(e) => setQuotient(1.55)}/>
                        <label htmlFor="quotientMiddle">1,55 (средний) - интенсивные занятия спортом стабильно 1-3 раза в неделю, активный образ жизни</label>
                    </div>
                    <div className="form__inner">
                        <input id="quotientHigh" type="radio" name="quotient" checked={quotient === 1.73} onChange={(e) => setQuotient(1.73)}/>
                        <label htmlFor="quotientHigh">1,73 (высокий) - занятия спортом ежедневно</label>
                    </div>
                    <div className="form__inner">
                        <input id="quotientHighest" type="radio" name="quotient" checked={quotient === 2.2} onChange={(e) => setQuotient(2.2)}/>
                        <label htmlFor="quotientHighest">2,2 (очень высокий) - тяжелая физическая работа, занятия спортом 2 раза в день</label>
                    </div>
                </div>
                <div className="form">
                    <h4>Цель</h4>
                    <div className="form__inner">
                        <input id="weightLose" type="radio" name="target" checked={target === 0.9} onChange={(e) => setTarget(0.9)} />
                        <label htmlFor="weightLose">Похудение</label>
                    </div>
                    <div className="form__inner">
                        <input id="weightSave" type="radio" name="target" checked={target === 1} onChange={(e) => setTarget(1)} />
                        <label htmlFor="weightSave">Поддержание веса</label>
                    </div>
                    <div className="form__inner">
                        <input id="weightAdd" type="radio" name="target" checked={target === 1.1} onChange={(e) => setTarget(1.1)} />
                        <label htmlFor="weightAdd">Набор массы</label>
                    </div>
                </div>
                <button className="form__button" type="submit" onClick={handleClick}>Рассчитать</button>
            </form>

            <div className="result box invisible">
                <h1 className="advice__heading">Рекомендации</h1>
                <div className="advice">
                    <h3>Норма калорий</h3>
                    <p className="advice__text">Ваша суточная норма килокалорий</p>
                    <h4>{norm}</h4>
                </div>
                <div className="advice">
                    <h3>Белки</h3>
                    <p className="advice__text">Рекомендуемое количество белка в граммах</p>
                    <p className="advice__result"> от <span>{normsCalories.protein[0]}</span> до <span>{normsCalories.protein[1]}</span></p>
                </div>
                <div className="advice">
                    <h3>Жиры</h3>
                    <p className="advice__text">Рекомендуемое количество жиров в граммах</p>
                    <p> от <span>{normsCalories.fat[0]}</span> до <span>{normsCalories.fat[1]}</span></p>
                </div>
                <div className="advice">
                    <h3>Углеводы</h3>
                    <p className="advice__text">Рекомендуемое количество углеводов в граммах</p>
                    <p> от <span>{normsCalories.fat[0]}</span> до <span>{normsCalories.fat[1]}</span></p>
                </div>
                <div className="advice">
                    <h3>Индекс массы тела</h3>
                    <p className="advice__text">ИМТ – величина, позволяющая оценить степень соответствия массы человека и его роста
                        и тем самым косвенно оценить, является ли масса недостаточной, нормальной или избыточной.
                        Данный параметр не подходит для оценки спортсменов ввиду развитой мускулатуры
                        и как следствие высокого ИМТ.
                    </p>
                    <p><span>{bodyMassIndex.index}</span> - {bodyMassIndex.description}</p>
                </div>
            </div>

        </div>
    );
}



function calculationCalories(target, norm) {

    let proteinMin = 0;
    let proteinMax = 0;
    let fatMin = 0;
    let fatMax = 0;
    let carbohydratesMin = 0;
    let carbohydratesMax = 0;

    switch (target) {
        case 0.9:
            proteinMin = 0.4;
            proteinMax = 0.5;
            fatMin = 0.3;
            fatMax = 0.4;
            carbohydratesMin = 0.1;
            carbohydratesMax = 0.2;
            break;
        case 1:
            proteinMin = 0.25;
            proteinMax = 0.35;
            fatMin = 0.25;
            fatMax = 0.35;
            carbohydratesMin = 0.3;
            carbohydratesMax = 0.5;
            break;
        case 1.1:
            proteinMin = 0.25;
            proteinMax = 0.35;
            fatMin = 0.15;
            fatMax = 0.25;
            carbohydratesMin = 0.4;
            carbohydratesMax = 0.6;
            break;
    }

    return {
        protein: [
            Math.round((proteinMin * norm) / 4),
            Math.round((proteinMax * norm) / 4),
        ],
        fat: [
            Math.round((fatMin * norm) / 9),
            Math.round((fatMax * norm) / 9),
        ],
        carbohydrates: [
            Math.round((carbohydratesMin * norm) / 4),
            Math.round((carbohydratesMax * norm) / 4),
        ]
    };
}

function getBodyMassIndex(weight, height) {

    let index = Math.round((weight / ((height / 100) ** 2)) * 10) / 10;

    let description = "";

    if (index < 16) {
        description = "Дефицит массы тела (истощение)";
    }
    if (index >= 16 && index < 18.5) {
        description = "Недостаточная масса тела (дефицит)";
    }
    if (index >= 18.5 && index < 25) {
        description = "Норма";
    }
    if (index >= 25 && index < 30) {
        description = "Избыточная масса тела (предожирение)";
    }
    if (index >= 30 && index < 35) {
        description = "Ожирение первой степени";
    }
    if (index >= 35 && index < 40) {
        description = "Ожирение второй степени";
    }
    if (index >= 40) {
        description = "Ожирение третьей степени (морбидное)";
    }

    return {
        "index": index,
        "description": description,
    }

}

function getStorageValue(key, defaultValue) {
    // getting stored value
    if (typeof window !== "undefined") {
        const saved = localStorage.getItem(key);
        return saved !== null ? JSON.parse(saved) : defaultValue;
    }
}

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        // storing input name
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

