/* 1.内置函数 */
const sortColors = (nums) => {
    return nums.sort((a,b)=>a-b);
};

/* 2.冒泡排序 */
const sortColors = (nums) => {
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length-1-i; j++){
            if(nums[j]>nums[j+1]){
                [nums[j],nums[j+1]] = [nums[j+1],nums[j]];
            }
        }
    }
    return nums;
};

/* console.log(sortColors([2,0,2,1,1,0])); */

/* 3.操作数组 */
const sortColors = (nums) => {
    let i=0, count=0;
    while(count<nums.length){
        if(nums[i]===0){
            let item0 = nums.splice(i,1);
            nums.unshift(item0);
            i++;
        }else if(nums[i]===2){
            let item2 = nums.splice(i,1);
            nums.push(item2);
        }else{
            i++;
        }
        count++;
    }
    return nums;
};

/* 4.三指针 */
const sortColors = (nums) => {
    let low=0, high=nums.length-1, curr=0;
    while(curr<=high){
        switch(nums[curr]){
            case 0:
                [nums[curr],nums[low]] = [nums[low],nums[curr]];
                curr++;
                low++;
                break;
            case 2:
                [nums[curr],nums[high]] = [nums[high],nums[curr]];
                high--;
                break;
            case 1:
                curr++;
                break;
            default:console.log("error");
        }
    }
    return nums;
};

/* 5.选择排序 */
const sortColors = (nums) => {
    for(let i=0; i<nums.length-1; i++){
        let indexMin=i;
        for(let j=i; j<nums.length; j++){
            if(nums[indexMin]>nums[j]){
                indexMin=j;
            }
        }
        if(i!==indexMin){
            [nums[i],nums[indexMin]] = [nums[indexMin],nums[i]];
        }
    }
    return nums;
};

