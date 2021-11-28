/***
 * @creater:ACBash
 * @create_time:21-11-25 18:31:55
 * @last_modify:ACBash
 * @modify_time:21-11-28 12:3:23
 * @line_count:50
 **/

/* Floyd，多源最短路径 */
const checkIfPrerequisite = (n, preList, queries) => {
    let minPaths = Array.from(new Array(n), () => new Array(n).fill(Infinity));
    let ans = [];

    for(const [u, v] of preList){
        minPaths[u][v] = 1;
    }

    for(let k = 0; k < n; k++){
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                minPaths[i][j] = Math.min(minPaths[i][j], minPaths[i][k] + minPaths[k][j]);
            }
        }
    }

    for(const [u, v] of queries){
        if(minPaths[u][v] != Infinity) ans.push(true);
        else ans.push(false);
    }

    return ans;
};

/* 2，floyd,用布尔值 */
const checkIfPrerequisite = (n, preList, queries) => {
    let minPaths = Array.from(new Array(n), () => new Array(n).fill(false));
    let ans = [];

    for(const [u, v] of preList){
        minPaths[u][v] = true;
    }

    for(let k = 0; k < n; k++){
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                minPaths[i][j] = minPaths[i][j] || (minPaths[i][k] && minPaths[k][j]);
            }
        }
    }

    for(const [u, v] of queries){
        ans.push(minPaths[u][v]);
    }

    return ans;
};

/* 好像用DFS也可以做，下次试试 */