const word = prompt('Ваше слово')

if (word === null && word.length === 0) { 
    throw new Error ("Слово не может быть пустым")
    // выбросить ошибку с пояснением
}

const wordLength = word.length
const squareRoot = Math.sqrt(wordLength)
const result = Number.isInteger(squareRoot) ? 1 : 0

// Number.isInteger()
// 3 === Math.round(3)
// const WordLength = word.length // длина слова
// WordLength ** 0.5 //квадратный корень
// Math.pow(WordLength, 0.5) // Квадратный корень
// Math.sqrt(WordLength) // квадратный корень


console.log(result)