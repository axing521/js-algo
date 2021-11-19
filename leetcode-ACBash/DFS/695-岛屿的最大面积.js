/***
 * @creater:ACBash
 * @create_time:21-11-19 19:26:7
 * @last_modify:ACBash
 * @modify_time:21-11-19 19:26:47
 * @line_count:41
 **/

/* 测试用例 */
/* console.log(numIslands([[0,0,1,0,0,0,0,1,0,0,0,0,0],
                        [0,0,0,0,0,0,0,1,1,1,0,0,0],
                        [0,1,1,0,1,0,0,0,0,0,0,0,0],
                        [0,1,0,0,1,1,0,0,1,0,1,0,0],
                        [0,1,0,0,1,1,0,0,1,1,1,0,0],
                        [0,0,0,0,0,0,0,0,0,0,1,0,0],
                        [0,0,0,0,0,0,0,1,1,1,0,0,0],
                        [0,0,0,0,0,0,0,1,1,0,0,0,0]])); */

/* 自己模仿【200】写的 */
const dfs = (i, j, m, n, grid, area = 0) => {
    if(i < 0 || j < 0 || i >= m || j >= n) return 0;
    if(grid[i][j] == 0) return 0;
    grid[i][j] = 0;
    area++;

    area += dfs(i + 1, j, m, n, grid);
    area += dfs(i - 1, j, m, n, grid);
    area += dfs(i, j + 1, m, n, grid);
    area += dfs(i, j - 1, m, n, grid);

    return area;
}

const maxAreaOfIsland = (grid) => {
    const m = grid.length, n = grid[0].length;
    let ans = 0, area = 0;

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == 1){
                area = dfs(i, j, m, n, grid);
                ans = Math.max(ans, area);
                area = 0;
            }
        }
    }

    return ans;
}