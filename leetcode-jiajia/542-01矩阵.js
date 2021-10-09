/* 测试用例 */
/* console.log(updateMatrix([[0,0,0],[0,1,0],[1,1,1]])); */

/* 暴力法:
一一遍历矩阵中元素：
如果元素值为 0，则距离得出为 0
如果元素值不为 0，则对该元素位置进行 bfs，找出最短距离。 */
/* 缺点：耗时9792ms */
const updateMatrix = (mat) => {
    let rows = mat.length;
    let cols = mat[0].length;
    let newMat = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(mat[i][j]!==0){
                newMat[i][j] = matBFS(i,j);
            }
        }
    }
    return newMat;

    function matBFS(row,col){
        let dist = 0;
        let queue0 = [[row,col]];
        let visited = new Array(rows).fill(0).map(() => new Array(cols).fill(false));
        visited[row][col] = true;
        while(queue0.length){
            dist++;
            let len = queue0.length;
            
            for(let i=0; i<len; i++){
                let top = queue0.shift();

                if(top[0]+1 < rows && !visited[top[0]+1][top[1]]){
                    if(mat[top[0]+1][top[1]] === 0) return dist;
                    queue0.push([top[0]+1, top[1]]);
                    visited[top[0]+1][top[1]] = true;
                }
                if(top[0]-1 >= 0 && !visited[top[0]-1][top[1]]){
                    if(mat[top[0]-1][top[1]] === 0) return dist;
                    queue0.push([top[0]-1, top[1]]);
                    visited[top[0]-1][top[1]] = true;
                }
                if(top[1]+1 < cols && !visited[top[0]][top[1]+1]){
                    if(mat[top[0]][top[1]+1] === 0) return dist;
                    queue0.push([top[0], top[1]+1]);
                    visited[top[0]][top[1]+1] = true;
                }
                if(top[1]-1 >= 0 && !visited[top[0]][top[1]-1]){
                    if(mat[top[0]][top[1]-1] === 0) return dist;
                    queue0.push([top[0], top[1]-1]);
                    visited[top[0]][top[1]-1] = true;
                }
            
            }
        }
    }
};

/* 多源BFS，从0入手 */
const updateMatrix = (mat) => {
    let rows = mat.length;
    let cols = mat[0].length;
    let queue = [];
    let newMat = new Array(rows).fill(0).map(() => new Array(cols).fill(-1));

    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(mat[i][j] === 0){
                newMat[i][j] = 0;
                queue.push([i,j]);
            }
        }
    }

    let dist = 0;
    while(queue.length){
        let len = queue.length;
        dist++;
        for(let i=0; i<len; i++){
            let top = queue.shift();
            if(top[0]+1<rows && newMat[top[0]+1][top[1]]===-1){
                newMat[top[0]+1][top[1]] = dist;
                queue.push([top[0]+1,top[1]]);
            }
            if(top[0]-1>=0 && newMat[top[0]-1][top[1]]===-1){
                newMat[top[0]-1][top[1]] = dist;
                queue.push([top[0]-1,top[1]]);
            }
            if(top[1]+1<cols && newMat[top[0]][top[1]+1]===-1){
                newMat[top[0]][top[1]+1] = dist;
                queue.push([top[0],top[1]+1]);
            }
            if(top[1]-1>=0 && newMat[top[0]][top[1]-1]===-1){
                newMat[top[0]][top[1]-1] = dist;
                queue.push([top[0],top[1]-1]);
            }
        }
    }
    return newMat;
};