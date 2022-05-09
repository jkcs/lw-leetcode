/**
 * 127. 单词接龙
 *字典 wordList 中从单词 beginWord 和 endWord 的 转换序列 是一个按下述规格形成的序列
 *  beginWord -> s1   -> s2   -> ... -> sk：
 *
 * 每一对相邻的单词只差一个字母。
 * 对于 1 <= i <= k时，每个si都在wordList中。注意，beginWord不需要在 wordList中。
 * sk == endWord
 * 给你两个单词 beginWord 和 endWord 和一个字典 wordList ，
 * 返回从 beginWord 到 endWord的最短转换序列中的单词数目 。如果不存在这样的转换序列，返回 0 。
 *
 *
 *示例 1：
 *
 * 输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
 * 输出：5
 * 解释：一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。
 *
 *示例 2：
 *
 * 输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
 * 输出：0
 * 解释：endWord "cog" 不在字典中，所以无法进行转换。
 *
 *提示：
 *
 * 1 <= beginWord.length <= 10
 * endWord.length == beginWord.length
 * 1 <= wordList.length <= 5000
 * wordList[i].length == beginWord.length
 * beginWord、endWord 和 wordList[i] 由小写英文字母组成
 * beginWord != endWord
 * wordList 中的所有字符串 互不相同
 *
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const keyArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const len = beginWord.length;
  const wordListSet = new Set(wordList);
  // bfs
  const queue = [beginWord];
  const vis = new Set([beginWord]);
  let result = 1;

  while (queue.length) {
    const sz = queue.length;
    for (let k = 0; k < sz; k++) {
      const cur = queue.shift();
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < keyArr.length; j++) {
          if (cur[i] !== keyArr[j]) {
            let item = [...cur];
            item[i] = keyArr[j];
            item = item.join('');
            if (!vis.has(item) && wordListSet.has(item)) {
              if (item === endWord) {
                return result + 1;
              }
              vis.add(item);
              queue.push(item);
            }
          }
        }
      }
    }
    ++result;
  }

  return 0;
};

console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])); // 5
console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']));
console.log(ladderLength('a', 'c', ['a', 'b', 'c']));
