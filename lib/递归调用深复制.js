function deepCopy(obj) {
    var newobj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object') {
      return obj;
    } else {
    for (var i in obj) {
      if (typeof obj[i] === 'object'){ //判断对象的这条属性是否为对象
        newobj[i] = deepCopy(obj[i]);  //若是对象进行嵌套调用
      }else{
          newobj[i] = obj[i];
          }
      }
      }
      return newobj; //返回深度克隆后的对象
}