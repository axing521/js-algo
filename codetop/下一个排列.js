// 整数数组的下一个排列，是其整数的下一个字典序更大的排列 [2, 3, 1] => [3, 1, 2], 只能原地修改数组, O(1)空间

const func1 = (nums) => {
    let i = nums.length - 2;

    while(i >= 0 && nums[i] >= nums[i + 1]){    // 寻找第一个小于右邻居的数
        i--;
    }

    if(i >= 0){
        let j = nums.length - 1;
        while(j >= 0 && nums[j] <= nums[i]){ // 寻找第一个大于nums[i]的数
            j--;
        }

        [nums[i], nums[j]] = [nums[j], nums[i]]; // 两数交换，实现变大
    }

    let left = i + 1;
    let right = nums.length - 1;

    while(left < right){
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};