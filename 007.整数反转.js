// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:
// 输入: 123
// 输出: 321

// 示例 2:
// 输入: -123
// 输出: -321

// 示例 3:
// 输入: 120
// 输出: 21

// 注意:
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const MAX_VALUE = Math.pow(2, 31) - 1;
    const MIN_VALUE = Math.pow(2, 31) * -1;
    let rev = 0;
    while (x != 0) {
        let pop = x % 10;
        x = parseInt(x / 10);
        if (rev > MAX_VALUE / 10 || (rev == MAX_VALUE / 10 && pop > 7)) return 0;
        if (rev < MIN_VALUE / 10 || (rev == MIN_VALUE / 10 && pop < -8)) return 0;
        rev = rev * 10 + pop;
    }
    return rev;
};

/**
 * @param {number} x
 * @return {number}
 */
const reverseFirst = function (x) {
    let digit = 0, res = 0;
    while (x !== 0) {
        digit = x % 10;
        res = res * 10 + digit;
        x = (x - digit) / 10;
    }
    if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) {
        return 0;
    } else {
        return res;
    }
};

console.log(reverseFirst(123), reverseFirst(-123), reverseFirst(120));
console.log(reverse(123), reverse(-123), reverse(120));