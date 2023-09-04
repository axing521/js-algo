//map映射,数组与字符串灵活转换
function titleCase(str) {
  return str.toLowerCase()
            .split(" ")
            .map(str=>{
              return str[0].toUpperCase()+str.slice(1);})
            .join(" ");
}
//正则表达式+replace
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
console.log(titleCase("I'm a little tea pot"));
//直接在String原型上新建函数，暂未理解
String.prototype.replaceAt = function(index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};
function titleCase(str) {
  var newTitle = str.split(" ");
  var updatedTitle = [];
  for (var st in newTitle) {
    updatedTitle[st] = newTitle[st]
      .toLowerCase()
      .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
  }
  return updatedTitle.join(" ");
}