/***
 * @creater:ACBash
 * @create_time:23-3-20 17:15:5
 * @last_modify:ACBash
 * @modify_time:23-3-20 17:15:12
 * @line_count:30
 **/

async function async1() {
    console.log('async1 start');//2
    await async2();
    console.log('async1 end');//6
}
async function async2() {
    console.log('async2 start');//3
    return new Promise((resolve, reject) => {
        reject();
        console.log('async2 promise');
    })
}
 
console.log('illegalscript start');//1
 
setTimeout(function () {
    console.log('setTimeout');//9
}, 0);
 
async1();
 
new Promise(function (resolve) {
    console.log('promise1');//4
    resolve();
}).then(function () {
    console.log('promise2');//7
}).then(function () {
    console.log('promise3');//8
});
console.log('illegalscript end');//5