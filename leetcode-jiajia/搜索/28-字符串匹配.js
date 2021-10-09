/* JS内置indexOf()
var strstr=function(haystack,needle){
    return haystack.indexOf(needle);
} */

/* 暴力匹配法|搜索位|增量
var strStr = function(haystack, needle) {
    const m=haystack.length, n=needle.length;
    for(i=0; i+n<=m ; i++){
        let flag=true;
        for(j=0; j<n ; j++){
            if(haystack[i+j] != needle[j]){
                flag=false;
                break;
            }
        }
        if(flag){
            return i;
        }
    }
    return -1;
}; */

/* KMP
var strStr = function(haystack, needle) {
    const n = haystack.length, m = needle.length;
    if (m === 0) {
        return 0;
    }
    const pi = new Array(m).fill(0);
    for (let i = 1, j = 0; i < m; i++) {
        while (j > 0 && needle[i] !== needle[j]) {
            j = pi[j - 1];
        }
        if (needle[i] == needle[j]) {
            j++;
        }
        pi[i] = j;
    }
    for (let i = 0, j = 0; i < n; i++) {
        while (j > 0 && haystack[i] != needle[j]) {
            j = pi[j - 1];
        }
        if (haystack[i] == needle[j]) {
            j++;
        }
        if (j === m) {
            return i - m + 1;
        }
    }
    return -1;
}; */

