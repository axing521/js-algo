/***
 * @creater:ACBash
 * @create_time:21-12-28 15:2:51
 * @last_modify:ACBash
 * @modify_time:22-1-7 10:43:0
 * @line_count:37
 **/

/* 循环队列 */
const predictPartyVictory = (senate) => {
    const len = senate.length;
    let radiant = [], dire = [];

    for(const [i, ch] of Array.from(senate).entries()){
        if(ch == "R") radiant.push(i);
        else dire.push(i);
    }

    while(radiant.length && dire.length){
        if(radiant[0] < dire[0]) radiant.push(radiant[0] + len);
        else dire.push(dire[0] + len);

        radiant.shift();
        dire.shift();
    }

    return radiant.length ? "Radiant" : "Dire";
};

/* 竞技场 + 候车厅 */
const predictPartyVictory = (senate) => {
    let queue = Array.from(senate), stack = [];

    while(queue.length){
        let challenger = queue.shift();

        if(stack.length && stack[stack.length - 1] != challenger){
            queue.push(stack.pop());
        }else{
            stack.push(challenger);
        }
    }

    return stack[0] == "R" ? "Radiant" : "Dire";
};