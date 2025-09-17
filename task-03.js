const a = Number(prompt('Первое значение'))
const b = Number(prompt('Второе значение'))
const sign = prompt('Действие (*, /, +, -)')

if ((!Number.isFinite(a))) {
    throw new Error("Одно из чисел введено некорректно!")
}

if ((!Number.isFinite(b))) {
    throw new Error("Одно из чисел введено некорректно!")
}

if ((sign !== "*" && sign !== "-" && sign !== "/" && sign !== "+")) {
    throw new Error("Введен некорректный знак!")
}


let result

switch (sign) {
    case "-":
        result = a - b
        break
    case "/":
        if (b === 0) {
            throw new Error("Делить на 0 нельзя!")
        }

        result = a / b
        break
    case "+":
        result = a + b
        break
    case "*":
        result = a * b
        break
}



console.log(result)