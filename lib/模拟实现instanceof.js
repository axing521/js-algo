function simInstanceof(left, right){
    if(left === null || (typeof left !== "object" && typeof left !== "function")) return false;

    while(true){
        if(left === null) return false;

        if(left === right.prototype) return true;

        left = left.__proto__;
    }
}