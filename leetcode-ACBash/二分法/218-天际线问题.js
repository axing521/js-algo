/***
 * @creater:ACBash
 * @create_time:22-3-11 16:6:17
 * @last_modify:ACBash
 * @modify_time:22-3-12 19:57:6
 * @line_count:73
 **/

 const getSkyline = (buildings) => {
    let ans = [], positions = [], pre = null;
    
    for(const building of buildings){
        positions.push([building[0], -building[2]])   //左端点
        positions.push([building[1], building[2]])    //右端点
    }

    positions.sort((a, b) => a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]);   //点优先按靠左的站，如果x轴相同，左端点的高的往前，右端点低的往前

    let heights = [0];
    const remove = (arr, target) => {
        let idx = -1;
        arr.some((val, index) => {
            if(val == target){
                idx = index;
                return true;
            }
            return false;
        });
        arr.splice(idx, 1);
    };
    
    for(const position of positions){
        if(position[1] < 0) heights.push(-position[1]); //加入左节点
        else remove(heights, position[1]);  //这个楼结束了，删掉heights中的这个高度
        
        const maxHeight = Math.max(...heights);

        if(pre != maxHeight){
            ans.push([position[0], maxHeight]);
            pre = maxHeight;
        }
    }

    return ans;
};

/* 二分优化 */
const getSkyline = (buildings) => {
    let arr = [], ans = [];

    for(const [l, r, h] of buildings) arr.push([l, -h], [r, h]);

    arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    const search = (arr, target) => {
        let l = 0, r = arr.length - 1;
        while(l < r){
            const mid = l + ((r - l) >> 1);
            if(arr[mid] < target) r = mid;
            else if(arr[mid] > target) l = mid + 1;
            else return mid;
        }
        return l;
    };

    let preH = 0, heights = [0];

    for(const [x, h] of arr){
        if(h < 0) heights.splice(search(heights, -h), 0, -h);
        else heights.splice(search(heights, h), 1);

        if(preH != heights[0]){
            ans.push([x, heights[0]]);
            preH = heights[0];
        }
    }

    return ans;
};

/* 应该可以堆优化，下次看看 */