//递归
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
//使用filter
function bouncer(arr) {
    return arr.filter(Boolean);
}
//for循环
function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
  }