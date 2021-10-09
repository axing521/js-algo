function namespace(oNamespace, sPackage) {
    let list = sPackage.split('.');
    let tmp = oNamespace;   //小指针探索
    for (var k in list) {
        if (typeof tmp[list[k]] !== 'object') {
            tmp[list[k]] = {};
        }
        tmp = tmp[list[k]]; //对象下溯
        /* console.log(tmp); */
    }
    /* console.log(oNamespace.a.b.c); */
    return oNamespace;
};

console.log(namespace({a: {test: 1, b: 2}}, 'a.b.c.d'));