import { text , separateWords, countWords, showResults } from "./index";
describe('Word frequency', () => {
    const expectedText = [
            'little', 'red',
            'fox', 'likes',
            'red', 'box',
            'red', 'box',
            'is', 'big'
        ]
    const expectedMap = new Map([
        ['little', 1],
        ['red', 3],
        ['fox', 1],
        ['likes', 1],
        ['box', 2],
        ['is', 1],
        ['big', 1],
    ])
    const expectedString = 'word "little" comes across 1 times\nword "red" comes across 3 times\nword "fox" comes across 1 times\nword "likes" comes across 1 times\nword "box" comes across 2 times\nword "is" comes across 1 times\nword "big" comes across 1 times\n'

    it('should split by spaces', () => {
        expect(separateWords(text)).toStrictEqual(expectedText)
    });
    it('should split without special signs', () => {
        expect(separateWords(text)).toStrictEqual(expectedText)
    });
    it('should convert words to lowercase', () => {
        expect(separateWords(text)).toStrictEqual(expectedText)
    });
    it('should return frequency of word red', () => {
        expect(countWords(expectedText)).toStrictEqual(expectedMap)
    });
    it('should return results of program', () => {
        expect(showResults(expectedMap)).toBe(expectedString)
    });

});

