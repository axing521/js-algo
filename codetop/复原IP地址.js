// 有效IP地址由四个整数和.组成【0-255】，给定一个字符串s，返回所有可能的有效IP地址(s="25525511135")
// 回溯，track是维护子段的栈，参数是s的剩余起始位置start，考虑边界：字段数为4，start和s.length大小，遍历三种切割长度

const func1 = (s) => {
    let ans = [];

    const dfs = (subAns, start) => {
        if(subAns.length == 4 && start == s.length){
            ans.push(subAns.join("."));
            return;
        }

        if(subAns.length == 4 && start < s.length){
            return;
        }

        for(let len = 1; len <= 3; len++){
            if(start + len - 1 >= s.length) return; // 越界
            if(len != 1 && s[start] == '0') return; // '0x'

            const str = s.substring(start, start + len);
            if(len == 3 && +str > 255) return; // 不能超过255

            subAns.push(str);
            dfs(subAns, start + len);
            subAns.pop();
        }
    };

    dfs([], 0);

    return ans;
};