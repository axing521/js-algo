/***
 * @creater:ACBash
 * @create_time:22-3-6 16:12:17
 * @last_modify:ACBash
 * @modify_time:22-3-6 16:47:36
 * @line_count:27
 **/

 const findShortestSubArray = (nums) => {
    let map = {};

    nums.forEach((num, index) => {
        if(!map[num]) map[num] = [0, index, index + 1];

        map[num][0]++;
        map[num][2] = index + 1;
    });

    let max = -Infinity, ans = Infinity;

    for(const num in map){
        const [freq, start, end] = map[num];
        
        if(max == freq){
            ans = Math.min(ans, end - start);
        }

        if(max < freq){
            max = freq;
            ans = end - start;
        }
    }

    return ans;
};