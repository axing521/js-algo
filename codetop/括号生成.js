// 数字n表示生成括号的对数，设计一个函数，用域能够生成所有可能的并且有效的括号组合
// 回溯，track数组记录括号，backtrack的入参是left和right表示左右括号的剩余数

const func1 = n => {
    if (n == 0) return [];

    const ans = [];
    let track = [];

    const backtrack = (left, right, track, ans) => {
        if (left < 0 || right < 0) return;
        if (right < left) return;
        if (left == 0 && right == 0) {
            ans.push(track.join(''));
            return;
        }

        track.push('(');
        backtrack(left - 1, right, track, ans);
        track.pop();

        track.push(')');
        backtrack(left, right - 1, track, ans);
        track.pop();
    };

    backtrack(n, n, track, ans);

    return ans;
};
