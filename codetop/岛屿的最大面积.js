// 给定一个大小为 m * n 的二进制矩阵grid，计算grid中最大的岛屿面积

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

const func1 = (grid) => {
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
};