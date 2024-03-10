// 将两个字符串形式的非负整数num1和num2，计算数值和以字符串形式返回，不能用处理大整数的库以及转整数形式
// 按位加，两个尾指针，考虑进位add

const func1 = (num1, num2) => {
    let i = num1.length - 1,
        j = num2.length - 1,
        add = 0;
    const ans = [];

    while (i >= 0 || j >= 0 || add != 0) {
        const x = i >= 0 ? num1.charAt(i) - '0' : 0;
        const y = j >= 0 ? num2.charAt(j) - '0' : 0;
        const result = x + y + add;

        ans.push(result % 10);
        add = Math.floor(result / 10);

        i--;
        j--;
    }

    return ans.reverse().join('');
};
