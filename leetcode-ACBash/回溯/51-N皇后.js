/***
 * @creater:ACBash
 * @create_time:22-7-9 10:54:22
 * @last_modify:ACBash
 * @modify_time:22-7-12 17:10:58
 * @line_count:37
 **/

const solveNQueens = (n) => {
    let ans = [];
    let board = []; //[0, 2, 3, 1];
    
    const backtrack = (row, track) => {
        if(row == n){
            ans.push(
                track.map(col => {
                    let arr = new Array(n).fill(".");
                    arr[col] = "Q";
                    return arr.join("");
                })
            );
            return;
        }
        
        const judge = (track, col) => {
            return track.some((c, r) => {
                return c == col || (c - r) == (col - row) || (c + r) == (col + row);
            });
        };

        for(let col = 0; col < n; col++){
            if(judge(track, col)) continue;
            /* backtrack(row + 1, [...track, col]); */
            track.push(col);
            backtrack(row + 1, track);
            track.pop();
        }
    };

    backtrack(0, board);
    
    return ans;
};

console.log(solveNQueens(4));