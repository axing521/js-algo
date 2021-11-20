/***
 * @creater:ACBash
 * @create_time:21-11-20 14:50:24
 * @last_modify:ACBash
 * @modify_time:21-11-20 17:24:35
 * @line_count:129
 **/

/* 暴力，1300ms */
const islandPerimeter = (grid) => {
    const m = grid.length, n = grid[0].length;
    let ans = 0;

    const count = (i, j, num = 0) => {
        if(i == 0) num++;
        if(i == m - 1) num++;
        if(j == 0) num++;
        if(j == n - 1) num++;
        if(i + 1 < m && grid[i + 1][j] != 1) num++;
        if(i - 1 >= 0 && grid[i - 1][j] != 1) num++;
        if(j + 1 < n && grid[i][j + 1] != 1) num++;
        if(j - 1 >= 0 && grid[i][j - 1] != 1) num++;
        
        return num;
    };

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == 1) ans += count(i, j);
        }
    }

    return ans;
};

/* 我超，我自己写的DFS */
const islandPerimeter = (grid) => {
    const m = grid.length, n = grid[0].length;
    let ans = 0;

    const dfs = (i, j, num = 0) => {
        if(i < 0 || j < 0 || i >= m || j >= n) return 1;
        if(grid[i][j] == 0) return 1;
        if(grid[i][j] == "#") return 0;
        grid[i][j] = "#";

        num += dfs(i + 1, j);
        num += dfs(i - 1, j);
        num += dfs(i, j + 1);
        num += dfs(i, j - 1);

        return num;     //可以直接写成一行
    };

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == 1) ans = dfs(i, j);
        }
    }

    return ans;
};

/* Lucifer/PY */
const islandPerimeter = (grid) => {
    const m = grid.length, n = grid[0].length;

    const dfs = (i, j, ans = 0) => {
        if(i < 0 || j < 0 || i >= m || j >= n) return 0;
        if(grid[i][j] != 1) return 0;
        grid[i][j] = -1;

        ans = 4 + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1);
        
        if(i > 0 && grid[i - 1][j] != 0) ans -= 2;
        if(j > 0 && grid[i][j - 1] != 0) ans -= 2;

        return ans;
    };

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == 1) return dfs(i, j);
        }
    }
};

/* LC官方1.迭代 */
const islandPerimeter = (grid) => {
    const m = grid.length, n = grid[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let ans = 0;

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == 1){
                let count = 0;

                for(const direction of directions){
                    const nextI = i + direction[0];
                    const nextJ = j + direction[1];

                    if(nextI < 0 || nextJ < 0 || nextI >= m || nextJ >= n || grid[nextI][nextJ] == 0){
                        count++;                        
                    }
                }

                ans += count;
            }
        }
    }

    return ans;
};

/* LC官方2.DFS，就是我自己写的DFS */

/* 笨猪1.迭代（用土地个数 * 4 - 边界数 * 2 */
const islandPerimeter = (grid) => {
    const m = grid.length, n = grid[0].length;
    let land = 0, border = 0;

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == 1){
                land++;

                if(i + 1 < m && grid[i + 1][j] == 1) border++;
                if(j + 1 < n && grid[i][j + 1] == 1) border++;
            }
        }
    }

    return 4 * land - 2 * border;
};

/* 笨猪2.DFS，就是我自己写的DFS*/