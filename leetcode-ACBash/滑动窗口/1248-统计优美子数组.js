/***
 * @creater:ACBash
 * @create_time:22-4-3 16:44:23
 * @last_modify:ACBash
 * @modify_time:22-4-3 16:44:23
 * @line_count:55
 **/

/* 2021/10/8 20：31 自己写的滑动窗口，注意两个if块的顺序 */
const numberOfSubarrays = (nums,k) => {
    let left = 0, right = 0, len = nums.length, winMeetOdd = 0, ret = 0, leftTemp = 0;

    while(right < len){
        if(nums[right] % 2 !== 0) winMeetOdd++;

        if(winMeetOdd > k){
            while(winMeetOdd > k){
                if(nums[left] % 2 !== 0) winMeetOdd--;
                left++;
            }
        }

        if(winMeetOdd === k){
            leftTemp = left;
            while(winMeetOdd === k){
                ret++;
                if(nums[left] % 2 !== 0) winMeetOdd--;
                left++;
            }
            left = leftTemp;
            winMeetOdd = k;
        }

        right++;
    }

    return ret;
};

console.log(numberOfSubarrays([2,4,6],1));

const numberOfSubarrays = (nums, k) => {
    let ans = 0, slow1 = 0, oddNum1 = 0, slow2 = 0, oddNum2 = 0;

    for(let fast = 0; fast < nums.length; fast++){
        if(nums[fast] % 2 == 1) oddNum1++;
        if(nums[fast] % 2 == 1) oddNum2++;

        while(slow1 <= fast && oddNum1 > k){
            if(nums[slow1] % 2 == 1) oddNum1--;
            slow1++;
        }

        while(slow1 <= fast && oddNum2 >= k){
            if(nums[slow2] % 2 == 1) oddNum2--;
            slow2++;
        }

        ans += slow2 - slow1;
    }

    return ans;
};