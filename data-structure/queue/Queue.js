
export default class Queue{
    constructor(){
        this.count=0;
        this.lowestCount=0;
        this.items={};
    }
    enqueue(item){
        this.items[this.count]=item;
        this.count++;
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        const result=this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    isEmpty(){
        return this.count-this.lowestCount===0;
    }
    size(){
        return this.count-this.lowestCount;
    }
    clear(){
        this.items={};
        this.count=0;
        this.lowestCount=0;
    }
    toString(){
        if(this.isEmpty()){
            return "";
        }
        let objString=`${this.items[this.lowestCount]}`;
        for(let i=this.lowestCount+1;i<this.count;i++){
            objString=`${objString},${this.items[i]}`;
        }
        return objString;
    }
}

//循环队列解决“击鼓传花”
export function hotPotato(itemList,num){
    const queue=new Queue();
    const eliminatedList=[];

    for(let i=0;i<itemList.length;i++){
        queue.enqueue(itemList[i]);//队列装载
    }

    while(queue.size()>1){
        for(let i=0;i<num;i++){
            queue.enqueue(queue.dequeue());//传花传num次
        }
        eliminatedList.push(queue.dequeue());//把杂鱼淘汰进eliminatedList
    }

    return {
        eliminated:eliminatedList,
        winner:queue.dequeue(),
    };//返回一个JSON对象
}