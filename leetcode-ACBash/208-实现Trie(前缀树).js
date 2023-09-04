/***
 * @creater:ACBash
 * @create_time:21-11-7 22:52:49
 * @last_modify:ACBash
 * @modify_time:21-11-16 14:11:28
 * @line_count:47
 **/

/* 字典树 */
class Trie{
    constructor(){
        this.children = {};
    }

    insert(word){
        let node = this.children;

        for(const c of word){
            if(!node[c]) node[c] = {"isEnd": false};
            node = node[c];
        }

        node["isEnd"] = true;
    }

    search(word){
        let node = this.children;

        for(const c of word){
            if(!node[c]) return false;
            node = node[c];
        }

        return node["isEnd"];
    }

    startsWith(prefix){
        let node = this.children;

        for(const c of prefix){
            if(!node[c]) return false;
            node = node[c];
        }

        return true;
    }
}

/* let a = new Trie();

a.insert("apple"); console.log(a);

console.log(a.search("apple"));

console.log(a.search("app")); */