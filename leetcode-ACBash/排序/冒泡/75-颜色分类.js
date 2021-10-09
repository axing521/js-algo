/* JS内置sort()
var sortColors = function(nums) {
    return nums.sort((a,b)=>a-b);
}; */

/* 冒泡排序
var sortColors=function(nums){
    for(let i=0 ; i<nums.length ; i++){
        for(let j=0 ; j<nums.length-i ; j++){
            if(nums[j] > nums[j+1]){
                [nums[j],nums[j+1]] = [nums[j+1],nums[j]];
            }
        }
    }
    return nums;
} */

/* 操作数组
var sortColors=function(nums){
    let i=0, count=0;
    while(count<nums.length){
        if(nums[i]===0){
            nums.splice(i,1);
            nums.unshift(0);
            i++;
        }else if(nums[i]===2){
            nums.splice(i,1);
            nums.push(2);
        }else{
            i++;
        }
        count++;
    }
    return nums;
} */

/* 三指针
var sortColors=function(nums){
    let left=0, right=nums.length-1, curr=0;
    while(curr<=right){
        if(nums[curr]===0){
            [nums[curr],nums[left]] = [nums[left],nums[curr]];
            left++;
            curr++;
            continue;
        }
        if(nums[curr]===2){
            [nums[curr],nums[right]] = [nums[left],nums[curr]];
            right--;
            continue;
        }
        if(nums[curr]===1){
            curr++;
            continue;
        }
    }
    return nums;
} */

