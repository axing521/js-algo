/***
 * @creater:ACBash
 * @create_time:22-9-27 19:31:15
 * @last_modify:ACBash
 * @modify_time:22-9-30 0:55:31
 * @line_count:16
 **/

//装电池
const wordBreak = (s, wordDict) => {
    let dp = new Array(s.length + 1).fill(false);

    dp[0] = true;

    for(let i = 1; i <= s.length; i++){
        for(const word of wordDict){
            if(i >= word.length && dp[i - word.length] && s.slice(i - word.length, i) == word){
                dp[i] = true;
            }
        }
    }

    return dp[s.length];
};