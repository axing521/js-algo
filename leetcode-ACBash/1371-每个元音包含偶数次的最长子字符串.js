/***
 * @creater:ACBash
 * @create_time:21-10-12 17:19:45
 * @last_modify:ACBash
 * @modify_time:21-10-12 22:8:35
 * @line_count:72
 **/

/* 1.暴力法,超时 */
/* const findTheLongestSubstring = (s) => {
    let ans = 0;
    
    for(let i=0; i<s.length; i++){
        let hash = {"a":0,"e":0,"i":0,"o":0,"u":0};
        for(let j=i; j<s.length; j++){
            if(!hash[s[j]]){
                hash[s[j]] = 0;
            }
            hash[s[j]]++;
            
            if(hash["a"]%2 === 0 && hash["e"]%2 === 0 && hash["i"]%2 === 0 && hash["o"]%2 === 0 && hash["u"]%2 === 0){
                ans = Math.max(ans, j-i+1);
            }
        }
    }

    return ans;
}; */

/* 用到前缀和和一点trick，但是还是超时，因为复杂度还是O(n^2) */
/* const findTheLongestSubstring = (s) => {
    let ans = 0, pre = [{"a":0,"e":0,"i":0,"o":0,"u":0,[s[0]]:1}];
    for(let i=1; i<s.length; i++){
        pre[i] = {...pre[i-1], [s[i]]:pre[i-1][s[i]]+1};
    }

    for(let i=0; i<pre.length; i++){
        if(pre[i]["a"]%2 === 0 && pre[i]["e"]%2 === 0 && pre[i]["i"]%2 === 0 && pre[i]["o"]%2 === 0 && pre[i]["u"]%2 === 0){
            ans = i+1;
        }
    }

    for(let i=1; i<s.length; i++){
        for(let j=s.length-1; j>=i; j--){
            if((pre[j]["a"]-pre[i-1]["a"])%2 === 0 && (pre[j]["e"]-pre[i-1]["e"])%2 === 0 && (pre[j]["i"]-pre[i-1]["i"])%2 === 0 && (pre[j]["o"]-pre[i-1]["o"])%2 === 0 && (pre[j]["u"]-pre[i-1]["u"])%2 === 0){
                ans = Math.max(ans, j-i+1);
            }
        }
    }
    
    return ans;
}; */

/* 二进制异或，很牛逼，复杂度O(n) */
const findTheLongestSubstring = (s) => {
    let map0 = {
        "a": 1,
        "e": 2,
        "i": 4,
        "o": 8,
        "u": 16
    };
    let seen = {0: -1}; //记录"当前前缀位异或值"与"第一次遇到的异或值前缀索引"的映射
    let ans = 0, cur = 0;

    for(let i=0; i<s.length; i++){
        if(s[i] in map0){
            cur ^= map0[s[i]];
        }
        if(cur in seen){
            ans = Math.max(ans, i-seen[cur]);   //得到一个和之前前缀异或值相同的索引，两索引之差是满足题意的一个子字符串，可以覆盖，因为要找最大的
        }else{
            seen[cur] = i;
        }
    }

    return ans;
};

console.log(findTheLongestSubstring("leetcodeisgreat"));