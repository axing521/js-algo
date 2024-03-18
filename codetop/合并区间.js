// 以数组intervals表示若干个区间的集合，intervals[i] = [starti, endi]，合并所有重叠的区间，返回一个不重叠的区间数组

const merge = (intervals) => {
    arr.sort((a, b) => a[0] - b[0]);

    let ans = [], prev = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i][0] > prev[1]){
            ans.push(prev);
            prev = arr[i];
            continue;
        }

        prev[1] = Math.max(prev[1], arr[i][1]);
    }

    ans.push(prev);

    return ans;
};