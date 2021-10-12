/***
 * @creater:ACBash
 * @create_time:21-10-12 14:23:27
 * @last_modify:ACBash
 * @modify_time:21-10-12 16:35:22
 * @line_count:80
 **/

/* 失败作 */
/* const maximumSum = (arr) => {
    let left = 0, right = 0, ans = 0, negNum = 0, sum = 0, negIndex = -1;
    let pre = [];
    pre[0] = arr[0];
    for(let i=1; i<arr.length; i++){
        pre [i] = pre[i-1] + arr[i];
    }   //记录前缀和S(n);

    while(right < arr.length){
        if(arr[right] < 0) negNum++;
        if(negNum === 0){
            sum += arr[right];
            right++;
        }else if(negNum === 1){
            if(negIndex < 0) negIndex = right;  //这个负数还没减
            sum += arr[right];
            right++;
        }else if(negNum === 2){
            sum -= pre[negIndex]+arr[right];
            negIndex = right;
            negNum--;
            right++;
        }

        ans = Math.max(ans, sum);
    }

    return ans;
}; */

/* 失败作2 */
/* const maximumSum = (arr) => {
    let ans = -Infinity;
    let pre = [];
    pre[0] = arr[0];
    for(let i=1; i<arr.length; i++){
        pre [i] = pre[i-1] + arr[i];
    }   //记录前缀和S(n);
    console.log(pre);
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0){
            let preTemp = pre; 
            for(let j=i; j<arr.length; j++){
                preTemp[j] -= arr[i];
            }
            preTemp.unshift(0);

            let max0 = Math.max(...preTemp);
            let min0 = Math.min(...preTemp);
            ans = Math.max(ans, max0-min0);
        }
    }

    return ans;
};

console.log(maximumSum([-1,-1,-1,-1])); */

/* LC:没看到有前缀和解题的，都是DP，DP把我秀麻了% */
const maximumSum = (arr) => {
    let dp1 = -Infinity,    //以arr[i]结尾的不删除任何元素的最大
        dp2 = -Infinity,    //以arr[i]结尾的删除一个元素的最大，可能删除i位置，也可能删除其他位置
        max = -Infinity;
        
    for(let i=0; i<arr.length; i++){    
        //要先计算dp2再计算dp1，因为dp2会用到上一个状态的dp1
        dp2 = Math.max( 
            dp1,            //删除位置i的，注意这里不需要把之前删掉的负值加上来，而是很巧妙的用到了dp1，dp1就是没有上次计算的、没有删过任何元素的、以arr[i-1]结尾的最大值
            dp2+arr[i]      //删除其他位置的，直接加上本位置的即可
        );       
        dp1 = Math.max(dp1+arr[i], arr[i]);
        max = Math.max(dp1, dp2, max);
    }
    return max;
};

console.log(maximumSum([1,-2,6,3]));
/* console.log(Math.max(-Infinity, -Infinity+1)); */