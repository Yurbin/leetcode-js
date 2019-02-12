/*
    编写一个函数来查找字符串数组中的最长公共前缀。

    如果不存在公共前缀，返回空字符串 ""。

    示例 1:
    输入: ["flower","flow","flight"]
    输出: "fl"

    示例 2:
    输入: ["dog","racecar","car"]
    输出: ""
    解释: 输入不存在公共前缀。

    说明:
    所有输入只包含小写字母 a-z 。
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // 1.0
    // let res = "";
    // if (strs.length > 0) {
    //     let firstStr = strs.splice(0, 1)[0];
    //     const len = firstStr.length;
    //     for (let index = 0; index < len; index++) {
    //         res += firstStr[index];
    //         let flag = strs.every(o => o.indexOf(res) === 0);
    //         if (!flag) {
    //             res = res.substring(0, res.length - 1);
    //             break;
    //         }
    //     }
    // }
    // return res;

    // 1.1
    if (strs.length === 0) return "";
    let res = "";
    let firstStr = strs[0];
    let flag = true;
    for (let index = 0; index < firstStr.length; index++) {
        res = firstStr.substr(0, index + 1);
        flag = strs.every(o => o.substr(0, index + 1) == res);
        if (!flag) {
            res = firstStr.substr(0, index);
            break;
        }
    }
    return res;
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["c", "acc", "ccc"]));
// console.log(longestCommonPrefix(["aca", "cba"]));
// console.log(longestCommonPrefix(["aca"]));