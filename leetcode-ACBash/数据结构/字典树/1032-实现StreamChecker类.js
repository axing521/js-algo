/***
 * @creater:ACBash
 * @create_time:21-11-22 15:47:7
 * @last_modify:ACBash
 * @modify_time:21-11-22 17:13:7
 * @line_count:66
 **/

/* 倒序插入，stack记录输入 */
class StreamChecker{
    constructor(words){
        this.trie = this.buildTrie(words);
        this.stack = [];
    }

    buildTrie(words){
        let root = {};

        for(const word of words){
            const len = word.length;
            let node = root;

            for(let i = len - 1; i >= 0; i--){
                const c = word[i];
                
                if(!node[c]) node[c] = {};
                node = node[c];
            }

            node["isEnd"] = true;
        }

        return root;
    }

    query(letter){
        let node = this.trie;

        this.stack.push(letter);
        
        if(!node[letter]) return false;
    
        for(let i = this.stack.length - 1; i >= 0; i--){
            const c = this.stack[i];
            
            if(!node[c]) return false;
            node = node[c];
            
            if(node["isEnd"]) return true;
        }
        
        return false;
    }
}

/* let a = new StreamChecker(["cd","f","kl"]);

console.log(a.query("a"));
console.log(a.query("b"));
console.log(a.query("c"));
console.log(a.query("d"));
console.log(a.query("e"));
console.log(a.query("f"));
console.log(a.query("g"));
console.log(a.query("h"));
console.log(a.query("i"));
console.log(a.query("j"));
console.log(a.query("k"));
console.log(a.query("l"));
console.log(a.query("m"));
console.log(a.query("n"));
console.log(a.query("o"));
console.log(a.query("p"));
console.log(a.query("q")); */