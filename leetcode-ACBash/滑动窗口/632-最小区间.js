/***
 * @creater:ACBash
 * @create_time:21-12-19 15:15:0
 * @last_modify:ACBash
 * @modify_time:21-12-20 13:56:37
 * @line_count:39
 **/

/* 堆的tag，滑动窗口解，蚌 */
const smallestRange = (nums) => {
    const len = nums.length;
    let allNums = [], map = {};
    let left = 0, count = 0, minLen = Infinity, minStart = 0;

    for(let i = 0; i < len; i++){
        map[i] = 0;

        for(let j = 0; j < nums[i].length; j++){
            allNums.push({
                "num": nums[i][j],
                "type": i
            });
        }
    }   //元组处理方法

    allNums.sort((a, b) => a.num - b.num);  //化矩阵为列表，这样就又可以当作LC-719用滑动窗口处理.

    for(let right = 0; right < allNums.length; right++){
        if(!map[allNums[right].type]) count++;
        map[allNums[right].type]++;

        while(count == len && left <= right){
            if(allNums[right].num - allNums[left].num < minLen){
                minLen = allNums[right].num - allNums[left].num;
                minStart = allNums[left].num;
            }

            map[allNums[left].type]--;

            if(!map[allNums[left].type]) count--;

            left++;
        }
    }

    return [minStart, minStart + minLen];
};