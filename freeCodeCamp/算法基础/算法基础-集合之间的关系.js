//经典for循环
function mutation(arr) {
  var flag=true;
  arr[0]=arr[0].toLowerCase();
  arr[1]=arr[1].toLowerCase();
  for(let i=0;i<arr[1].length;i++){
    if(arr[0].indexOf(arr[1][i])<0){
      flag=false;
    }
  }
  return flag;
}
console.log(mutation(["hello", "Hello"]));
//经典slice递归
function mutation(arr) {
  let myRegExp=/arr[1][0]/i;//此方法的bug应该就在这个正则表达式，暂未解决
  if(arr[1].length){
    if(myRegExp.test(arr[0])){
      return mutation([arr[0],arr[1].split("").slice(1).join("")]);
    }else{
      return false;
    }
  }else{
    return true;
  }
}
console.log(mutation(["hello", "Hello"]));
//使用includes方法
function mutation([ target, test ], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length
    ? true
    : !target.includes(test[i])
      ? false
      : mutation([ target, test ], i + 1);
}
//使用every方法
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}