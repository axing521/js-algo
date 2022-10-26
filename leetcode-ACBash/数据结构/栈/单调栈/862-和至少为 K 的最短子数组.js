/***
 * @creater:ACBash
 * @create_time:22-10-26 19:58:44
 * @last_modify:ACBash
 * @modify_time:22-10-26 20:42:14
 * @line_count:28
 **/

//索引单调栈/双端队列 + 左闭右开双指针 + 滑动窗口 + 前缀和数组
const shortestSubarray = (nums, k) => {
    let ans = Infinity;
    let pre = new Array(nums.length + 1).fill(0);
    pre.forEach((v, i) => i && (pre[i] = pre[i - 1] + nums[i - 1]));
    
    let queue = [], head = 0, tail = 0;

    //构建单调双端队列，因为单调，所以滑动窗口可以收缩左指针
    for(let i = 0; i < pre.length; i++){
        //滑动窗口收缩
        while(head < queue.length && pre[i] - pre[queue[head]] >= k){
            ans = Math.min(ans, i - queue[head]);
            head++;
        }

        //保持单调双端队列
        while(queue.length && pre[i] < pre[queue[tail - 1]]){
            queue.pop();
            tail--;
        }

        queue.push(i);
        tail++;
    }

    return ans == Infinity ? -1 : ans;
}