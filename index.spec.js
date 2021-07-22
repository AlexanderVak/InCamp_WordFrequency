import { text ,separate } from "./index";
describe('Word frequency', () => {
    const expectedText = [
        'Little', 'red',
        'fox', 'likes',
        'red', 'box.',
        'Red', 'box',
        'is', 'big!'
    ]
    it('should split by spaces', () => {
        expect(separate(text)).toStrictEqual(expectedText)
    });
    
    
});

