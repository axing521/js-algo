/* console.log(subarraysWithKDistinct([2,1,1,1,2],1)); */
/* 超时了，可惜 */

/* const subarraysWithKDistinct = (nums,k) => {
    let preLeft = 0, right = 0, res = 0, len = nums.length;
    let left = preLeft, windowMap = {}, numType = 0;

    for( ; right<len; ){
        
        if(!windowMap[nums[right]]){
            windowMap[nums[right]] = 0;
            numType++;
        }
        windowMap[nums[right]]++;   //记录哈希表和数字种类
        let windowMapCopy = JSON.parse(JSON.stringify(windowMap));

        if(numType < k){
            right++;

        }else if(numType > k){
            while(numType > k){
                if(--windowMap[nums[left++]] === 0) numType--;
            }
            preLeft = left;
            if(--windowMap[nums[right]] === 0) numType--;

        }else{
            while(numType === k){
                res++;
                if(left === right) break;
                if(--windowMap[nums[left++]] === 0) numType--;
            }
            left = preLeft;
            windowMap = JSON.parse(JSON.stringify(windowMapCopy));
            numType = k;
            right++;
        }   //对三种情况分类讨论
    }

    return res;
}; */

/* LC运行结果和VS不一样，很奇怪 */
/* let numMeetK = 0;

const seeWin = (nums,L,R) => {
    let win = nums.slice(L,R+1);
    let set0 = new Set(win);

    return set0.size;
};

const tryInternal = (nums,L,R,k) => { 
    L++;
    while(seeWin(nums,L,R) === k){
        numMeetK++;
        L++;
    }
};

const subarraysWithKDistinct = (nums,k) => {
    let L = 0, R = 0;

    while(R < nums.length){
        if(seeWin(nums,L,R) === k){
            numMeetK++;
            tryInternal(nums,L,R,k);

        }else if(seeWin(nums,L,R) > k){
            while(seeWin(nums,L,R) !== k){
                L++;
            }
            numMeetK++;
            tryInternal(nums,L,R,k);
        }

        R++;
    }

    return numMeetK;
};

console.log(subarraysWithKDistinct([1,2,1,3,4],3)); */

/* LC:数组存储窗口信息，双左指针，差值累加得ret */
const subarraysWithKDistinct = (nums,k) => {
    const len = nums.length;
    const num1 = new Array(len+1).fill(0);
    const num2 = new Array(len+1).fill(0);
    let tot1 = 0, tot2 = 0;
    let left1 = 0, left2 = 0, right = 0;
    let ret = 0;

    while(right < len){
        if(num1[nums[right]] === 0){
            tot1++;
        }
        num1[nums[right]]++;
        if(num2[nums[right]] === 0){
            tot2++;
        }
        num2[nums[right]]++;

        while(tot1 > k){
            num1[nums[left1]]--;
            if(num1[nums[left1]] === 0){
                tot1--;
            }
            left1++;
        }
        while(tot2 > k-1){
            num2[nums[left2]]--;
            if(num2[nums[left2]] === 0){
                tot2--;
            }
            left2++;
        }

        ret += left2 - left1;
        right++;
    }

    return ret;
};