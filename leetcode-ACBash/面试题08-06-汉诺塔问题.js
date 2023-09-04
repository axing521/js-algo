/***
 * @creater:ACBash
 * @create_time:22-1-7 11:53:17
 * @last_modify:ACBash
 * @modify_time:22-10-5 0:35:16
 * @line_count:32
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

const hanota = (A, B, C) => {
    const n = A.length;

    const recursive = (n, source, temp, destination) => {
        if(n == 1) return destination.push(source.pop());

        recursive(n - 1, source, destination, temp);
        destination.push(source.pop());
        recursive(n - 1, temp, source, destination);
    };

    return recursive(n, A, B, C);
};