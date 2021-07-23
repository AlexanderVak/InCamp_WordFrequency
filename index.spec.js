import { text , separateWords } from "./index";
describe('Word frequency', () => {
    const expectedText = [
            'little', 'red',
            'fox', 'likes',
            'red', 'box',
            'red', 'box',
            'is', 'big'
        ]
    it('should split by spaces', () => {
        expect(separateWords(text)).toStrictEqual(expectedText)
    });
    it('should split without special signs', () => {
        expect(separateWords(text)).toStrictEqual(expectedText)
    });
    it('should convert words to lowercase', () => {
        expect(separateWords(text)).toStrictEqual(expectedText)
    });
});

