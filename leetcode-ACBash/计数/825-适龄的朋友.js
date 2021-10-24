/***
 * @creater:ACBash
 * @create_time:21-10-24 14:46:26
 * @last_modify:ACBash
 * @modify_time:21-10-24 16:43:43
 * @line_count:36
 **/

/* 1500ms，排序 */
const numFriendRequests = (ages) => {
    const sorted = ages.sort((a,b) => b-a);
    let ans = 0;

    for(let i=0; i<sorted.length-1; i++){
        for(let j=i+1; j<sorted.length; j++){
            if(0.5 * sorted[i] + 7 < sorted[j]){
                sorted[i] == sorted[j] ? ans += 2 : ans++;
            }else{
                break;
            }
        }
    }
    
    return ans;
};

/* 很牛逼 */
const numFriendRequests = (ages) => {
    let count = new Array(121).fill(0);   //最大120岁
    let ans = 0;

    for(const age of ages) count[age]++;
    for(let a=15; a<121; a++){
        if(count[a] == 0) continue;
        for(let b=0.5*a+7+1 | 0; b<a; b++){
            ans += count[a] * count[b];
        }
        ans += count[a] * (count[a] - 1);
    }

    return ans;
};

console.log(numFriendRequests([20,30,100,110,120]));