const word = prompt('Ваше слово')

if (word === null && word.length === 0) { 
    // выбросить ошибку с пояснением
}

// Number.isInteger()
// 3 === Math.round(3)
// const WordLength = word.length // длина слова
// WordLength ** 0.5 //квадратный корень
// Math.pow(WordLength, 0.5) // Квадратный корень
// Math.sqrt(WordLength) // квадратный корень

const result = word.length === 2 ? 1 : 0 // дописать логику 
console.log(result)