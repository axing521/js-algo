/***
 * @creater:ACBash
 * @create_time:22-3-6 17:51:49
 * @last_modify:ACBash
 * @modify_time:22-3-11 14:11:31
 * @line_count:63
 **/

/* 暴力 */
const isValidSudoku = (board) => {
    let map1 = new Map(), map2 = new Map();

    const grid = [[1, 1], [1, 4], [1, 7], [4, 1], [4, 4], [4, 7], [7, 1], [7, 4], [7, 7]];

    for(const [i, j] of grid){
        let set = new Set();
        
        for(let row = i - 1; row <= i + 1; row++){
            for(let col = j - 1; col <= j + 1; col++){
                const val = board[row][col];
                if(val == ".") continue;

                if(set.has(val)) return false;
                set.add(val);
            }
        }
    }

    for(let i = 0; i < 9; i++){
        map1.set(i, Array.from({length: 9}))
        for(let j = 0; j < 9; j++){
            if(!map2.has(j)) map2.set(j, Array.from({length: 9}));
            
            let val = board[i][j];
            
            if(val == ".") continue;
            
            val = +val;
            
            if(map1.get(i)[val]) return false;
            map1.get(i)[val] = 1;
            if(map2.get(j)[val]) return false;
            map2.get(j)[val] = 1;
        }
    }

    return true;
};

/* 一次遍历 */
const isValidSudoku = (board) => {
    let [row, col, boxes] = [{}, {}, {}];

    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            const num = board[i][j];
            
            if(num != "."){
                const id = ~~(i / 3) * 3 + ~~(j / 3);

                if(row[i + "-" + num] || col[j + "-" + num] || boxes[id + "-" + num]) return false;
                
                row[i + "-" + num] = true;
                col[j + "-" + num] = true;
                boxes[id + "-" + num] = true;
            }
        }
    }

    return true;
};