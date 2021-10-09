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
const helper = (grid,rows,cols,i,j,num=0) => {
    if(i<0 || j<0 || i>rows-1 || j>cols-1 || grid[i][j]===0) return 0;

    grid[i][j] = 0;
    num++;
    num += helper(grid,rows,cols,i+1,j);
    num += helper(grid,rows,cols,i-1,j);
    num += helper(grid,rows,cols,i,j+1);
    num += helper(grid,rows,cols,i,j-1);
    return num;
}

const maxAreaOfIsland = (grid) => {
    let stack0 = [0];
    let rows = grid.length;
    if(rows === 0) return 0;
    let cols = grid[0].length;
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(grid[i][j] === 1){
                stack0.push(helper(grid,rows,cols,i,j));
            }
        }
    }
    return Math.max(...stack0);
}