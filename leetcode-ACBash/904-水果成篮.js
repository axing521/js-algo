/***
 * @creater:ACBash
 * @create_time:21-10-10 15:46:46
 * @last_modify:ACBash
 * @modify_time:22-10-17 21:15:20
 * @line_count:122
 **/

/* console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4])); */
/* 自己写的滑动窗口，150ms */
const totalFruit = (fruits) => {
    let ans = 0, left = 0, fruitBox = new Map(), fruitType = 0;

    for(let right = 0; right < fruits.length; right++){
        let curFruit = fruits[right];

        if(!fruitBox.get(curFruit)){
            fruitBox.set(curFruit, 1);
            fruitType++;
        }else{
            fruitBox.set(curFruit, fruitBox.get(curFruit) + 1);
        }

        while(fruitType > 2){
            if(ans == 0 || ans < right - left){
                ans = right - left;
            }

            let leftFruit = fruits[left++];

            fruitBox.set(leftFruit, fruitBox.get(leftFruit) - 1);

            if(fruitBox.get(leftFruit) == 0) fruitType--;
        }

        if(ans == 0 || ans < right - left + 1){
            ans = right - left + 1;
        }
    }

    return ans;
};

/* 借用前缀和思想，使用集合set，篮子装不下了全扔下，从当前的树往回捡 */
/* 考虑[1,0,0,1,0,0,1,0,2,...],因为使用了ans = Math.max(ans, pre);,
 * 最长前缀和必然包含前面的，完备性满足，可以从2开始往前捡 
 */
/* 看了一圈LC题解，90%都是滑动窗口，其他是DP，我这个解法是不是有点一枝独秀 */
/* 其实也是滑动窗口，不过是窗口缩小是从右到左 */
const totalFruit = (fruits) => {
    let ans = 0, pre = 0, box = new Set();

    for(let i = 0; i < fruits.length; i++){
        box.add(fruits[i]);

        if(box.size <= 2){
            pre++;
        }else{
            box.clear();

            let j = i;
            box.add(fruits[j]);
            pre = 1;

            const fruit1 = fruits[j - 1];   //前面一个肯定不相同

            while(fruits[j - 1] == fruit1){
                box.add(fruits[j - 1]);
                pre++;
                j--;
            }
        }

        ans = Math.max(ans, pre);
    }

    return ans;
};

const totalFruit = (fruits) => {
    let slow = 0, ans = 0;
    let map = {}, cNum = 0;

    for(let fast = 0; fast < fruits.length; fast++){
        if(!map[fruits[fast]]){
            map[fruits[fast]] = 0;
            cNum++;
        }
        map[fruits[fast]]++;

        if(cNum <= 2) ans = Math.max(ans, fast - slow + 1);

        while(cNum > 2){
            map[fruits[slow]]--;

            map[fruits[slow]] == 0 && cNum--;

            slow++;
        }
    }

    return ans;
};

const totalFruit = (fruits) => {
    let slow = 0, ans = 0;
    let map = new Map(), cNum = 0;

    for(let fast = 0; fast < fruits.length; fast++){
        if(!map.get(fruits[fast])){
            map.set(fruits[fast], 0);
            cNum++;
        }
        map.set(fruits[fast], map.get(fruits[fast]) + 1);

        if(cNum <= 2) ans = Math.max(ans, fast - slow + 1);

        while(cNum > 2){
            map.set(fruits[slow], map.get(fruits[slow]) - 1);

            map.get(fruits[slow]) == 0 && cNum--;

            slow++;
        }
    }

    return ans;
};

console.log(totalFruit([0,1,2,2]));