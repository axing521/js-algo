/***
 * @creater:ACBash
 * @create_time:22-3-6 16:47:34
 * @last_modify:ACBash
 * @modify_time:22-3-6 17:3:53
 * @line_count:13
 **/

 const twoSum = (nums, target) => {
    let map = new Map(), ans = [];

    nums.forEach((num, index) => {
        if(map.has(num)){
            ans = [map.get(num), index]
        }

        map.set(target - num, index);
    });

    return ans;
};