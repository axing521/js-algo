/***
 * @creater:ACBash
 * @create_time:22-5-24 12:50:49
 * @last_modify:ACBash
 * @modify_time:22-5-24 16:30:11
 * @line_count:59
 **/

/* 模仿 两数之和 & 有效三角形，1100ms*/
const threeSum = (nums) => {
    const len = nums.length;
    let sumFor0 = [];

    nums.sort((a, b) => a - b);

    let set = new Set();

    for(let k = len - 1; k > 1; k--){
        let map = new Map();

        for(let i = 0; i < k; i++){
            if(map.has(nums[i]) && !set.has(`${map.get(nums[i])} -- ${nums[i]} -- ${nums[k]}`)){
                set.add(`${map.get(nums[i])} -- ${nums[i]} -- ${nums[k]}`);
                sumFor0.push([map.get(nums[i]), nums[i], nums[k]]);
            }
            
            map.set(-nums[k] - nums[i], nums[i]);
        }
    }

    return sumFor0;
};

/* 有效三角形的 双指针,120ms */
const threeSum = (nums) => {
    const len = nums.length;
    let ans = [];

    nums.sort((a, b) => a - b);

    for(let k = len - 1; k > 1; k--){
        if(nums[k] < 0) break;

        if(k < len - 1 && nums[k] == nums[k + 1]) continue; //去重

        let left = 0, right = k - 1;

        while(left < right){
            if(nums[left] + nums[right] + nums[k] == 0){
                ans.push([nums[left], nums[right], nums[k]]);
                
                while(left < right && nums[left] == nums[left + 1]) left++;
                while(left < right && nums[right] == nums[right - 1]) right++;

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