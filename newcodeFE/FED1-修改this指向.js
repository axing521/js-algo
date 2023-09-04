function bindThis(f, oTarget) {
    /* 1.bind */
    /*return f.bind(oTarget);*/
    
    /* 2.apply */
    /* return function(){
        return f.apply(oTarget,arguments);
    } */

    /* 3.call */
    /* return function(){
        return f.call(oTarget,...arguments);
    } */

    /* 4.将函数作为对象的方法调用 */
    /* oTarget.fn=f;
    return function(){
        return oTarget.fn(...arguments);
    } */
}