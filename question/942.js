/**
 * 942. 增减字符串匹配
 * 由范围 [0,n] 内所有整数组成的 n + 1 个整数的排列序列可以表示为长度为 n 的字符串 s ，其中:
 * 如果 perm[i] < perm[i + 1] ，那么 s[i] == 'I'
 * 如果 perm[i] > perm[i + 1] ，那么 s[i] == 'D'
 * 给定一个字符串 s ，重构排列 perm 并返回它。如果有多个有效排列perm，则返回其中 任何一个 。
 *
 * 示例 1：
 *
 * 输入：s = "IDID"
 * 输出：[0,4,1,3,2]
 *
 * 示例 2：
 *
 * 输入：s = "III"
 * 输出：[0,1,2,3]
 *
 * 示例 3：
 *
 * 输入：s = "DDI"
 * 输出：[3,2,0,1]
 *
 * 提示：
 *
 * 1 <= s.length <= 105
 * s 只包含字符 "I" 或 "D"
 *
 */

/**
 * 发现规律，第一个出现D的位置一定是最大的数，第一出线I的位置一定是最小的数
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  const res = [];
  let dBase = s.length;
  let iBase = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      res[i] = iBase;
      res[i + 1] = res[i] + 1;
      iBase++;
    } else {
      res[i] = dBase;
      res[i + 1] = res[i] - 1;
      dBase--;
    }
  }
  return res;
};


console.log(diStringMatch("IDID"));
console.log(diStringMatch("III"));
console.log(diStringMatch("DDI"));
console.log(diStringMatch("DDD"));
