//递归
function findElement(arr, func) {
  
    if(arr.length){
      return func(arr[0])?arr[0]:findElement(arr.slice(1),func);
    }
    return undefined;
  }
console.log(findElement([1, 3, 5, 9], num => num % 2 === 0));
//映射的思想+indexOf索引，抓住了主要矛盾
function findElement(arr, func) {
    return arr[arr.map(func).indexOf(true)];
}
//使用内置find方法
function findElement(arr, func) {
    return arr.find(func);
}