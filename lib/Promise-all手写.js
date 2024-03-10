function customPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError('promises must be an array'));
        }

        let results = [];
        let completedPromises = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(result => {
                    results[index] = result;
                    completedPromises++;

                    if (completedPromises === promises.length) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });

        if (promises.length === 0) {
            resolve(results);
        }
    });
}

// 示例用法
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

customPromiseAll([promise1, promise2, promise3])
    .then(results => {
        console.log(results); // 输出 [3, 42, 'foo']
    })
    .catch(error => {
        console.error(error);
    });
