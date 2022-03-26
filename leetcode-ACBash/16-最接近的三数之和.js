/***
 * @creater:ACBash
 * @create_time:22-3-14 12:9:12
 * @last_modify:ACBash
 * @modify_time:22-3-26 14:39:19
 * @line_count:22
 **/

 const threeSumClosest = (nums, target) => {
    const len = nums.length;
    let ans = Infinity;

    nums.sort((a, b) => a - b);

    for(let i = 0; i < len; i++){
        let left = i + 1, right = len - 1;

        while(left < right){
            const sum = nums[i] + nums[left] + nums[right];

            if(Math.abs(sum - target) < Math.abs(ans - target)) ans = sum;

            if(sum < target) left++;
            else if(sum > target) right--;
            else return sum;
        }
    }

    return ans;
};