/***
 * @creater:ACBash
 * @create_time:22-10-23 18:52:58
 * @last_modify:ACBash
 * @modify_time:22-10-23 19:3:42
 * @line_count:29
 **/

const binarySearch = (jobs, right, target) => {
    let left = 0;

    while(left < right){
        const mid = (left + right) >> 1;

        if(jobs[mid][1] > target){
            right = mid;
        }else{
            left = mid + 1;
        }
    }

    return left;
}

const jobScheduling = (startTime, endTime, profit) => {
    const n = startTime.length;
    let dp = new Array(n + 1).fill(0);
    let jobs = new Array(n).fill(0).map((val, index) => [startTime[index], endTime[index], profit[index]]);
    jobs.sort((a, b) => a[1] - b[1]);
    
    for(let i = 1; i <= n; i++){
        const k = binarySearch(jobs, i - 1, jobs[i - 1][0]);
        dp[i] = Math.max(dp[i - 1], dp[k] + jobs[i - 1][2]);    //k是结束时间小于等于此时工作开始时间的工作数量
    }

    return dp[n];
};