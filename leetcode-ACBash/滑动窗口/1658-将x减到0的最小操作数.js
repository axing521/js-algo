/***
 * @creater:ACBash
 * @create_time:22-4-3 17:34:44
 * @last_modify:ACBash
 * @modify_time:22-4-3 17:34:44
 * @line_count:90
 **/

/* 失败作 */
/* const minOperations = (nums,x) => {
    const len = nums.length;
    let left = 0, right = len-1, ret = 0, sum = 0;

    while(left <= right){
        let chosen;
        if(nums[left] > nums[right]){
            chosen = nums[right];
            right--;

        }else{
            chosen = nums[left];
            left++;
        }

        sum += chosen;

        if(sum > x){
            ret = -1;
            break;


        }else if(sum < x){
            ret++;


        }else{
            ret++;
            return ret;
        }
    }

    return ret;
}; */

/* LC:最少操作数，反向思维，很秀 */
const minOperations = (nums,x) => {
    const len = nums.length;
    const total = nums.reduce((prev,cur) => prev+cur, 0);

    if(total < x) return -1;
    
    let ret = Infinity, sum = 0, left = 0, right = 0;
    
    while(right < len){
        sum += nums[right];

        while(total-sum < x){
            sum -= nums[left];
            left++;
        }   //窗口外的值已经小于x了，需要收缩窗口

        if(total-sum === x){
            ret = Math.min(ret, len-(right-left+1));
        }

        right++;
    }

    return ret===Infinity ? -1 : ret;
};

/* 题目中nums[i] >= 1，不会有0的情况，所以能成功,如果有0怎么办？？ */
const minOperations = (nums, x) => {
    let allSum = 0;
    
    for(const num of nums){
        allSum += num;
    }
    
    let target = allSum - x;

    if(target == 0) return nums.length;

    let ans = -1, slow = 0, sum = 0;

    for(let fast = 0; fast < nums.length; fast++){
        sum += nums[fast];
        
        while(slow <= fast && sum >= target){
            if(sum == target) ans = Math.max(ans, fast - slow + 1);
            sum -= nums[slow++];
        }
    }

    if(ans == -1) return -1;

    return nums.length - ans;
};