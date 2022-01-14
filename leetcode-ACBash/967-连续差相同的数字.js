/***
 * @creater:ACBash
 * @create_time:22-1-13 21:59:3
 * @last_modify:ACBash
 * @modify_time:22-1-14 14:29:14
 * @line_count:54
 **/

/* 回溯。DFS */
const numsSameConsecDiff = (n, k) => {
    let ans = [];

    const backtrack = (track, level) => {
        if(level == n){
            let str = track.join("");
            ans.push(+str);
            return;
        }

        const last = track[track.length - 1];

        if(last + k <= 9){
            track.push(last + k);
            backtrack(track, level + 1);
            track.pop();
        }

        if(k != 0 && last - k >= 0){
            track.push(last - k);
            backtrack(track, level + 1);
            track.pop();
        }
    };

    for(let i = 1; i <= 9; i++){
        backtrack([i], 1);
    }

    return ans;
};

/* 迭代,像是BFS层序遍历 */
const numsSameConsecDiff = (n, k) => {
    let ans = Array.from({length: 9}, (val, index) => index + 1);   //ans = [1, 2, ..., 9];
    let level = 1;

    while(level < n){
        const len = ans.length;

        for(let i = 0; i < len; i++){
            const num = ans.shift();
            const last = num % 10;

            if(last + k <= 9) ans.push(num * 10 + last + k);
            if(k != 0 && last - k >= 0) ans.push(num * 10 + last - k);
        }

        level++;
    }

    return ans;
};