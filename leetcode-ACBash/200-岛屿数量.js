/***
 * @creater:ACBash
 * @create_time:21-11-19 18:55:14
 * @last_modify:ACBash
 * @modify_time:21-11-19 18:57:23
 * @line_count:29
 **/

/* https://leetcode-cn.com/problems/number-of-islands/solution/pythonjavascript-tao-lu-dfs200-dao-yu-shu-liang-by/ */

/* 二维数组DFS */
const dfs = (i, j, m, n, grid) => {
    if(i < 0 || j < 0 || i >= m || j >= n) return;
    if(grid[i][j] == "0") return;
    grid[i][j] = "0";

    dfs(i + 1, j, m, n, grid);
    dfs(i - 1, j, m, n, grid);
    dfs(i, j + 1, m, n, grid);
    dfs(i, j - 1, m, n, grid);
};

const numIslands = (grid) => {
    const m = grid.length, n = grid[0].length;
    let ans = 0;

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == "1"){
                dfs(i, j, m, n, grid);
                ans++;
            }
        }
    }

    return ans;
};