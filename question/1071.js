/**
 * 
 * 对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。
 * 返回最长字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。
 * 
 */
/**
 * str1 = "ABCABC", str2 = "ABC" "ABC"
 * str1 = "ABABAB", str2 = "ABAB" "AB"
 */


/**
 * 思路1：取字符串所有的子串，取交集，交集与字符串replace都为空则有这个子串 -> 会超时
 * 思路2：不超时 内存 100% 时间 5%, 执行也太耗时间
 *      1. 有这种串的话肯定从开头都是这个串
 *      2. 一定是顺序的
 *      3. 一定能 replace 掉
 *      取所有的 开头顺序 子串 的交集
 * 思路3：
 *      1. 取最短串，找到它能除尽的子串
 *      2. 子串集去除长串，能除尽的最长串就是结果
 */
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// var gcdOfStrings = function (str1, str2) {
//     let list1 = getStartSubListByStr(str1)
//     let list2 = getStartSubListByStr(str2)
//     console.log(list1);

//     let intersectionList = getIntersectionList(list1, list2)
//     let tmpList = []
//     for (let i = 0; i < intersectionList.length; i++) {
//         let str = intersectionList[i]
//         let reg = new RegExp(str, 'g')

//         if (str1.replace(reg, '') === '' && str2.replace(reg, '') === '') {
//             tmpList.push(str)
//         }
//     }
//     return tmpList.reduce((str, item) => {
//         if (item.length > str.length) {
//             return item
//         }
//         return str
//     }, '')
// };

// function getStartSubListByStr(str) {
//     let list = str.split('')
//     let result = new Set()
//     for (let i = list.length; i > 0; i--) {
//         result.add(str.substring(0, i))
//     }
//     return Array.from(result)
// }

// function getSubListByStr(str) {
//     let list = str.split('')
//     let result = new Set(...list)
//     for (let i = 0; i < list.length; i++) {
//         for (let k = i + 1; k < list.length + 1; k++) {
//             result.add(str.substring(i, k))
//         }
//     }
//     result.add(str)
//     return Array.from(result)
// }

// function getIntersectionList(list1, list2) {
//     let result = []
//     // 循环最小list, 判断两边是否都包含
//     let len1 = list1.length
//     let len2 = list2.length
//     if (len1 >= len2) {
//         for (let i = 0; i < len2; i++) {
//             let item = list2[i]
//             if (list1.indexOf(item) !== -1) {
//                 result.push(item)
//             }
//         }
//         return result
//     }
//     for (let i = 0; i < len1; i++) {
//         let item = list1[i]
//         if (list2.indexOf(item) !== -1) {
//             result.push(item)
//         }
//     }
//     return result
// }

/**
 * 思路三 内存 100% 时间 5%, 执行也太耗时间
 */
var gcdOfStrings = function (str1, str2) {
    // 1.取最短串
    let minStr
    let maxStr
    if (str1.length > str2.length) {
        minStr = str2
        maxStr = str1
    } else {
        minStr = str1
        maxStr = str2
    }
    // 2.找能除尽的串
    let list = minStr.split('')
    let subList = []
    for (let i = list.length; i > 0; i--) {
        let subStr = minStr.substring(0, i)
        
        let reg = new RegExp(subStr, 'g')
        if (minStr.replace(reg, '') === '') {
            subList.push(subStr)
        }
    }
    // 3.去除长串,子串长肯定从大到小
    for (let i = 0; i < subList.length; i++) {
        let subStr = subList[i]
        let reg = new RegExp(subStr, 'g')
        if (maxStr.replace(reg, '') === '') {
            return subStr
        }
    }
    return ''
};

/**
 * 评论中的神仙方法，直接跪
 * 思路4.
 */
function gcd(a, b) {return b == 0? a : gcd(b , a % b);}
var gcdOfStrings = function (str1, str2) {
    // 判断是否是这种串
    if (str1 + str2 != str2 + str1) return '';
    // 取长度的最大公因数
    return str1.substr(0, gcd(str1.length, str2.length));
}


console.log(gcdOfStrings('ABCABC', 'ABC'));
