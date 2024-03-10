// 给定一个m行n列的矩阵matrix，按照顺时针螺旋顺序，返回矩阵的所有元素
// 模拟，使用visited矩阵记录每个位置的访问与否，使用directions表示旋转方向

const func1 = (matrix) => {
    if(!matrix.length || !matrix[0].length) return [];

    const rows = matrix.length, columns = matrix[0].length;
    const visited = new Array(rows).fill(0).map(() => new Array(columns).fill(false));
    const total = rows * columns;
    const order = new Array(total).fill(0);

    let directionIndex = 0, row = 0, column = 0;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    for(let i = 0; i < total; i++){
        order[i] = matrix[row][column];
        visited[row][column] = true;

        const nextRow = row + directions[directionIndex][0], nextColumn = column + directions[directionIndex][1];

        if(!(0 <= nextRow && nextRow < rows && 0 <= nextColumn && nextColumn < columns && !(visited[nextRow][nextColumn]))){
            directionIndex = (directionIndex + 1) % 4;
        }

        row += directions[directionIndex][0];
        column += directions[directionIndex][1];
    }

    return order;
};

// 按层模拟可以使得空间复杂度为O(1)，使用left，right，top，bottom记录层

const func2 = (matrix) => {
    if(!matrix.length || !matrix[0].length) return [];

    const rows = matrix.length, columns = matrix[0].length;
    const order = [];
    let left = 0, right = columns - 1, top = 0, bottom = rows - 1;

    while(left <= right && top <= bottom){
        for(let column = left; column <= right; column++){
            order.push(matrix[top][column]);
        }

        for(let row = top + 1; row <= bottom; row++){
            order.push(matrix[row][right]);
        }

        if(left < right && top < bottom){
            for(let column = right - 1; column > left; column--){
                order.push(matrix[bottom][column]);
            }

            for(let row = bottom; row > top; row--){
                order.push(matrix[row][left]);
            }
        }

        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    }

    return order;
};