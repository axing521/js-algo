/***
 * @creater:ACBash
 * @create_time:21-12-17 14:50:48
 * @last_modify:ACBash
 * @modify_time:22-11-16 12:17:23
 * @line_count:82
 **/

const quickSort = (list) => {
    if(list.length < 2) return list;

    const midValue = list[0], left = [], right = [];

    for(let i = 1; i < list.length; i++){
        list[i] < midValue ? left.push(list[i]) : right.push(list[i]);
    }

    return quickSort(left).concat(midValue, quickSort(right));
}

console.log(quickSort([0,1,2,1]));

//针对于LC-215
//快速排序
const findKthLargest = (nums, k) => {
    return quick(nums, 0, nums.length - 1, nums.length - k);
};

const quick = (arr, left, right, k) => {
    let index;  //划分主元
    if(left < right){
        index = partition(arr, left, right);
        if(k == index) return arr[index];
        else if(k < index) return quick(arr, left, index - 1, k);
        else return quick(arr, index + 1, right, k);
    }
    return arr[left];
};
//他的作用是将left到right范围的值按照datum基准值，小的在左边，大的在右边，通过交换等手段，最后返回datum的索引值，左边都是小于等于datum的，右边全是大于的
const partition = (arr, left, right) => {
    const datum = arr[Math.floor(Math.random() * (right - left + 1)) + left];
    
    while(left < right){
        while(arr[left] < datum){
            left++;
        }
        while(arr[right] > datum){
            right--;
        }
        if(left < right) swap(arr, left, right);
        if(arr[left] == arr[right] && left != right) left++;
    }

    return left;
}

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

//快排
const sortArray = (nums, left = 0, right = nums.length - 1) => {
    if(left == right) return nums;

    let index = partition(nums, left, right);

    if(index - 1 > left) sortArray(nums, left, index - 1);
    if(index + 1 < right) sortArray(nums, index + 1, right);

    return nums;
};

const partition = (nums, left, right) => {
    const datum = nums[Math.floor(Math.random() * (right - left + 1)) + left];

    while(left < right){
        while(nums[left] < datum){
            left++;
        }
        while(nums[right] > datum){
            right--;
        }
        if(left < right) swap(nums, left, right);
        if(nums[left] == nums[right] && left != right) left++;
    }

    return left;
};

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

console.log(sortArray([5,1,1,2,0,0]));