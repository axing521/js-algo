/***
 * @creater:ACBash
 * @create_time:22-3-12 20:32:12
 * @last_modify:ACBash
 * @modify_time:22-3-28 19:56:13
 * @line_count:98
 **/

/* 暴力,一次遍历，O(n)空间 */
const findDuplicate = (nums) => {
    const n = nums.length;
    let arr = Array.from({length: n});
    
    for(const num of nums){
        if(arr[num] == 1) return num;
        if(!arr[num]) arr[num] = 1;
    }
};

/* O(1)空间，二分查找 */
const findDuplicate = (nums) => {
    const n = nums.length;
    let ans = -1, left = 1, right = n - 1;

    while(left <= right){
        const mid = right - ((right - left) >> 1);
        let count = 0;

        nums.forEach(num => {
            count += num <= mid;
        });

        if(count > mid){
            right = mid - 1;
            ans = mid;
        }else left = mid + 1;
    }

    return ans;
};
/* [1,2,2,3,4] */

/* 二进制，纯属装逼 */
const findDuplicate = (nums) => {
    const n = nums.length;
    let ans = 0, bit_max = 31;
    
    while(!((n - 1) >> bit_max)){
        bit_max -= 1;
    }

    for(let bit = 0; bit <= bit_max; bit++){
        let x = 0, y = 0;
        
        for(let i = 0; i < n; i++){
            if(nums[i] & (1 << bit)) x += 1;
            if(i >= 1 && (i & (1 << bit))) y += 1;
        }

        if(x > y) ans |= 1 << bit;
    }

    return ans;
};

/* 快慢指针 */
const findDuplicate = (nums) => {
    let fast = 0, slow = 0;
    
    do{
        fast = nums[nums[fast]];
        slow = nums[slow];
    }while(fast != slow);

    fast = 0;

    while(fast != slow){
        fast = nums[fast];
        slow = nums[slow];
    }

    return fast;
};

const findDuplicate = (nums) => {
    let slow = nums[0], fast = nums[0];

    while(fast){
        fast = nums[fast] && nums[nums[fast]];
        slow = nums[slow];

        if(!fast) return -1;

        if(fast == slow){
            fast = nums[0];
            break;
        }
    }

    while(fast != slow){
        fast = nums[fast];
        slow = nums[slow];
    }

    return fast;
};