/* 1.内置函数 */
const strStr = (haystack,needle) => {
    return haystack.indexOf(needle);
};

/* 2.暴力匹配|搜索位|增量 */
const strStr = (haystack,needle) => {
    const m=haystack.length, n=needle.length;
    for(let i=0; i+n<=m; i++){
        let flag=true;
        for(let j=0; j<n; j++){
            if(haystack[i+j]!==needle[j]){
                flag=false;
                break;
            }
        }
        if(flag){
            return i;
        }
    }
    return -1;
};

/* 3.KMP */
const strStr = (haystack,needle) => {
    const m=haystack.length, n=needle.length;
    if(n===0) return 0;
    let pi=new Array(n).fill(0);
    for(let i=1,j=0; i<n; i++){
        while(j>0 && needle[i]!==needle[j]){
            j=pi[j-1];
        }
        if(needle[i]===needle[j]){
            j++;
        }
        pi[i]=j;
    }
    for(let i=0,j=0; i<m; i++){
        while(j>0 && haystack[i]!==needle[j]){
            j=pi[j-1];
        }
        if(haystack[i]===needle[j]){
            j++;
        }
        if(j===n){
            return i-n+1;
        }
    }
    return -1;
};
