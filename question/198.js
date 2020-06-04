/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，
 * 影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3,1]
 * 输出: 4
 * 解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
 *      偷窃到的最高金额 = 1 + 3 = 4 。
 * 示例 2:
 * 
 * 输入: [2,7,9,3,1]
 * 输出: 12
 * 解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
 *      偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 * 
 */
/**
* @param {number[]} nums
* @return {number}
*/
// var rob = function (nums) {
//     // 思路1 两条支路取最大那条就好，结果超时
//     if (nums.length === 0) return 0
//     if (nums.length === 1) {
//         return nums[0]
//     }
//     let sum1 = nums[0] + rob(nums.slice(2))
//     let sum2 = nums[1] + rob(nums.slice(3))
//     return Math.max(sum1, sum2)
// };

var rob = function (nums) {
    // 思路2 用时和内存都很高
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    
    let sumArr = [nums[0], nums[1]]
    let max = Math.max(nums[0], nums[1])
    for (let index = 2; index < nums.length; index++) {
        let len = sumArr.length
        for (let i = 0; i < len; i++) {
            let item = sumArr[i];
            if (item === undefined) continue
            if (i + 1 != index) {
                let sum = item + nums[index]
                if (max < sum) {
                    sumArr[index] = sum
                    max = Math.max(max, sum)
                }
            }
        }
    }
    return max
};

var rob = function (nums) {
    // 思路3 
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    
    let sumArr = [nums[0], Math.max(nums[0], nums[1])]
    for (let index = 2; index < nums.length; index++) {
        sumArr[index] = Math.max(sumArr[index - 2] + nums[index], sumArr[index - 1])
    }
    
    return sumArr[sumArr.length - 1]
};


// console.log(rob([6, 3, 10, 8, 2, 10, 3, 5, 10, 5, 3]))
// console.log(rob([82,217,170,215,153,55,185,55,185,232,69,131,130,102]))
console.log(rob([104,209,137,52,158,67,213,86,141,110,151,127,238,147,169,138,240,185,246,225,147,203,83,83,131,227,54,78,165,180,214,151,111,161,233,147,124,143]))
// console.log(rob([183,219,57,193,94,233,202,154,65,240,97,234,100,249,186,66,90,238,168,128,177,235,50,81,185,165,217,207,88,80,112,78,135,62,228,247,211]))
// console.log(rob([4,1,2,7,5,3,1]))
// console.log(rob([0,0,0]))
// console.log(rob([6, 6, 4, 8, 4, 3, 3, 10]))
// console.log(rob([1,3,1,3,100]))
// console.log(rob([1, 2, 3, 1]))
// console.log(rob([2, 7, 9, 3, 1]))
// console.log(rob([2, 1, 1, 2]))
// console.log(rob([1, 2, 1, 1, 123, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]))
// console.log(rob([226,174,214,16,218,48,153,131,128,17,157,142,88,43,37,157,43,221,191,68,206,23,225,82,54,118,111,46,80,49,245,63,25,194,72,80,143,55,209,18,55,122,65,66,177,101,63,201,172,130,103,225,142,46,86,185,62,138,212,192,125,77,223,188,99,228,90,25,193,211,84,239,119,234,85,83,123,120,131,203,219,10,82,35,120,180,249,106,37,169,225,54,103,55,166,124]))