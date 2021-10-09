
//数组栈
export default class ArrStack{
    constructor(){
        this.items=[];
    }
    push(item){
        this.items.push(item);
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length===0;
    }
    size(){
        return this.items.length;
    }
    clear(){
        this.items=[];
    }
}

//对象栈
export class ObjStack{
    constructor(){
        this.count=0;
        this.items={};
    }
    push(item){
        this.items[this.count]=item;
        this.count++;
    }
    size(){
        return this.count;
    }
    isEmpty(){
        return this.count===0;
    }
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        this.count--;
        const result=this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count-1];
    }
    clear(){
        this.items={};
        this.count=0;
    }
    /* 遵循LIFO原则clear()
    clear(){
        while(!this.isEmpty()){
            this.pop();
        }
    } */
    toString(){
        if(this.isEmpty()){
            return "";
        }
        let objString=`${this.items[0]}`;
        for(let i=1;i<this.count;i++){
            objString=`${objString},${this.items[i]}`;
        }
        return objString;
    }
}

//十进制转二进制算法
export function decimalToBinary(decNumber){
    const remStack=new ArrStack();
    let number=decNumber;
    let rem;
    let binaryString="";

    while(number>0){
        rem=Math.floor(number%2);        //按理说，不要floor应该也行
        remStack.push(rem);              //压栈
        number=Math.floor(number/2);     //变化number
    }

    while(!remStack.isEmpty()){
        binaryString+=remStack.pop().toString();
    }

    return binaryString;
} 
//TestExample --> console.log(decimalToBinary(233));

//十进制转基数2~36任意进制算法
export function baseConverter(decNumber,base){
    const remStack=new ArrStack();
    const digits="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let number=decNumber;
    let rem;
    let baseString="";

    if(!(base>=2 && base<=36)){
        return "";
    }

    while(number>0){
        rem=Math.floor(number%base);
        remStack.push(rem);
        number=Math.floor(number/base);
    }

    while(!remStack.isEmpty()){
        baseString+=digits[remStack.pop()];
    }

    return baseString;
}
//TestExample --> console.log(baseConverter(100345,35));