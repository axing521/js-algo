/***
 * @creater:ACBash
 * @create_time:22-10-19 15:52:22
 * @last_modify:ACBash
 * @modify_time:22-10-19 15:52:28
 * @line_count:37
 **/

//栈模拟,students = [1,1,0,0], sandwiches = [0,1,0,1];
const countStudents = (students, sandwiches) => {
    let flag = 0;   //设置一个flag来表示学生队列连续回队尾的次数。

    while(students.length){
        if(flag == students.length) break;  //如果这个flag次数达到了队列的长度，那么说明全都不吃栈顶的三明治，break。

        if(students[0] == sandwiches[0]){
            students.shift();
            sandwiches.shift();
            flag = 0;                       //有人开吃咯，队列发生变化，flag重置为0
        }else{
            students.push(students.shift());
            flag++;
        }
    }

    return students.length;
};

//题目给了0， 1表示吃⚪还是方形的学生，以s0表示吃圆形的学生数量，以s1表示吃方形的学生数量
const countStudents = (students, sandwiches) => {
    let s1 = students.reduce((prev, cur) => prev + cur, 0);
    let s0 = students.length - s1;

    for(let i = 0; i < sandwiches.length; i++){
        if(sandwiches[i] == 0 && s0 > 0){
            s0--;
        }else if(sandwiches[i] == 1 && s1 > 0){
            s1--;
        }else{
            break;
        }
    }

    return s0 + s1;
};