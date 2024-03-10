// 给定两个整数数组nums1和nums1，返回两个数组中公共的长度最长的子数组的长度
// dp,二维dp，

const func1 = (nums1, nums2) => {
    const m = nums1.length;
    const n = nums2.length;
    let dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));

    let ans = 0;

    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if(nums1[i - 1] == nums2[j - 1]){
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }

            ans = Math.max(ans, dp[i][j]);
        }
    }

    return ans;
};