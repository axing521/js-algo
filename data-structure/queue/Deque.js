
export default class Deque{
    constructor(){
        this.count=0;
        this.lowestCount=0;
        this.items={};
    }
    addFront(element) {
        if (this.isEmpty()) {
          this.addBack(element);
        } else if (this.lowestCount > 0) {
          this.lowestCount--;
          this.items[this.lowestCount] = element;
        } else {
          for (let i = this.count; i > 0; i--) {
            this.items[i] = this.items[i - 1];
          }
          this.count++;
          this.lowestCount=0;
          this.items[0] = element;
        }
      }
    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }
    removeFront() {
        if (this.isEmpty()) {
          return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    removeBack() {
        if (this.isEmpty()) {
          return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    peekFront() {
        if (this.isEmpty()) {
          return undefined;
        }
        return this.items[this.lowestCount];
    }
    peekBack() {
        if (this.isEmpty()) {
          return undefined;
        }
        return this.items[this.count - 1];
    }
    isEmpty() {
        return this.size() === 0;
    }
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    size() {
        return this.count - this.lowestCount;
    }
    toString() {
        if (this.isEmpty()) {
          return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
          objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

//双端队列解决“回文检查器”
export function palindromeChecker(str){
    if(str===undefined || str===null || (str!==null && str.length===0)){   //话说这个地方有必要加这个!==null吗？
        return false;
    }
    const deque=new Deque();
    const lowerString=str.toLocaleLowerCase().split(" ").join("");
    let isEqual=true;
    let firstChar,lastChar;

    for(let i=0;i<lowerString.length;i++){
        deque.addBack(lowerString[i]);//装载双端队列
    }

    while(deque.size()>1 && isEqual){
        firstChar=deque.removeFront();
        lastChar=deque.removeBack();
        if(firstChar!==lastChar){
            isEqual=false;//说实话，这个isEqual很巧妙
        }
    }

    return isEqual;
}
//TestExample --> console.log("level",palindromeChecker("level"));