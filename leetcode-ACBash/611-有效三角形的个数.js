/***
 * @creater:ACBash
 * @create_time:22-5-23 18:30:31
 * @last_modify:ACBash
 * @modify_time:22-5-24 12:19:13
 * @line_count:126
 **/

/* 暴力枚举，超时 */
const triangleNumber = (nums) => {
    const len = nums.length;
    let ans = 0;
    
    const isTriangle = (a, b, c) => {
        return (a + b > c) && (a + c > b) && (b + c > a);
    };

    for(let i = 0; i < len; i++){
        for(let j = i + 1; j < len; j++){
            for(let k = j + 1; k < len; k++){
                const [a, b, c] = [nums[i], nums[j], nums[k]];

                if(isTriangle(a, b, c)) ans++;
            }
        }
    }

    return ans;
};

/* 剪枝, 800ms */
const triangleNumber = (nums) => {
    const len = nums.length;
    let ans = 0;

    nums.sort((a, b) => a - b);

    for(let i = 0; i < len - 2; i++){
        if(nums[i] == 0) continue;

        for(let j = i + 1; j < len - 1; j++){
            let k = j + 1;

            while(k < len && nums[i] + nums[j] > nums[k]){
                k++;
            }

            ans += k - j - 1;
        }
    }

    return ans;
};

/* 剪枝 + 二分查找 180ms*/
const triangleNumber = (nums) => {
    const len = nums.length;
    let ans = 0;

    nums.sort((a, b) => a - b);

    for(let i = 0; i < len - 2; i++){
        if(nums[i] == 0) continue;

        for(let j = i + 1; j < len - 1; j++){
            let k = j, left = j + 1, right = len - 1;

            while(left <= right){
                const mid = (left + right) >> 1;

                if(nums[i] + nums[j] > nums[mid]){
                    k = mid;
                    left = mid + 1;
                }else{
                    right = mid - 1;
                }
            }

            ans += k - j;
        }
    }

    return ans;
};

/* 剪枝，双指针 */
const triangleNumber = (nums) => {
    const len = nums.length;
    let ans = 0;

    nums.sort((a, b) => a - b);

    for(let i = 0; i < len - 2; i++){
        if(nums[i] == 0) continue;
        
        let k = i + 2;

        for(let j = i + 1; j < len - 1; j++){

            while(k < len && nums[i] + nums[j] > nums[k]){
                k++;
            }

            ans += k - j - 1;
        }
    }

    return ans;
};

/* 这难道不是滑动窗口？？ */
/* 最棒的双指针 */
const triangleNumber = (nums) => {
    const len = nums.length;
    let ans = 0;

    nums.sort((a, b) => a - b);

    //固定一个k
    for(let k = len - 1; k > 1; k--){
        let i = 0, j = k - 1;

        while(i < j){
            if(nums[i] + nums[j] > nums[k]){
                ans += j - i;
                j--;
            }else{
                i++;
            }
        }
    }

    return ans;
};