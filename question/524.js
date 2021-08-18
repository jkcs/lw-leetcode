/**
 * 524. 通过删除字母匹配到字典里最长单词
 *
 * 给你一个字符串 s 和一个字符串数组 dictionary 作为字典，找出并返回字典中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。
 * 如果答案不止一个，返回长度最长且字典序最小的字符串。如果答案不存在，则返回空字符串。
 *
 *
 * 示例 1：
 *
 * 输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
 * 输出："apple"
 *
 * 示例 2：
 *
 * 输入：s = "abpcplea", dictionary = ["a","b","c"]
 * 输出："a"
 *
 * 提示：
 *
 * 1 <= s.length <= 1000
 * 1 <= dictionary.length <= 1000
 * 1 <= dictionary[i].length <= 1000
 * s 和 dictionary[i] 仅由小写英文字母组成
 */

/**
 * 放弃，不明白题意
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  let maxWeightVal = ''
  let weight = 0
  // 先按字典序排序
  dictionary = dictionary.sort((a, b) => a > b ? 1 : -1)
  console.log(dictionary)
  const calcWei = (arg) => {
    let result = 0
    for (let i = 0; i < s.length; i++) {
      result = arg.indexOf(s[i]) !== -1
        ? result + 1
        : result
    }
    return result
  }
  // 把s转成数组
  for (let i = 0; i < dictionary.length; i++) {
    const item = dictionary[i]
    // 得到权重
    const subWei = calcWei(item)
    if (
      (subWei > weight) ||
      (subWei === weight && maxWeightVal.length < item.length)
    ) {
      maxWeightVal = item
      weight = subWei
    }
  }
  return maxWeightVal
}

// console.log(findLongestWord('abpcplea', ['ale', 'apple', 'monkey', 'plea']))
// console.log(findLongestWord('abpcplea', ['a', 'b', 'c']))
// console.log(findLongestWord('abce', ['abe', 'abc']))
console.log(findLongestWord('abpcplea', ['ale', 'apple', 'monkey', 'plea', 'abpcplaaa', 'abpcllllll', 'abccclllpppeeaaaa']))
