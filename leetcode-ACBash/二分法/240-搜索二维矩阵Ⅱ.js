/***
 * @creater:ACBash
 * @create_time:22-7-15 11:7:16
 * @last_modify:ACBash
 * @modify_time:22-7-15 11:7:24
 * @line_count:42
 **/

//二分，mlogn
const searchMatrix = (matrix, target) => {
    const m = matrix.length, n = matrix[0].length;

    for(const row of matrix){
        let left = 0, right = n - 1;
        
        while(left <= right){
            const mid = (left + right) >> 1;

            if(row[mid] == target) return true;
            if(row[left] == target) return true;
            if(row[right] == target) return true;

            if(row[mid] > target){
                right = mid - 1;
            }else if(row[mid] < target){
                left = mid + 1;
            }
        }
    }

    return false;
};

//Z字
const searchMatrix = (matrix, target) => {
    const m = matrix.length, n = matrix[0].length;
    let i = 0, j = n - 1;

    while(i < m && j >= 0){
        if(matrix[i][j] == target){
            return true;
        }else if(matrix[i][j] > target){
            j--;
        }else if(matrix[i][j] < target){
            i++;
        }
    }

    return false;
};