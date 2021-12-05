/***
 * @creater:ACBash
 * @create_time:21-12-4 17:27:19
 * @last_modify:ACBash
 * @modify_time:21-12-5 12:51:13
 * @line_count:53
 **/

/* 超时 */
const lastRemaining = (n, m) => {
    let linkedList = Array.from(new Array(n), (val, index) => {
        if(index == 0) return [n - 1, index, index + 1];
        if(index == n - 1) return [index - 1, index, 0];

        return [index - 1, index, index + 1];
    });
    
    let deleteDegree = 0, start = linkedList[0], rank = 1;

    while(deleteDegree < n - 1){
        while(rank < m){
            start = linkedList[start[2]];
            rank++;
        }
        

        linkedList[start[0]][2] = linkedList[start[2]][1];
        linkedList[start[2]][0] = linkedList[start[0]][1];
        
        deleteDegree++;
        start = linkedList[start[2]];
        rank = 1;
    }

    return start[1];
};

/* Lucifer,模拟,模运算,也超时 */
const lastRemaining = (n, m) => {
    let nums = Array.from(new Array(n), (val, index) => index);
    let size = n, start = 0;

    while(size != 1){
        const i = (m + start - 1) % size;

        nums.pop(i);
        start = i;
        size--;
    }

    return nums.pop();
};

/* 数学分析法，最优 */
const lastRemaining = (n, m) => {
    let ans = 0;
    for(let size = 2; size <= n; size++){
        ans = (ans + m) % size;
    }
    return ans;
};