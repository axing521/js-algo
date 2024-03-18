// 给定一个正整数n，生成一个包含1到n^2的所有元素，且元素按顺时针螺旋排列的matrix

const func1 = (n) => {
    const maxNum = n ** 2;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let curNum = 1, row = 0, col = 0, directionIndex = 0;
    let matrix = Array.from({length: n}, () => new Array(n).fill(0));

    while(curNum <= maxNum){
        matrix[row][col] = curNum;
        curNum++;

        const nextRow = row + directions[directionIndex][0];
        const nextCol = col + directions[directionIndex][1];

        if(!(0 <= nextRow && nextRow < n && 0 <= nextCol && nextCol < n && matrix[nextRow][nextCol] == 0)){
            directionIndex = (directionIndex + 1) % 4;
        }

        row += directions[directionIndex][0];
        col += directions[directionIndex][1];
    }

    return matrix;
};