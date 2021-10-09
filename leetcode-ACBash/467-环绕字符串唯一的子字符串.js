/* 失败作：索引跟值有关系，前缀和 */
/* const findSubstringInWraproundString = (p) => {
    const len = p.length;
    const s = "zabcdefghijklmnopqrstuvwxyz";
    let prefix = 1, ans = 1;

    for(let i=1; i<len; i++){
        if(p.charCodeAt(i)-p.charCodeAt(i-1) === 1  ||  p.charCodeAt(i)-p.charCodeAt(i-1) === -25){
            prefix++;
        }else{
            prefix = 1;
        }

        ans += prefix;
    }

    return ans;
}; */

/* LC:前缀和，hash的妙用 */
const findSubstringInWraproundString = (p) => {
    if(!p.length) return 0;

    let pre = 1, res = 0, hash = { [p[0]]: 1 };

    for(let i=1; i<p.length; i++){
        if(p.charCodeAt(i)-p.charCodeAt(i-1) === -25  ||  p.charCodeAt(i)-p.charCodeAt(i-1) === 1){
            pre++;
        }else{
            pre = 1;
        }

        hash[p[i]] = hash[p[i]] ? Math.max(hash[p[i]], pre) : pre;
    }

    for(let key in hash){
        res += hash[key];
    }

    return res;
};

console.log(findSubstringInWraproundString("abab"));