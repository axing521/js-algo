/***
 * @creater:ACBash
 * @create_time:22-7-13 15:46:24
 * @last_modify:ACBash
 * @modify_time:22-11-3 13:29:14
 * @line_count:103
 **/

//建议看md,md仅作图的辅助理解
//KMP就是先搞next数组，next数组一般是，最大相同前缀后缀长度数组右移一位，初值取0。
//KMP就是文本串的i指针不回溯，只回溯模式串的j指针：j = next[j];

//计算前缀函数pi的朴素算法(真前缀 == 真后缀)
const prefix_function = (s) => {
    const n = s.length;
    let pi = new Array(n).fill(0);

    for(let i = 1; i < n; i++){
        for(let j = i; j >= 0; j--){
            if(s.substring(0, j) == s.substring(i - j + 1, i + 1)){
                pi[i] = j;
                break;
            }
        }
    }

    return pi;
};

//计算前缀函数pi的高效算法(第一个重要的观察是 相邻的前缀函数值至多增加 1 。)
//aabaaab 的前缀函数为 [0, 1, 0, 1, 2, 2, 3]
const prefix_function = (s) => {
    const n = s.length;
    let pi = new Array(n).fill(0);

    for(let i = 1; i < n; i++){
        for(let j = pi[i - 1] + 1; j >= 0; j--){
            if(s.substring(0, j) == s.substring(i - j + 1, i + 1)){
                pi[i] = j;
                break;
            }
        }
    }

    return pi;
};

//第二个重要的观察是看md，j 等价于 子串 s[pi[i] - 1] 的前缀函数值，即 j = pi[pi[i] - 1];
//同理，次于 j 的第二长度 等价于 s[j - 1]的前缀函数值，即 j(2) = pi[j - 1];
//关于 j 的状态转移方程：j(n) = pi[j(n - 1) - 1];
const prefix_function = (s) => {
    const n = s.length;
    let pi = new Array(n).fill(0);

    for(let i = 1; i < n; i++){
        let j = pi[i - 1];
        
        while(j > 0 && s[i] != s[j]){
            j = pi[j - 1];
        }

        if(s[i] == s[j]) j++;
        pi[i] = j;
    }

    return pi;
}

//获取模式串P的next数组
const getNext = (p) => {
    let next = [];
    next[0] = -1;
    
    const pLen = p.length;
    
    let k = -1, j = 0;

    while(j < pLen){
        if(k == -1 || p[k] == p[j]){
            k++;
            j++;
            if(p[k] == p[j]){
                next[j] = next[k];
            }else{
                next[j] = k;
            }
        }else{
            k = next[k];
        }
    }

    return next;
};

const KMP = (s, p) => {
    let i = 0, j = 0;
    const sLen = s.length, pLen = p.length;

    let next = getNext(p);

    while(i < sLen && j < pLen){
        if(s[i] == p[j]){
            i++;
            j++;
        }else{
            j = next[j];
        }
    }

    return j == pLen ? i - j : -1;
};