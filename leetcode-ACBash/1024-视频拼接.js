/***
 * @creater:ACBash
 * @create_time:22-10-6 15:42:39
 * @last_modify:ACBash
 * @modify_time:22-10-6 15:56:51
 * @line_count:24
 **/

//是45，55跳跃游戏的换皮题
const videoStitching = (clips, time) => {
    let jumps = new Array(time).fill(0);

    for(const [start, end] of clips){
        for(let i = start; i < end; i++){
            jumps[i] = Math.max(jumps[i], end);
        }
    }

    let ans = 0, furthest = 0, end = 0;

    for(let i = 0; i < time; i++){
        furthest = Math.max(furthest, jumps[i]);

        if(i == end){
            if(furthest == end) return -1;
            ans++;
            end = furthest;
        }
    }

    return ans;
};