/***
 * @creater:ACBash
 * @create_time:22-10-6 16:4:1
 * @last_modify:ACBash
 * @modify_time:22-10-6 18:15:1
 * @line_count:29
 **/

//和45，55跳跃游戏以及1024视频拼接都是一类题目
const minTaps = (n, ranges) => {
    let jumps = new Array(n).fill(0);

    for(let i = 0; i < ranges.length; i++){
        const start = Math.max(i - ranges[i], 0);
        const end = Math.min(i + ranges[i], n);
        
        for(let j = start; j <= end; j++){
            jumps[j] = Math.max(jumps[j], end);
        }
    }

    let ans = 0, furthest = 0, end = 0;

    for(let i = 0; i < n; i++){
        if(jumps[i] == 0) return -1;
        
        furthest = Math.max(furthest, jumps[i]);

        if(i == end){
            if(furthest == end) return -1;
            ans++;
            end = furthest;
        }
    }

    return ans;
};