export function add(a, b) {
    return a + b;
}

export function isPalindrome(texto) {
    const textReversed = texto.split("").reverse().join("");
    return textReversed === texto;
}