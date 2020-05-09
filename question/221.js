/**
 * 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
 * 示例:
 * 
 * 输入: 
 * 
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 * 
 * 输出: 4
 */

/**
 * 思路1 耗时 5%  内存 33.33 性能太差
 *  暴力解法
 *     1. 找出所有为1的正方形
 *     2. 取最大面积
 * 思路2
 *     评论的方法都是 以基点左右能不能形成最大正方形来找
 */
 /**
   当我们判断以某个点为正方形右下角时最大的正方形时，那它的上方，左方和左上方三个点也一定是某个正方形的右下角，否则该点为右下角的正方形最大就是它自己了。
   这是定性的判断，那具体的最大正方形边长呢？
   我们知道，该点为右下角的正方形的最大边长，最多比它的上方，左方和左上方为右下角的正方形的边长多1，
   最好的情况是是它的上方，左方和左上方为右下角的正方形的大小都一样的，
   这样加上该点就可以构成一个更大的正方形。 但如果它的上方，左方和左上方为右下角的正方形的大小不一样，
   合起来就会缺了某个角落，这时候只能取那三个正方形中最小的正方形的边长加1了。
   假设dpi表示以i,j为右下角的正方形的最大边长，则有 dp[i][j] = min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1 当然，
   如果这个点在原矩阵中本身就是0的话，那dp[i]肯定就是0了。
 **/
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    // 1. 找边长
    let height = matrix.length
    let width = height ? matrix[0].length : 0
    if (!width) return 0
    let max = 0
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
            const item = matrix[x][y]
            if (item === '1') {
                let minLength = Math.min((width - y), (height - x))
                if (minLength === 1 && width === 1 || height === 1) {
                    return 1
                }

                for (let i = 0; i < minLength; i++) {
                    let isNumber = isAllNumber1(x, y, x + i, y + i, matrix)

                    if (isNumber) {
                        max = Math.max(max, i + 1)
                    }
                }
            }
        }

    }

    return max * max
};

function isAllNumber1(x1, y1, x2, y2, matrix) {
    for (let x = x1; x <= x2; x++) {
        for (let y = y1; y <= y2; y++) {
            let item = matrix[x][y]

            if (item === '0') return false
        }
    }
    return true
}
// 测试用例
let matrix = []
matrix.push(['1', '0', '1', '0', '0'])
matrix.push(['1', '0', '1', '1', '1'])
matrix.push(['1', '1', '1', '1', '1'])
matrix.push(['1', '0', '1', '0', '0'])
matrix.push(['1', '0', '0', '1', '0'])

// console.log(maximalSquare(matrix));
console.log(maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
]));
console.log(maximalSquare([
    ["0", "1"],
    ["1", "0"]
]));
console.log(maximalSquare([
    ["1", "1", "1", "1"],
    ["1", "1", "1", "1"],
    ["1", "1", "1", "1"]
]));
