// 在一个s字符串中查找它的无重复字符的最长子串，返回长度
// 快慢指针，滑动窗口，set记录窗口无重复字符

const func1 = s => {
    let slow = 0;
    let set = new Set();
    let ans = 0;

    for (let fast = 0; fast < s.length; fast++) {
        while (set.has(s[fast])) {
            set.delete(s[slow++]);
        }

        set.add(s[fast]);

        ans = Math.max(ans, fast - slow + 1);
    }

    return ans;
};

let s = 'abcabcbb';
console.log(func1(s)); // abc => 3
