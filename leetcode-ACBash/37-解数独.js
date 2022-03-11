/***
 * @creater:ACBash
 * @create_time:22-3-11 14:11:29
 * @last_modify:ACBash
 * @modify_time:22-3-11 15:17:15
 * @line_count:40
 **/

 const solveSudoku = (board) => {
    const isValid = (i, j, val) => {
        for(let k = 0; k < 9; k++){
            if(board[i][k] == val || board[k][j] == val) return false;
        }

        const [rowStart, colStart] = [~~(i / 3) * 3, ~~(j / 3) * 3];

        for(let row = rowStart; row < rowStart + 3; row++){
            for(let col = colStart; col < colStart + 3; col++){
                if(board[row][col] == val) return false;
            }
        }

        return true;
    };

    const backtrack = () => {
        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                if(board[i][j] == "."){
                    for(let val = 1; val <= 9; val++){
                        if(isValid(i, j, `${val}`)){
                            board[i][j] = `${val}`;
                            if(backtrack()) return true;
                            board[i][j] = ".";  //注意这个退出，回溯的灵魂
                        }
                    }
                    return false;
                }
            }
        }

        return true;
    };

    backtrack();

    return board;
};