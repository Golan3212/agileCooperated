// Функция расчета индекса массы тела

export function getBodyMassIndex(massIndex) {

    let description = '';

    if (massIndex < 16) {
        description = "Дефицит массы тела (истощение)";
    }
    if (massIndex >= 16 && massIndex < 18.5) {
        description = "Недостаточная масса тела (дефицит)";
    }
    if (massIndex >= 18.5 && massIndex < 25) {
        description = "Норма";
    }
    if (massIndex >= 25 && massIndex < 30) {
        description = "Избыточная масса тела (предожирение)";
    }
    if (massIndex >= 30 && massIndex < 35) {
        description = "Ожирение первой степени";
    }
    if (massIndex >= 35 && massIndex < 40) {
        description = "Ожирение второй степени";
    }
    if (massIndex >= 40) {
        description = "Ожирение третьей степени (морбидное)";
    }

    return description;


}
