/**
 * 
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
 * 
 * 示例 1:
 * 
 * 输入: 2.00000, 10
 * 输出: 1024.00000
 * 示例 2:
 * 
 * 输入: 2.10000, 3
 * 输出: 9.26100
 * 示例 3:
 * 
 * 输入: 2.00000, -2
 * 输出: 0.25000
 * 解释: 2-2 = 1/22 = 1/4 = 0.25
 * 说明:
 * 
 * -100.0 < x < 100.0
 * n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。
 * 
 */

/**
 * Math.pow
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    let isReduce = n < 0
    if (n == 0) {
        return 1;
    }
    if (n == 1) {
        return x;
    }
    n = Math.abs(n)
    let result = 0;
    let tmp = myPow(x, n >>> 1);
    if (n % 2 != 0) {
        result = x * tmp * tmp;
    } else {
        result = tmp * tmp;
    }
   
    return isReduce ? 1 / result : result;
};

// console.log(myPow(2.0000, 10));
// console.log(myPow(2.1000, 3));
// console.log(myPow(2.0000, -2));
// console.log(myPow(2.0000, -2147483648));
console.log(myPow(8.95371, -1));
