//  calculateTax
function calculateTax(amount) {
    return amount * 0.10;
}

// convertToUpperCase
function convertToUpperCase(text) {
    return text.toUpperCase();
}

//  findMaximum
function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}

//  isPalindrome 
function isPalindrome(word) {
    let lowerWord = word.toLowerCase();
    let reversed = lowerWord.split('').reverse().join('');
    return lowerWord === reversed;
}

//  calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * (discountPercentage / 100));
}