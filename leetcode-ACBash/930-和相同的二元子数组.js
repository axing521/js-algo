/***
 * @creater:ACBash
 * @create_time:22-4-1 20:50:47
 * @last_modify:ACBash
 * @modify_time:22-4-1 20:50:47
 * @line_count:147
 **/

/* 3600ms */
const numSubarraysWithSum = (nums,goal) => {
    let preLeft = 0, right = 0, len = nums.length;
    let left = preLeft, sum = 0, res = 0;

    for( ; right<len; ){
        //初始化sum和修正指针操作
        sum = 0;
        if(left>right) right = left;    

        //得到窗口内和sum
        for(let i=left; i<=right; i++){
            sum += nums[i];
        }   

        //sum与goal比较，三种情况分类讨论
        if(sum < goal){
            right++;

        }else if(sum === goal){
            while(sum === goal){
                res++;
                console.log(left,right);
                /* console.log(left,right);监测符合条件的子数组 */
                if(left===right) break;
                else sum -= nums[left++];
            }
            left = preLeft;
            right++;

        }else{
            while(sum > goal){
                sum -= nums[left++];
            }
            preLeft = left;
        }   
    }

    return res;
};

/* 优化求和，600ms */
const numSubarraysWithSum = (nums,goal) => {
    let preLeft = 0, right = 0, len = nums.length;
    let left = preLeft, sum = 0, res = 0;

    for( ; right<len; ){
        if(left>right){
            sum += nums[right];
            right = left;
        }   
        sum += nums[right];

        if(sum < goal){
            right++;

        }else if(sum === goal){
            while(sum === goal){
                res++;
                /* console.log(left,right);监测符合条件的子数组 */
                if(left===right) break;
                else sum -= nums[left++];
            }
            left = preLeft;
            sum = goal;
            right++;

        }else{
            while(sum > goal){
                sum -= nums[left++];
            }
            preLeft = left;
            sum -= nums[right];
        }   
    }

    return res;
};

/* 精简版，600ms */
const numSubarraysWithSum = (nums,goal) => {
    let preLeft = 0, right = 0, len = nums.length;
    let left = preLeft, sum = 0, res = 0;

    for( ; right<len; right++){
        if(left>right){
            sum += nums[right];
            right = left;
        }   
        sum += nums[right];

        if(sum === goal){
            while(sum === goal){
                res++;
                if(left===right) break;
                else sum -= nums[left++];
            }
            left = preLeft;
            sum = goal;

        }else if(sum > goal){
            while(sum > goal){
                sum -= nums[left++];
            }
            preLeft = left;
            sum -= nums[right--];
        }   
    }

    return res;
};

/* 前缀和，哈希表 */
const numSubarraysWithSum = (nums, goal) => {
    let ans = 0, sum = 0;
    let pre = new Map();

    for(const num of nums){
        pre.set(sum, (pre.get(sum) || 0) + 1);
        sum += num;
        ans += pre.get(sum - goal) || 0;
    }

    return ans;
};

/* 滑动窗口，非常隐蔽，atmost */
const numSubarraysWithSum = (nums, goal) => {
    let ans = 0, sum1 = 0, slow1 = 0, sum2 = 0, slow2 = 0;

    for(let fast = 0; fast < nums.length; fast++){
        sum1 += nums[fast];
        sum2 += nums[fast];

        while(slow1 <= fast && sum1 > goal){
            sum1 -= nums[slow1++];
        }

        while(slow2 <= fast && sum2 >= goal){
            sum2 -= nums[slow2++];
        }

        ans += slow2 - slow1;
    }

    return ans;
};