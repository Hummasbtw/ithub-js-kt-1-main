const price = Number(prompt('Введите сумму (в руб)'))
const range = prompt('Введите период (month, week или day)')

if (!Number.isFinite(price) ||  (price <= 0) ) {
    throw new Error("Доход введен некорректно!") 
}

if ((range != "month") && (range != "week") && (range != "day")) {
    throw new Error ("Период введен некорректно!")
    // выбросить ошибку с подсказкой
}

const formattedPrice = price.toLocaleString('ru-RU', {style: 'currency', currency:"RUB"})

let russianRange

if (range === 'month') {
    russianRange = 'месяц'
} else if (range === 'week') {
    russianRange = 'неделя'
} else if (range === 'day') {
    russianRange = 'день'
}

const output = `${formattedPrice} / ${russianRange}`
console.log(output)