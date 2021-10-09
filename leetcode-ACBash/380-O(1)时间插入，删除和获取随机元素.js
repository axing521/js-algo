class RandomizedSet{
    constructor(){
        this.arr=[];
        this.map={};
    }

    _size(){
        return this.arr.length;
    }

    _swap(a,b){
        [this.arr[a],this.arr[b]] = [this.arr[b],this.arr[a]];
    }

    insert(val){
        if(val in this.map) return false;
        this.arr.push(val);
        this.map[val] = this._size()-1;
        return true;
    }

    remove(val){
        if(!(val in this.map)) return false;
        let index=this.map[val];
        let lastIndex=this._size()-1;
        if(index<lastIndex){
            this._swap(index,lastIndex);
            this.map[this.arr[index]]=index;
        }
        this.arr.pop();
        delete this.map[val];
        return true;
    }

    getRandom(){
        let size=this._size();
        if(size===0) return false;
        let index=Math.floor(Math.random() * size);
        return this.arr[index];
    }
}