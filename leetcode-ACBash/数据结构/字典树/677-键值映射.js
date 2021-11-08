/***
 * @creater:ACBash
 * @create_time:21-11-8 17:34:15
 * @last_modify:ACBash
 * @modify_time:21-11-8 20:46:55
 * @line_count:141
 **/

/* 字典树 */
class MapSum{
    constructor(){
        this.children = {};
    }

    nodeVal(key){
        let node = this.children;

        for(const c of key){
            if(!node[c]) return 0;
            node = node[c];
        }

        return node["val"];
    }

    insert(key, val){
        let node = this.children;

        const change = val - this.nodeVal(key);

        for(const c of key){
            if(!node[c]) node[c] = {"count": 0, "val": 0};
            node[c]["count"] += change;
            node = node[c];
        }

        node["val"] = val;
    }

    sum(prefix){
        let node = this.children;

        for(const c of prefix){
            if(!node[c]) return 0;
            node = node[c];
        }

        return node["count"];
    }
}

/* API怪 */
class MapSum{
    constructor(){
        this.container = {};
    }

    insert(key, val){
        this.container[key] = val;
    }

    sum(prefix){
        let sum = 0;

        for(const [key, val] of Object.entries(this.container)){
            if(key.startsWith(prefix)) sum += val;
        }

        return sum;
    }
}

/* 字典树模板化??未成功 */
class Trie{
    constructor(){
        this.children = {};
    }

    insert(str){
        let node = this.children;

        for(const c of str){
            if(!node[c]) node[c] = {};
            node = node[c];
        }

        node["isEnd"] = true;
    }

    startsWith(str){
        let node = this.children;

        for(const c of str){
            if(!node[c]) return false;
            node = node[c];
        }

        return true;
    }

    search(str){
        let node = this.children;

        for(const c of str){
            if(!node[c]) return false;
            node = node[c];
        }

        return !!node["isEnd"];
    }
}

class MapSum{
    constructor(){
        this.container = new Trie();
        this.map = {};
    }

    insert(key, val){
        this.container.insert(key);
        this.map[key] = val;
    }

    sum(prefix){
        let sum = 0;

        for(const [key, val] of Object.entries(this.map)){
            if(this.container.startsWith(prefix)) sum += this.map[key];
        }

        return sum;
    }
}



/* let mapSum = new MapSum();

mapSum.insert("appled", 2); console.log(mapSum);

console.log(mapSum.sum("ap"));

mapSum.insert("apple", 3); console.log(mapSum);

console.log(mapSum.sum("a"));

mapSum.insert("apple", 2); console.log(mapSum);

console.log(mapSum.sum("a")); */