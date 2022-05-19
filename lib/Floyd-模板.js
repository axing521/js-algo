/***
 * @creater:ACBash
 * @create_time:22-5-16 16:22:20
 * @last_modify:ACBash
 * @modify_time:22-5-19 16:20:49
 * @line_count:29
 **/

/* 以LC-1462为例 */
const checkIfPrerequisite = (n, preList, queries) => {
    let minPaths = Array.from({length: n}, () => new Array(n).fill(Infinity));

    for(let i = 0; i < n; i++){
        minPaths[i][i] = 0;
    }

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

    let ans = [];

    for(const [u, v] of queries){
        if(minPaths[u][v] == Infinity) ans.push(false);
        else ans.push(true);
    }

    return ans;
};