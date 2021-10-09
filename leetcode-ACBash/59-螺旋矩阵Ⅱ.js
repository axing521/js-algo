/* 1.模拟撞墙 */
const generateMatrix = (n) => {
    let curNum=1;
    const maxNum=n*n;
    const directions=[[0,1],[1,0],[0,-1],[-1,0]];
    let row=0, col=0, directionIndex=0;
    let matrix=new Array(n).fill(0).map(() => new Array(n).fill(0));
    while(curNum<=maxNum){
        matrix[row][col]=curNum;
        curNum++;
        let nextRow = row + directions[directionIndex][0];
        let nextCol = col + directions[directionIndex][1];
        if(nextRow<0 || nextRow>=n || nextCol<0 || nextCol>=n || matrix[nextRow][nextCol]!==0){
            directionIndex = (directionIndex + 1) % 4;
        }
        row = row + directions[directionIndex][0];
        col = col + directions[directionIndex][1];
    }
    return matrix;
};

/* 2.按层模拟 */
const generateMatrix = (n) => {
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let left=0, top=0, right=n-1, bottom=n-1;
    let curNum=1;
    while(left<=right && top<=bottom){
        for(let col=left; col<=right; col++){
            matrix[top][col] = curNum++;
        }
        for(let row=top+1; row<=bottom; row++){
            matrix[row][right] = curNum++;
        }
        if(left<right && top<=bottom){
            for(let col=right-1; col>=left; col--){
                matrix[bottom][col] = curNum++;
            }
            for(let row=bottom-1; row>top; row--){
                matrix[row][left] = curNum++;
            }
        }
        left++;
        right--;
        top++;
        bottom--;
    }
    return matrix;
}