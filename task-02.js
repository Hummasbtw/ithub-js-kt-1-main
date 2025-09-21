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

if (temp >= 25 && weather === "clear") {
    activity = 'golf'
} else if ((temp >= 10 && temp <= 24 || weather === "cloudy")) {
    activity = 'bowling'
}
else {
    activity = 'hiking'
}

console.log(activity)
console.log(temp, weather)