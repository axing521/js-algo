/***
 * @creater:ACBash
 * @create_time:21-10-12 16:35:24
 * @last_modify:ACBash
 * @modify_time:21-10-12 17:26:39
 * @line_count:19
 **/

/* 一遍过，爽！和之前的atMostK道理一样 */
const xorQueries = (arr,queries) => {
    let pre = [];
    pre[0] = arr[0];
    for(let i=1; i<arr.length; i++){
        pre[i] = pre[i-1] ^ arr[i];
    }

    let ans = [];
    for(let i=0; i<queries.length; i++){
        ans.push( (pre[queries[i][0] - 1]) ^ pre[queries[i][1]] )
    }

    return ans;
};

console.log(xorQueries([1,3,4,8], [[0,1],[1,2],[0,3],[3,3]]));

/* console.log(undefined^1); */