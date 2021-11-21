/***
 * @creater:ACBash
 * @create_time:21-11-21 13:23:20
 * @last_modify:ACBash
 * @modify_time:21-11-21 14:19:50
 * @line_count:45
 **/

/* 归结为“岛屿数量”问题，关键在于映射成3 * n的网格 */
const regionsBySlashes = (grid) => {
    const n = grid.length;
    const newGrid = new Array(3 * n).fill(0).map(val => new Array(3 * n).fill(0));
    let ans = 0;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == "/"){
                newGrid[3 * i][3 * j + 2] = 1;
                newGrid[3 * i + 1][3 * j + 1] = 1;
                newGrid[3 * i + 2][3 * j] = 1;
            }

            if(grid[i][j] == "\\"){
                newGrid[3 * i][3 * j] = 1;
                newGrid[3 * i + 1][3 * j + 1] = 1;
                newGrid[3 * i + 2][3 * j + 2] = 1;
            }
        }
    }

    const dfs = (i, j) => {
        if(i >= 0 && j >= 0 && i < 3 * n && j < 3 * n && newGrid[i][j] == 0){
            newGrid[i][j] = 1;
            dfs(i + 1, j);            
            dfs(i - 1, j);            
            dfs(i, j + 1);            
            dfs(i, j - 1);            
        }
    };

    for(let i = 0; i < 3 * n; i++){
        for(let j = 0; j < 3 * n; j++){
            if(newGrid[i][j] == 0){
                dfs(i, j);
                ans++;
            }
        }
    }

    return ans;
};

/* 看到有用并查集的，下次看看，不过感觉没划3 * n的思路好 */