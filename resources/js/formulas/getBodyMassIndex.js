// Функция расчета индекса массы тела

export function getBodyMassIndex(weight, height) {

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
