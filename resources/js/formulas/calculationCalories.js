// Функция, которая в зависимости от цели пользователя
// (похудение, поддержание веса или набор массы) и
// и его суточной нормы калорийности
// возвращает суточную норму КБЖУ в граммах
// в виде диапазона [min, max]

export function calculationCalories(target, norm) {

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
        "protein": [
            Math.round((proteinMin * norm) / 4),
            Math.round((proteinMax * norm) / 4),
        ],
        "fat": [
            Math.round((fatMin * norm) / 9),
            Math.round((fatMax * norm) / 9),
        ],
        "carbohydrates": [
            Math.round((carbohydratesMin * norm) / 4),
            Math.round((carbohydratesMax * norm) / 4),
        ]
    };
}


