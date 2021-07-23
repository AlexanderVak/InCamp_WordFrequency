export let text = 'Little red fox likes red box. Red box is big!'

export function separateWords(text) {
    let words = text.toLowerCase().split(' ')
    let separatedWords = []
    words.forEach(word => {
        separatedWords.push(word.match(/\w*\W/) ? word.slice(0, -1) : word)
    });
    return separatedWords
}
export function countWords(separatedWords){
    const words = new Map()
    separatedWords.forEach(word => {
        words.has(word) ? words.set(word,(words.get(word)) + 1) : words.set(word, 1)
    });
    return words
}

export function showResults(words){
    let result = ''
    words.forEach((value, key) => {
        result += `word "${key}" comes across ${value} times\n`
    })
    return result
}