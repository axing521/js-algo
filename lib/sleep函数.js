/***
 * @creater:ACBash
 * @create_time:23-3-20 18:21:55
 * @last_modify:ACBash
 * @modify_time:23-3-20 18:23:19
 * @line_count:31
 **/

//这种实现方式是利用一个伪死循环阻塞主线程。因为JS是单线程的。所以通过这种方式可以实现真正意义上的sleep()。
function sleep(delay) {
  var start = (new Date()).getTime();
  while ((new Date()).getTime() - start < delay) {
    continue;
  }
}

function test() {
  console.log('111');
  sleep(2000);
  console.log('222');
}

test()

//定时器
function sleep1(ms, callback) {
    setTimeout(callback, ms)
}
//sleep 1s
sleep1(1000, () => {
    console.log(1000)
})

//es6异步处理
const sleep = time => {
 return new Promise(resolve => setTimeout(resolve,time)) 
} 

sleep(1000).then(()=>{ console.log(1) })