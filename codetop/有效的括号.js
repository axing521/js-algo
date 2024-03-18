// 给定一个只包含小/中/大括号的字符串s，判断字符串是否有效
// 开心消消乐思想，用内置API-includes/replace

const func1 = s => {
    while (s.includes('()') || s.includes('[]') || s.includes('{}')) {
        s = s.replace('()', '').replace('[]', '').replace('{}', '');
    }

    return s.length === 0;
};

// 用栈来存左括号，如果有右括号并且stack最后一个能匹配那么就pop
const func2 = s => {
    let stack = [];

    for (const i in s) {
        if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
            stack.push(s[i]);
        } else if (s[i] == ')' && stack[stack.length - 1] == '(') {
            stack.pop();
        } else if (s[i] == ']' && stack[stack.length - 1] == '[') {
            stack.pop();
        } else if (s[i] == '}' && stack[stack.length - 1] == '{') {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
};
