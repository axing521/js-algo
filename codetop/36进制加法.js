// 36进制由0-9，a-z，共36个字符表示。不允许使用先将36进制数字整体转为10进制，相加后再转回为36进制的做法

// 36进制编码实现

const getNums36 = () => {
    let nums36 = [];

    for (let i = 0; i < 36; i++) {
        if (i >= 0 && i <= 9) {
            nums36.push(i);
        } else {
            nums36.push(String.fromCharCode(i + 87));
        }
    }

    return nums36;
};

const base36 = n => {
    let arr = [];
    let nums36 = getNums36();

    while (n) {
        let ans = n % 36;
        arr.unshift(nums36[ans]);
        n = parseInt(n / 36);
    }

    return arr.join('');
};

// ---------!!!

const getInt = val => {
    if (val >= '0' && val <= '9') return val - '0';
    else return val.charCodeAt(0) - 97 + 10;
};

const getChar = val => {
    if (val <= 9) return String.fromCharCode(val + 48);
    else return String.fromCharCode(val - 10 + 97);
};

const add36Strings = (num1, num2) => {
    let carry = 0;
    let i = num1.length - 1,
        j = num2.length - 1;
    let ans = [];

    while (i >= 0 || j >= 0 || carry != 0) {
        let x = i >= 0 ? getInt(num1[i]) : 0;
        let y = j >= 0 ? getInt(num2[j]) : 0;
        let sum = x + y + carry;

        ans.push(getChar(sum % 36));
        carry = (sum / 36) | 0;
        i--;
        j--;
    }

    return ans.reverse().join('');
};

console.log(add36Strings('abbbb', '1'));
