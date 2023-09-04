//对数组项重复的操作除了for，还可以concat+slice递归
function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    if(arr.length){
      if(!!arr[0]){
        return [arr[0]].concat(bouncer(arr.slice(1)));
      }else{
        return [].concat(bouncer(arr.slice(1)));
      }
    }else{
      return [];
    }
  }
console.log(bouncer([7, "ate", "", false, 9]));

//经典for循环
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArr=[];//新设一个盒子
  for(let i=0;i<arr.length;i++){
    if(!!arr[i]){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(bouncer([7, "ate", "", false, 9]));

//使用数组的filter迭代
function bouncer(arr) {
  return arr.filter(Boolean);
}
console.log(bouncer([7, "ate", "", false, 9]));