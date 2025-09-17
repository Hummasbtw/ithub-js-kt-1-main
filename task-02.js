const temp = Number(prompt('Температура'))
const weather = prompt('Погода (clear, cloudy)')

if (!Number.isFinite(temp)) {
    throw new Error("Температура задана неверно")
}

// проверка температуры и выброс ошибки с подсказкой

if ((weather !== "clear") && (weather !== "cloudy")) {
    throw new Error("Погода задана некорректно")
}


let activity

if () {
    activity = 'golf'
} else if () {
    activity = 'bowling'
}

console.log(activity)
console.log(temp, weather)