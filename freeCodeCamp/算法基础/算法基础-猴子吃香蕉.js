//使用splice和for循环
function chunkArrayInGroups(arr, size) {
    // Break it up.
    var newArr=[];
    let flag=Math.ceil(arr.length/size);
    for(let i=0;i<flag;i++){
        newArr[i]=arr.splice(0,size);
    }
    return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
//递归暂未想出，主要是push返回新数组长度
function chunkArrayInGroups(arr, size) {
    // Break it up.
    
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
//这个递归很秀啊，完美解决上个push的问题。
function chunkArrayInGroups(arr, size) {
    if (arr.length <= size) {
      return [arr];
    } else {
      return [arr.slice(0, size)].concat(
        chunkArrayInGroups(arr.slice(size), size)
      );
    }
}
//优化第一个解法
function chunkArrayInGroups(arr, size) {
    let newArr = [];
    while (arr.length > 0) {
      newArr.push(arr.splice(0, size));
    }
    return newArr;
}
//也是优化第一种解法
function chunkArrayInGroups(arr, size) {
    // Break it up.
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}