// 搜索m*n矩阵中的目标值target（矩阵中每行每列升序）

// 按行遍历，二分，双指针
const func1 = (matrix, target) => {
    const rows = matrix.length, columns = matrix[0].length;

    for(const row of matrix){
        let left = 0, right = columns - 1;

        while(left <= right){
            const mid = (left + right) >> 1;

            if(row[mid] == target) return true;
            if(row[left] == target) return true;
            if(row[right] == target) return true;

            if(row[mid] > target) right = mid - 1;
            else left = mid + 1;
        }
    }

    return false;
};

// 从右上角到左下角看是一个BST
const func2 = (matrix, target) => {
    const rows = matrix.length, columns = matrix[0].length;
    let i = 0, j = n - 1;

    while(i < rows && j >= 0){
        if(matrix[i][j] == target) return true;
        else if(matrix[i][j] > target) j--;
        else if(matrix[i][j] < target) i++;
    }

    return false;
};