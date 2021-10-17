/***
 * @creater:ACBash
 * @create_time:21-10-17 17:34:34
 * @last_modify:ACBash
 * @modify_time:21-10-17 19:37:54
 * @line_count:36
 **/

/* 暴力法 */
const nextGreaterElement = (nums1,nums2) => {
    let ans = new Array(nums1.length).fill(-1);
    for(let i=0; i<nums1.length; i++){
        const cur = nums1[i];
        const start = nums2.indexOf(cur);
        for(let j=start+1; j<nums2.length; j++){
            if(nums2[j] > cur){
                ans[i] = nums2[j];
                break;
            }
        }
    }
    return ans;
};

/* 单调栈 */
const nextGreaterElement = (nums1,nums2) => {
    let stack = [], map = {};
    let ans = new Array(nums1.length).fill(-1);
    for(let i=0; i<nums2.length; i++){
        while(stack.length && stack[stack.length-1] < nums2[i]){
            map[stack[stack.length-1]] = nums2[i];
            stack.pop();
        }
        stack.push(nums2[i]);
    }
    
    for(let i=0; i<nums1.length; i++){
        ans[i] = map[nums1[i]] ? map[nums1[i]] : -1;
    }
    
    return ans;
};

console.log(nextGreaterElement([4,1,2],[1,3,4,2]));