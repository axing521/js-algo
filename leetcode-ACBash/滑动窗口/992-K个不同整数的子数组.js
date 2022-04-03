/***
 * @creater:ACBash
 * @create_time:21-10-10 17:39:14
 * @last_modify:ACBash
 * @modify_time:22-4-3 14:18:57
 * @line_count:225
 **/

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

/* 和LC-904:水果成篮 很像，不同的是，篮子的个数是K，
 * 要求的不是窗口的最大长度，而是满足条件的窗口个数 
 * 种类不会减少，属于是上升序列，可以满足条件后倒推
 * 这种做法思路简单，但是时间复杂度是O(n^2)
 * LC上跑了4808ms，很险
 */
const subarraysWithKDistinct = (nums,k) => {
    let ans = 0;
    let pre = 0;
    let boxs = new Set();

    for(let i=0; i<nums.length; i++){
        boxs.add(nums[i]);
        if(boxs.size >= k){
            boxs.clear();
            pre = 0;
            let j = i;
            while(boxs.size < k+1){
                if(boxs.size === k){
                    pre++;
                } 
                boxs.add(nums[j]);
                j--;
            }
            boxs.delete(nums[j+1]);
        }

        ans += pre;
    }

    return ans;
};

console.log(subarraysWithKDistinct([1,2,1,2,3],2));

/* 前缀和，<=k的情况 减去 <=k-1的情况，底层用滑动窗口 */
const atMostK = (nums,k) => {
    let hash = {};
    let ans = 0, left = 0;

    for(let right=0; right<nums.length; right++){
        if(!hash[nums[right]]){
            hash[nums[right]] = 0;
            k--;
        }
        hash[nums[right]]++;

        while(k < 0){
            hash[nums[left]]--;
            if(hash[nums[left]] === 0){
                k++;
            }
            left++;
        } //窗口元素种类溢出

        ans += right-left+1;
    }

    return ans;
};

const subarraysWithKDistinct = (nums,k) => {
    return atMostK(nums,k) - atMostK(nums,k-1);
};

console.log(subarraysWithKDistinct([1,2,1,3,4],3)); 

const subarraysWithKDistinct = (nums, k) => {
    let ans = 0, slow1 = 0, map1 = {}, cNum1 = 0, slow2 = 0, map2 = {}, cNum2 = 0;

    for(let fast = 0; fast < nums.length; fast++){
        if(!map1[nums[fast]]){
            map1[nums[fast]] = 0;
            cNum1++;
        }
        map1[nums[fast]]++;

        if(!map2[nums[fast]]){
            map2[nums[fast]] = 0;
            cNum2++;
        }
        map2[nums[fast]]++;

        while(slow1 <= fast && cNum1 > k){
            map1[nums[slow1]]--;
            if(map1[nums[slow1]] == 0) cNum1--;
            slow1++;
        }

        while(slow2 <= fast && cNum2 >= k){
            map2[nums[slow2]]--;
            if(map2[nums[slow2]] == 0) cNum2--;
            slow2++;
        }

        ans += slow2 - slow1;
    }

    return ans;
};