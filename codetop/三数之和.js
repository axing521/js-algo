// 给定一个整数数组nums，判断是否存在三元组[nums[i], nums[j], nums[k]]满足nums[i] + nums[j] + nums[k] == 0, 返回所有
// 先给nums排序，然后先固定最大的k，再双指针找left，right

const func1 = (nums) => {
    const len = nums.length;
    let ans = [];

    nums.sort((a, b) => a - b);

    for(let k = len - 1; k > 1; k--){
        if(nums[k] < 0) break;

        if(k < len - 1 && nums[k] == nums[k + 1]) continue;

        let left = 0, right = k - 1;

        while(left < right){
            if(nums[left] + nums[right] + nums[k] === 0){
                ans.push([nums[left], nums[right], nums[k]]);

                while(left < right && nums[left] == nums[left + 1]) left++;
                while(left < right && nums[right] == nums[right - 1]) right--;

                left++;
                right--;

            }else if(nums[left] + nums[right] + nums[k] > 0){
                right--;
            }else if(nums[left] + nums[right] + nums[k] < 0){
                left++;
            }
        }
    }

    return ans;
};