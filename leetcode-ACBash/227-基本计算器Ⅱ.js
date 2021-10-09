const calculate = (s) => {
    let num = 0;
    let preSign = "+";
    let stack0 = [];
    for(let i=0; i<s.length; i++){
        if(!isNaN(s[i]) && s[i]!==" "){
            num = num*10 + parseInt(s[i]);
        }
        if(isNaN(s[i]) || i===s.length-1){
            switch(preSign){
                case "+": stack0.push(num); break;
                case "-": stack0.push(-num); break;
                case "*": stack0.push(stack0.pop()*num); break;
                default:  stack0.push(stack0.pop()/num | 0); break;
            }
            preSign = s[i];
            num = 0;
        }
    }
    let ans = 0;
    while(stack0.length){
        ans += stack0.pop();
    }
    return ans;
}

