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

console.log(numSubarraysWithSum([0,0,0,0,0,0,1,0,0,0],0));