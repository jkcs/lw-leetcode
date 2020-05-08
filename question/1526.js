/**
 * 面试题 16.10. 生存人数
 * 给定N个人的出生年份和死亡年份，第i个人的出生年份为birth[i]，死亡年份为death[i]，实现一个方法以计算生存人数最多的年份。
 * 你可以假设所有人都出生于1900年至2000年（含1900和2000）之间。
 * 如果一个人在某一年的任意时期都处于生存状态，那么他们应该被纳入那一年的统计中。
 * 例如，生于1908年、死于1909年的人应当被列入1908年和1909年的计数。
 *
 * 如果有多个年份生存人数相同且均为最大值，输出其中最小的年份。
 *
 * 示例：
 * 
 * 输入：
 * birth = {1900, 1901, 1950}
 * death = {1948, 1951, 2000}
 * 输出： 1901
 * 
 * 提示：
 * 0 < birth.length == death.length <= 10000
 * birth[i] <= death[i]
 */
/**
 * 思路1 用时 5% 内存 100%
 *      铁憨憨：得到所有的生死段，遍历生死日，每个生死日标记在段的次数，取最次数最多的日子, 取最小的年份
 * 思路2
 *      
 *      
 */
/**
 * @param {number[]} birth
 * @param {number[]} death
 * @return {number}
 */
var maxAliveYear = function (birth, death) {
    // 遍历
    let arr = new Set([...birth, ...death])
    let map = {}
    let result = []
    arr.forEach(item => {
        map[item] = 0
        for (let i = 0; i < birth.length; i++) {
            if (item >= birth[i] && item <= death[i]) {
                map[item] = map[item] + 1
            }
        }
    })
    Object.keys(map).forEach(k => {
        let isMax = Object.keys(map).every(k2 => map[k] >= map[k2])
        if (isMax) {
            result.push(Number(k))
        }
    })
    result = result.sort((a, b) => a - b)
    return result[0]
};

console.log(maxAliveYear([1900, 1901, 1950], [1948, 1951, 2000]))
