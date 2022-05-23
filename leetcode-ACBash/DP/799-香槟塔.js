/***
 * @creater:ACBash
 * @create_time:22-5-23 17:29:46
 * @last_modify:ACBash
 * @modify_time:22-5-23 18:30:33
 * @line_count:20
 **/

/* DP, 模拟香槟塔的容量状态 */
const champagneTower = (poured, row, col) => {
    let DP = Array.from({length: row + 1}, () => new Array(row + 1).fill(0));

    DP[0][0] = poured;

    for(let i = 0; i < row + 1; i++){
        for(let j = 0; j <= i; j++){
            let overflow = (DP[i][j] - 1) / 2;

            if(overflow > 0 && i < row && j <= col){
                DP[i + 1][j] += overflow;

                if(j + 1 <= col) DP[i + 1][j + 1] += overflow;
            }
        }
    }

    return Math.min(1, DP[row][col])
};