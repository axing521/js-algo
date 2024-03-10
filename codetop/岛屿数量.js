// 给定一个由'1'和'0'组成的二维网格，计算网格中岛屿的数量
// 二维数组DFS，如果有1，那么dfs并且ans++，dfs中将1反转为0

const dfs = (i, j, m, n, grid) => {
    if(i < 0 || j < 0 || i >= m || j >= n) return;
    if(grid[i][j] == "0") return;
    grid[i][j] = "0";

    dfs(i + 1, j, m, n, grid);
    dfs(i - 1, j, m, n, grid);
    dfs(i, j + 1, m, n, grid);
    dfs(i, j - 1, m, n, grid);
};

const func1 = (grid) => {
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