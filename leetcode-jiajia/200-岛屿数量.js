/* https://leetcode-cn.com/problems/number-of-islands/solution/pythonjavascript-tao-lu-dfs200-dao-yu-shu-liang-by/ */

/* 二维数组DFS */
const helper = (grid,rows,cols,i,j) => {
    if(grid[i][j]==="0" || i<0 || j<0 || i>rows-1 || j>cols-1) return;

    grid[i][j] = "0";
    helper(grid,rows,cols,i+1,j);
    helper(grid,rows,cols,i-1,j);
    helper(grid,rows,cols,i,j+1);
    helper(grid,rows,cols,i,j-1);
}

const numIslands = (grid) => {
    let res = 0;
    let rows = grid.length;
    if(rows === 0) return 0;
    let cols = grid[0].length;
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(grid[i][j] === "1"){
                helper(grid,rows,cols,i,j);
                res++;
            }
        }
    }
    return res;
}