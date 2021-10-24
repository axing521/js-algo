/***
 * @creater:ACBash
 * @create_time:21-10-23 19:15:31
 * @last_modify:ACBash
 * @modify_time:21-10-24 14:46:24
 * @line_count:43
 **/

/* 分桶，计数，哈希表，计数值作为哈希值,O(nk) */
const groupAnagrams = (strs) => {
    let map = {};
    
    for(const s of strs){
        let count = new Array(26).fill(0);
        for(const c of s){
            count[c.charCodeAt() - "a".charCodeAt()]++;
        }
        map[count] ? map[count].push(s) : map[count] = [s];
    }

    return Object.values(map);
};

/* 排序作为哈希值,O(nklog(k)) */
const groupAnagrams = (strs) => {
    let map = {};

    for(const s of strs){
        let arr = Array.from(s);
        arr.sort();
        map[arr] ? map[arr].push(s) : map[arr] = [s];
    }

    return Object.values(map);
};

/*  */
const groupAnagrams = (strs) => {
    
};

/* API怪，哈哈哈 */
var groupAnagrams = function(strs,m = {}) {
    for(const str of strs){
        const k = str.split('').sort().join('');
        (m[k] || (m[k] = [])).push(str);
    }
    return Object.values(m);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));