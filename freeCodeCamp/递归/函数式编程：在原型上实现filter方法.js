var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback,arr=[],i=0){
  
  return i<this.length?this.myFilter(callback,arr.concat(callback(this[i])?this[i]:[]),i+1)
                      :arr;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});