// 给定两个版本号version1和version2，比较大小
// 切割为数组，一层层比较，使用parseInt能够去除前置0

const func1 = (version1, version2) => {
    const arr1 = version1.split('.');
    const arr2 = version2.split('.');
    const maxLen = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLen; i++) {
        const cur = arr1[i] || 0;
        const next = arr2[i] || 0;

        if (arr1[i] === arr2[i]) continue;
        if (parseInt(cur) > parseInt(next)) {
            return 1;
        } else if (parseInt(cur) < parseInt(next)) {
            return -1;
        }
    }

    return 0;
};
