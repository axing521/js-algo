// 给定一个含有n个正整数的数组和一个正整数target，找出该数组中满足总和大于等于target的长度最小的连续子数组，返回长度
// 滑动窗口，快慢指针，用一个flag记录是否出现满足情况

const func1 = (target, nums) => {
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