/***
 * @creater:ACBash
 * @create_time:22-7-13 15:46:24
 * @last_modify:ACBash
 * @modify_time:22-7-13 16:6:50
 * @line_count:46
 **/

//KMP就是先搞next数组，next数组一般是，最大相同前缀后缀长度数组右移一位，初值取0。
//KMP就是文本串的i指针不回溯，只回溯模式串的j指针：j = next[j];

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