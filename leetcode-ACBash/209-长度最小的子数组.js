/***
 * @creater:ACBash
 * @create_time:22-3-30 14:38:29
 * @last_modify:ACBash
 * @modify_time:22-3-30 14:38:29
 * @line_count:62
 **/

/* console.log(minSubArrayLen(15,[5,1,3,5,10,7,4,9,2,8])); */
/* 滑动窗口，自己写的，250ms */
const minSubArrayLen = (target, nums) => {
    let left = 0,
        res = 0;
    for (let right = 0; right < nums.length; right++) {
        let [i, sum] = [left, 0];
        while (i <= right) {
            sum += nums[i++];
        }

        if (sum < target) continue;
        while (sum >= target) {
            left++;
            [i, sum] = [left, 0];
            while (i <= right) {
                sum += nums[i++];
            }
        }

        if (res === 0) res = right - left + 2;
        else res = res > right - left + 2 ? right - left + 2 : res;
    }
    return res;
};

/* 滑动窗口，西法，70ms */
const minSubArrayLen = (target, nums) => {
    let slideWindow = [], len = 0, sum = 0;
    for (let i = 0; i < nums.length + 1; i++) {
        let num = nums[i];
        while (sum >= target) {
            if (len === 0 || slideWindow.length < len) {
                len = slideWindow.length;
            }
            sum = sum - slideWindow.shift();
        }
        slideWindow.push(num);
        sum = sum + num;
    }
    return len;
}

const minSubArrayLen = (target, nums) => {
    let slow = 0, ans = Infinity, sum = 0, flag = false;

    for(let fast = 0; fast < nums.length; fast++){
        sum += nums[fast];

        if(sum >= target) flag = true;

        while(sum >= target){
            sum -= nums[slow++];
        }

        if(flag) ans = Math.min(ans, fast - slow + 2);

        flag = false;
    }

    return ans == Infinity ? 0 : ans;
};