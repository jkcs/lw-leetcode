/**
 * √
 * 定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，
 *  也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。
 * 如果 n 是快乐数就返回 True ；不是，则返回 False 
 */

/**
 * 
 * 输入：19
 * 输出：true
 * 解释：
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 02 = 1
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    if (n === 1) return true
    let map = new Map()
    let i = 1
    while (i < 500) {
        n = sumSquare(n)
        if (map.has(n)) {
            return false
        }
        if (n === 1) {
            return true
        }
        map.set(n, n)
        i++
    }
    return true
};


function sumSquare(n) {
    return String(n).split('').map(num => Number(num) * Number(num)).reduce((sum, num) => sum + num, 0)
}

console.log(isHappy(19));
console.log(isHappy(1));
console.log(isHappy(7));
console.log(isHappy(2));
console.log(isHappy(5));
console.log(isHappy(10));
console.log(isHappy(11));