/***
 * @creater:ACBash
 * @create_time:23-3-21 9:59:43
 * @last_modify:ACBash
 * @modify_time:23-3-21 10:0:14
 * @line_count:15
 **/

function repeat (func, times, wait) { 
    return function(content){
     var count = 0;
     var interval = setInterval(function(){
         count += 1;
         func(content);
         if(count === times){    
             clearInterval(interval);    
         }
     }, wait);
}
}  
const repeatFunc = repeat(console.log, 4, 3000)
repeatFunc("hellworld");
