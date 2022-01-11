/***
 * @creater:ACBash
 * @create_time:22-1-7 11:53:17
 * @last_modify:ACBash
 * @modify_time:22-1-11 21:9:50
 * @line_count:18
 **/

 const hanota = (A, B, C) => {
    const len = A.length;

    const move = (len, A, B, C) => {
        if(len == 1){
            C.push(A.pop());
            return;
        }   //界限条件：源栈就剩一个了，直接给目的栈吧。

        move(len - 1, A, C, B); //把源栈上面n - 1个放到暂存栈上。

        C.push(A.pop());   //OK，源栈现在就剩一个了，直接给目的栈吧。

        move(len - 1, B, A, C); //把暂存栈上n - 1个放到目的栈吧。
    };

    move(len, A, B, C);
};