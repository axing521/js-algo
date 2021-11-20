/***
 * @creater:ACBash
 * @create_time:21-11-19 20:49:55
 * @last_modify:ACBash
 * @modify_time:21-11-20 14:50:27
 * @line_count:76
 **/

/* 多源BFS */
const maxDistance = (grid) => {
    const n = grid.length, directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    let queue = [], ans = -1;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == 1) queue.push([i, j]);
        }
    }

    if(queue.length == 0 || queue.length == n * n) return ans;

    while(queue.length){
        const len = queue.length;

        for(let k = 0; k < len; k++){
            const [x, y] = queue.shift();

            for(const direction of directions){
                const nextI = x + direction[0];
                const nextJ = y + direction[1];

                if(nextI >= 0 && nextI < n && nextJ >= 0 && nextJ < n && grid[nextI][nextJ] == 0){
                    grid[nextI][nextJ] = 1;
                    queue.push([nextI, nextJ]);
                }
            }
        }
        
        ans++;
    }

    return ans;
};

/* DP */
const maxDistance = (grid) => {
    const n = grid.length;
    let ans = -1;
    
    let dp = new Array(n);
    for(let i = 0; i < n; i++){
        dp[i] = new Array(n);
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            dp[i][j] = grid[i][j] ? 0 : Infinity;
        }
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j]) continue;
            if(i - 1 >= 0) dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1);
            if(j - 1 >= 0) dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1);
        }
    }

    for(let i = n - 1; i >= 0; i--){
        for(let j = n - 1; j >= 0; j--){
            if(grid[i][j]) continue;
            if(i + 1 < n) dp[i][j] = Math.min(dp[i][j], dp[i + 1][j] + 1);
            if(j + 1 < n) dp[i][j] = Math.min(dp[i][j], dp[i][j + 1] + 1);
        }
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(!grid[i][j]) ans = Math.max(ans, dp[i][j]);
        }
    }

    return ans == Infinity ? -1 : ans;
};