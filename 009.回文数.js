// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 示例 1:
// 输入: 121
// 输出: true

// 示例 2:
// 输入: -121
// 输出: false
// 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

// 示例 3:
// 输入: 10
// 输出: false
// 解释: 从右向左读, 为 01 。因此它不是一个回文数。

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0 || (x % 10 == 0 && x != 0))
        return false;
    if (x < 10)
        return true;
    var temp = 0, pop = 0;
    while (x > temp) {
        pop = x % 10;
        temp = pop + temp * 10;
        x = (x - pop) / 10;
    }
    return (temp == x) || (parseInt(temp / 10) == x)
};

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindromeFirst = function (x) {
    if (x < 0) {
        return false;
    }
    let origin = x;
    let palindrome = 0, digit = 0;
    while (origin !== 0) {
        digit = origin % 10;
        palindrome = digit + palindrome * 10;
        origin = (origin - digit) / 10;
    }
    return palindrome === x;
};

console.log(isPalindromeFirst(101));
console.log(isPalindrome(101));