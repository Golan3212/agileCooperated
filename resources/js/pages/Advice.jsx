import React, {useEffect, useLayoutEffect, useRef} from "react";
import { useLocation } from "react-router-dom";
import {getResultNorm} from "../formulas/getResultNorm";
import {calculationCalories} from "../formulas/calculationCalories";
import {getBodyMassIndex} from "../formulas/getBodyMassIndex";
import {getResultNormNew} from "../formulas/temporarily/getResultNormNew";
export default function Advice() {
    const location = useLocation();

    const gender = location.state?.gender;
    const weight = location.state?.weight;
    const height = location.state?.height;
    const age = location.state?.age;
    const quotient = location.state?.quotient;
    const target = location.state?.target;

    let norm = getResultNormNew(gender, weight, height, age, quotient, target);
    let normsCalories = calculationCalories(target, norm);
    let bodyMassIndex = getBodyMassIndex(weight, height);

    return (
    <div className="result box">
        <h1 className="advice__heading">
            Рекомендации
        </h1>
        <div className="advice">
            <h3>Норма калорий</h3>
            <p className="advice__text">
                Ваша суточная норма килокалорий
            </p>
            <h4>{norm}</h4>
        </div>
        <div className="advice">
            <h3>Белки</h3>
            <p className="advice__text">
                Рекомендуемое количество белка в граммах
            </p>
            <p className="advice__result"> от &nbsp;
                <span>{normsCalories.protein[0]}</span> до &nbsp;
                <span>{normsCalories.protein[1]}</span>
            </p>
        </div>
        <div className="advice">
            <h3>Жиры</h3>
            <p className="advice__text">
                Рекомендуемое количество жиров в граммах
            </p>
            <p> от &nbsp;
                <span>{normsCalories.fat[0]}</span> до &nbsp;
                <span>{normsCalories.fat[1]}</span>
            </p>
        </div>
        <div className="advice">
            <h3>Углеводы</h3>
            <p className="advice__text">
                Рекомендуемое количество углеводов в граммах
            </p>
            <p> от &nbsp;
                <span>{normsCalories.fat[0]}</span> до &nbsp;
                <span>{normsCalories.fat[1]}</span>
            </p>
        </div>
        <div className="advice">
            <h3>Индекс массы тела</h3>
            <p className="advice__text">ИМТ – величина, позволяющая оценить
                степень соответствия массы человека и его роста
                и тем самым косвенно оценить, является ли масса недостаточной,
                нормальной или избыточной.
                Данный параметр не подходит для оценки спортсменов ввиду
                развитой мускулатуры
                и как следствие высокого ИМТ.
            </p>
            <p>
                <span>{bodyMassIndex.index}</span>
                 - {bodyMassIndex.description}
            </p>
        </div>
    </div>
    );
}


