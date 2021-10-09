/* LC:对象存储+替换本质+最小窗口 */
const balancedString = (s) => {
    let left = right = 0, len = s.length, avg = len/4;
    let map = {"Q":0, "W":0, "E":0, "R":0}, min = len;

    for(let i=0; i<len; i++){
        map[s[i]]++;
    }   //记录字符串s的字符分布信息
    if(map["Q"] === avg  &&  map["W"] === avg  &&  map["E"] === avg  &&  map["R"] === avg) return 0;
    while(right < len){
        map[s[right]]--;
        //当窗口外每个元素的个数都小于等于avg，说明找到了满足条件的，收缩左边界找更小的
        while(left <= right  &&  map["Q"] <= avg  &&  map["W"] <= avg  &&  map["E"] <= avg  &&  map["R"] <= avg){
            min = Math.min(min, right-left+1);
            // 收缩左边界，那么这个元素要放回窗口外
            map[s[left]]++;
            left++;
        }

        right++;
    }

    return min;
};