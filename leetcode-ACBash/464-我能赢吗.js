/***
 * @creater:ACBash
 * @create_time:22-9-27 15:7:34
 * @last_modify:ACBash
 * @modify_time:22-9-27 17:47:51
 * @line_count:53
 **/

//回溯
const canIWin = (maxChoosableInteger, desiredTotal) => {
    if(maxChoosableInteger >= desiredTotal) return true;
    if((1 + maxChoosableInteger) * maxChoosableInteger / 2 < desiredTotal) return false;

    const backtrack = (visited, sum) => {
        if(sum >= desiredTotal) return false;
        if(visited.size == maxChoosableInteger) return false;

        for(let i = 1; i <= maxChoosableInteger; i++){
            if(!visited.has(i)){
                visited.add(i);

                if(!backtrack(visited, sum + i)){
                    visited.delete(i);
                    return true;
                }

                visited.delete(i);
            }
        }

        return false;
    };

    return backtrack(new Set(), 0);
};

//记忆化递归 + 状压DP
const canIWin = (maxChoosableInteger, desiredTotal) => {
    if(maxChoosableInteger >= desiredTotal) return true;
    if((1 + maxChoosableInteger) * maxChoosableInteger / 2 < desiredTotal) return false;

    let dp = {};

    const recursive = (targetTotal, state) => {
        if(dp[state] !== undefined) return dp[state];

        for(let i = 1; i <= maxChoosableInteger; i++){
            let cur = 1 << i;

            if(cur & state) continue;

            if(i >= targetTotal) return dp[state] = true;

            if(!recursive(targetTotal - i, state | cur)) return dp[state] = true;
        }

        return dp[state] = false;
    };

    return recursive(desiredTotal, 0);
};