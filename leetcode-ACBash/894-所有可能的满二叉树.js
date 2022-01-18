/***
 * @creater:ACBash
 * @create_time:22-1-18 19:24:57
 * @last_modify:ACBash
 * @modify_time:22-1-18 21:31:25
 * @line_count:34
 **/

/* 分而治之，记忆化递归 */
const allPossibleFBT = (n) => {
    if(n == 1) return [new TreeNode(0)];
    if(n % 2 == 0) return [];

    let memo = {0: [], 1: [new TreeNode(0)]};

    const dfs = (n) => {
        if(!memo[n]){
            let ans = [];

            for(let i = 0; i < n; i++){
                const j = n - 1 - i;

                for(const left of dfs(i)){
                    for(const right of dfs(j)){
                        let bns = new TreeNode(0);
                        bns.left = left;
                        bns.right = right;
                        ans.push(bns);                      
                    }
                }
            }

            memo[n] = ans;
        }

        return memo[n];
    };

    dfs(n);

    return memo[n];
};