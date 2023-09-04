/***
 * @creater:ACBash
 * @create_time:22-9-22 20:50:26
 * @last_modify:ACBash
 * @modify_time:22-9-22 21:7:8
 * @line_count:35
 **/

//正则表达式
var isMatch = function(s, p) {
    const re = new RegExp(p);
    let str = s.match(re) ? s.match(re) : "";

    return str[0] === s ? true : false;
};

//DP
const isMatch = (s, p) => {
    const sLen = s.length, pLen = p.length;
    let dp = Array.from({length: sLen + 1}, () => new Array(pLen + 1).fill(false));

    dp[0][0] = true;

    for(let j = 1; j < pLen + 1; j++){
        if(p[j - 1] == "*") dp[0][j] = dp[0][j - 2];
    }

    for(let i = 1; i < sLen + 1; i++){
        for(let j = 1; j < pLen + 1; j++){
            if(s[i - 1] == p[j - 1] || p[j - 1] == "."){
                dp[i][j] = dp[i - 1][j - 1];
            }else if(p[j - 1] == "*"){
                if(s[i - 1] == p[j - 2] || p[j - 2] == "."){
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
                }else{
                    dp[i][j] = dp[i][j - 2];
                }
            }
        }
    }

    return dp[sLen][pLen];
};