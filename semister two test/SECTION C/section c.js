//  qn 1. Function to reverse a given string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// qn 2. Function to find the sum of all even numbers in an array
function sumOfEvens(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
}

// qn 3. Function that takes two numbers and returns their product if they are the same, or their sum if they are different
function calculateNumbers(num1, num2) {
    if (num1 === num2) {
        return num1 * num2;
    } else {
        return num1 + num2;
    }
}

// qn 4. Function to check if a given word is a palindrome
function checkPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}