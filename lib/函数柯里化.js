function sum(...args) {
    const add = (...args2) => sum(...args.concat(args2));
    add.valueOf = () => args.reduce((a, b) => a + b, 0);
    return add;
}

console.log(sum(1, 2, 3, 4, 5).valueOf()); // 输出：15
console.log(sum(1, 2, 3)(4, 5).valueOf()); // 输出：15
console.log(sum(1)(2)(3)(4)(5).valueOf()); // 输出：15
