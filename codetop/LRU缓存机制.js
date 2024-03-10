// 设计并实现一个满足LRU缓存约束的数据结构: 1.LRUCache(capacity)初始化，2.get(key)，3.put(key, value) 【O(1)时间复杂度】

class LRUCache{
    constructor(capacity){
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key){
        if(!this.map.has(key)) return -1;

        const val = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, val);

        return val;
    }

    put(key, value){
        if(this.map.has(key)) this.map.delete(key);
        this.map.set(key, value);
        
        let keys = this.map.keys();

        if(this.map.size > this.capacity) this.map.delete(keys.next().value);
    }
}