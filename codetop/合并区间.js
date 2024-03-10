// 以数组intervals表示若干个区间的集合，intervals[i] = [starti, endi]，合并所有重叠的区间，返回一个不重叠的区间数组

const merge = (intervals) => {
    let ans = [];
    intervals.sort((a, b) => a[0] - b[0]);

    let prev = intervals[0];

    for(let i = 1; i < intervals.length; i++){
        let cur = intervals[i];
        
        if(prev[1] >= cur[0]){ // 有重合
            prev[1] = Math.max(prev[1], cur[1]);
        }else{
            ans.push(prev);
            prev = cur;
        }
    }

    ans.push(prev);

    return ans;
};