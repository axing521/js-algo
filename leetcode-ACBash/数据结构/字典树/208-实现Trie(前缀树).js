/***
 * @creater:ACBash
 * @create_time:21-11-7 22:52:49
 * @last_modify:ACBash
 * @modify_time:21-11-8 17:35:48
 * @line_count:47
 **/

/* 字典树 */
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

/* let a = new Trie();

a.insert("apple"); console.log(a);

console.log(a.search("apple"));

console.log(a.search("app")); */