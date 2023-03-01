import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';

function ControlledFormWithHook() {
    const [gender, setGender] = useState('male');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [quotient, setQuotient] = useState(1.2);
    const [norm, setNorm] = useState(0);

    useEffect(() => {
        setWeight(JSON.parse(window.localStorage.getItem('weight')));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('weight', weight);
    }, [weight]);

    const handleClick = e => {
        e.preventDefault();

        if (gender === 'female') {
            setNorm(Math.round(655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age) * quotient));
        } else {
            setNorm(Math.round(66.5 + (13.75 * weight) + (5.003 * height) - (6.775 * age)* quotient));
        }



    }

    return (
        <div>
            <form>
                <div>
                    <h4>Пол</h4>
                    <label htmlFor="male">Мужской</label>
                    <input id="male" type="radio" name="gender" onChange={(e) => setGender('male')}/>
                    <label htmlFor="female">Женский</label>
                    <input id="female" type="radio" name="gender" onChange={(e) => setGender('female')}/>
                </div>
                <div>
                    <h4>Измерения</h4>
                    <label htmlFor="weight">Ваш вес</label>
                    <input id="weight" type="text" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)}/>
                    <label htmlFor="height">Ваш рост</label>
                    <input id="height" type="text" name="height" onChange={(e) => setHeight(e.target.value)}/>
                    <label htmlFor="age">Ваш возраст</label>
                    <input id="age" type="text" name="age" onChange={(e) => setAge(e.target.value)}/>
                </div>
                <div>
                    <h4>Коэффициент активности</h4>
                    <label htmlFor="quotientLow">1,2 (низкий) - малоподвижный образ жизни, отсутствие занятий спортом, меньше 10 тыс. шагов в день</label>
                    <input id="quotientLow" type="radio" name="quotient" onChange={(e) => setQuotient(1.2)}/>
                    <label htmlFor="quotientSmall">1,38 (малый) - работа, связанная с ходьбой/стоянием, не очень интенсивные тренировки 1-3 раза в неделю (зарядка, йога, пилатес и пр.)</label>
                    <input id="quotientSmall" type="radio" name="quotient" onChange={(e) => setQuotient(1.38)}/>
                    <label htmlFor="quotientMiddle">1,55 (средний) - интенсивные занятия спортом стабильно 1-3 раза в неделю, активный образ жизни</label>
                    <input id="quotientMiddle" type="radio" name="quotient" onChange={(e) => setQuotient(1.55)}/>
                    <label htmlFor="quotientHigh">1,73 (высокий) - занятия спортом ежедневно</label>
                    <input id="quotientHigh" type="radio" name="quotient" onChange={(e) => setQuotient(1.73)}/>
                    <label htmlFor="quotientHighest">2,2 (очень высокий) - тяжелая физическая работа, занятия спортом 2 раза в день</label>
                    <input id="quotientHighest" type="radio" name="quotient" onChange={(e) => setQuotient(2.2)}/>
                </div>
                <button type="submit" onClick={handleClick}>Рассчитать</button>


            </form>
            <br/>
            <AmountOfCalories norm={norm}/>

        </div>
    );
}

function AmountOfCalories ({norm}) {
    if (norm) {
        return (
            <p>Количество ккалорий в день: {norm}</p>
        )
    }

}

ReactDOM.createRoot(document.getElementById('form')).render(
    <ControlledFormWithHook />);

