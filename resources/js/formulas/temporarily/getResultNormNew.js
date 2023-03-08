// Функция расчета суточной нормы калорийности
// Упрощенный вариант расчета нормы калорийности:
// 1500 - для похудения,
// 1700 - для сохранения веса,
// 2000 - для набора массы

export function getResultNormNew(gender, weight, height, age, quotient, target) {

    return target === 0.9 ? 1500 : target === 1 ? 1700 : 2000;
}
