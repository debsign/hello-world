import { add, isPalindrome } from './helpers';

describe('helpers', () => {
    test('should sum two numbers', () => {
        expect(add(1,2)).toBe(3);
        expect(add(4,4)).toBe(8);
    });

    test('return true if the word is palindrome', () => {
        const texto = "ana";
        const expected = true;
        expect(isPalindrome(texto)).toBe(expected);
    });
})



// npm run test