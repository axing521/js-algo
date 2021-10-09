
export default class Set{
    constructor(){
        this.items={};
    }
    has(item){
        return item in this.items;
    }
    /* has(item){
        return Object.prototype.hasOwnProperty().call(this.items,item);//这个是更好的实现方式，注意in和hasOwnProperty()的区别
    } */
    add(item){
        if(!this.has(item)){
            this.items[item]=item;
            return true;
        }
        return false;
    }
    delete(item){
        if(this.has(item)){
            delete this.items[item];
            return true;
        }
        return false;
    }
    clear(){
        this.items={};
    }
    size(){
        return Object.keys(this.items).length;
    }
    values(){
        return Object.values(this.items);
    }
    union(otherSet){
        const unionSet=new Set;
        this.values().forEach(value=>unionSet.add(value));
        otherSet.values().forEach(value=>unionSet.add(value));
        return unionSet;
    }
    intersection(otherSet){
        const intersectionSet=new Set();
        const values=this.values();
        for(let i=0;i<value.length;i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }
    difference(otherSet){
        const differenceSet=new Set();
        this.values().forEach(value=>{
            if(!otherSet.has(value)){
                differenceSet.add(value);
            }
        });
        return differenceSet;
    }
    isSubsetOf(otherSet){
        if(this.size() > otherSet.size()){
            return false;
        }
        let isSubset=true;
        this.values().every(value=>{
            if(!otherSet.has(value)){
                isSubset=false;
                return false;
            }
            return true;
        });
        return isSubset;
    }
}

