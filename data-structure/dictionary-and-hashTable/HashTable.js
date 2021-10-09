import { defaultToString } from "../../util";
import { ValuePair } from "./Dictonary";

export default class HashTable{
    constructor(toStrFn=defaultToString){
        this.toStrFn=toStrFn;
        this.table={};
    }
    loseloseHashCode(key){//这个可以复用
        if(typeof key==="number"){
            return key;
        }
        const tableKey=this.toStrFn(key);
        let hash=0;
        for(let i=0;i<tableKey.length;i++){
            hash+=tableKey.charCodeAt(i);//String类的charCodeAt方法会返回指定位置字符的ASCII码
        }
        return hash%37;
    }
    hashCode(key){//简单调用loselose
        return this.loseloseHashCode(key);
    }
    put(key,value){
        if(key!=null && value!=null){
            const position=this.hashCode(key);
            this.table[position]=new ValuePair(key,value);
            return true;
        }
        return false;
    }
    get(key){
        const valuePair=this.table[this.hashCode(key)];
        return valuePair==null ? undefined : valuePair.value;
    }
    remove(key){
        const hash=this.hashCode(key);
        const valuePair=this.table[hash];
        if(valuePair!=null){
            delete this.table[hash];
            return true;
        }
        return false;
    }
    
}