export let text = 'Little red fox likes red box. Red box is big!'

export function separateWords(text) {
    let words = text.toLowerCase().split(' ')
    let separatedWords = []
    words.forEach(word => {
        separatedWords.push(word.match(/\w*\W/) ? word.slice(0, -1) : word)
    });
    return separatedWords
}