//Функция расчета суточной нормы калорийности

export function getResultNorm(gender, weight, height, age, quotient, target) {

    let resultFoGender = 0;

    if (gender === 'female') {
        resultFoGender = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
    } else {
        resultFoGender = 66.5 + (13.75 * weight) + (5.003 * height) - (6.775 * age);
    }

    return Math.round(resultFoGender * quotient * target);
}
