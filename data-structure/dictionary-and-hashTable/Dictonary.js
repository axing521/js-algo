import {defaultToString} from "../../util.js";

export class ValuePair{
    constructor(key,value){
        this.key=key;
        this.value=value;
    }
    toString(){
        return `[#${this.key}: ${this.value}]`;
    }
}

export default class Dictionary {
    constructor(toStrFn=defaultToString){
        this.toStrFn=toStrFn;
        this.table={};
    }
    hasKey(key){
        return this.table[this.toStrFn(key)] != null;
    }
    set(key,value){
        if(key!=null && value!=null){
            const tableKey=this.toStrFn(key);
            this.table[tableKey]=new ValuePair(key,value);
            return true;
        }
        return false;
    }
    remove(key){
        if(this.hasKey(key)){
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }
    /* get(key){
        const valuePair=this.table[this.toStrFn(key)];//性能更好，消耗更少
        return valuePair==null ? undefined : valuePair.value;
    } */
    get(key){
        if(this.hasKey(key)){
            return this.table[this.toStrFn(key)];
        }
        return undefined;
    }
    keyValues(){
        return Object.values(this.table);//返回数组形式
    }
    keys(){
        return this.keyValues().map(valuePair=>valuePair.key);
    }
    values(){
        return this.keyValues().map(valuePair=>valuePair.value);
    }
    forEach(callbackFn){
        const valuePairs=this.keyValues();
        for(let i=0;i<valuePairs.length;i++){
            const result=callbackFn(valuePairs[i].key,valuePairs[i].value);
            if(result===false){
                break;
            }
        }
    }
    size(){
        return Object.keys(this.table).length;
    }
    isEmpty(){
        return this.size()===0;
    }
    clear(){
        this.table={};
    }
    toString(){
        if(this.isEmpty()){
            return "";
        }
        const valuePairs=this.keyValues();
        let objString=`${valuePair[0].toString()}`;
        for(let i=1;i<valuePairs.length;i++){
            objString=`${objString},${valuePairs[i].toString()}`;
        }
        return objString;
    }
}

/* const dictionary=new Dictionary();
dictionary.set("Gandalf",["gandalf@email.com"]);
dictionary.set("John",["johnsnow@email.com"]);
console.log(dictionary.get("John")); */
