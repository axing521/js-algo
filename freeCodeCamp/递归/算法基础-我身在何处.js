//经典数组递归
function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    if(arr.length){
        if(arr[0]<num){
            return 1+getIndexToIns(arr.slice(1),num);    
        }
        return getIndexToIns(arr.slice(1),num);
    }
    return 0;
}
console.log(getIndexToIns([10,20,30,40,50], 35));
//经典for循环
function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    var count=0;
    for(let i=0;i<arr.length;i++){
        count=(arr[i]<num)?(count+1):count;
    }
    return count;
}
console.log(getIndexToIns([10,20,30,40,50], 35));
//使用filter迭代
function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    var newArr=arr.filter(item=>item<num);
    return newArr.length;
}
console.log(getIndexToIns([10,20,30,40,50], 35));
//先concat为一个数组，再使用sort()方法排序，再用indexOf方法返回索引
function getIndexToIns(arr, num) {
    return arr
      .concat(num)
      .sort((a, b) => a - b)//sort的参数函数默认是字母升序
      .indexOf(num);
}
console.log(getIndexToIns([3,10,5], 3));
//考虑右侧边界，使用findIndex
function getIndexToIns(arr, num) {
    // sort and find right index
    let index = arr
      .sort((curr, next) => curr - next)
      .findIndex(currNum => num <= currNum);
    // Returns proper answer
    return index === -1 ? arr.length : index;
}
getIndexToIns([40, 60], 500);