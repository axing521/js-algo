/***
 * @creater:ACBash
 * @create_time:21-11-22 11:14:44
 * @last_modify:ACBash
 * @modify_time:21-11-22 15:47:9
 * @line_count:117
 **/

/* 自己写的字典树，130ms，关键在于buildTrie中的倒序插入，search中的step */
const minimumLengthEncoding = (words) => {
    let ans = 0;

    const buildTrie = (words) => {
        let root = {};

        for(const word of words){
            const len = word.length;
            let node = root;

            for(let i = len - 1; i >= 0; i--){
                const c = word[i];

                if(!node[c]) node[c] = {};
                node = node[c];
            }
        }

        return root;
    };

    let trie = buildTrie(words);
    
    const search = (node, step = 1) => {
        let keys = Object.keys(node);

        for(const key of keys){
            search(node[key], step + 1);
        }

        if(!keys.length) ans += step;
    };  //关键在于这个step

    search(trie);

    return ans;
};

/* 用Map()优化，时间空间都有改善 */
const minimumLengthEncoding = (words) => {
    let ans = 0;

    const buildTrie = (words) => {
        let root = new Map();

        for(const word of words){
            const len = word.length;
            let node = root;

            for(let i = len - 1; i >= 0; i--){
                const c = word[i];

                if(!node.has(c)) node.set(c, new Map());
                node = node.get(c);
            }
        }

        return root;
    };

    const trie = buildTrie(words);
    
    const search = (node, step = 1) => {
        if(!node.size) ans += step;

        node.forEach(val => search(val, step + 1));
    };  //关键在于这个step

    search(trie);

    return ans;
};

/* LC，Set(数组)去重,Set太灵性了 */
const minimumLengthEncoding = (words) => {
    let hashSet = new Set(words), ans = 0;

    for(const val of hashSet){
        for(let i = 1; i < val.length; i++){
            const target = val.slice(i);

            hashSet.has(target) && hashSet.delete(target);
        }
    }

    hashSet.forEach(val => ans += val.length + 1);

    return ans;
};

/* LC,这个做法也好牛逼，精髓，暴力模拟 */
var minimumLengthEncoding = function(words) {
    let S = ''
    words = words.sort( (a,b)=>b.length - a.length)
    for( let i = 0; i < words.length; i++ ){
        const word = words[i]
        const index = S.indexOf( word + '#' )   //问题本质
        if( !~index ) {
            S += `${word}#`
        }
    }
    return S.length
};

/* LC，草，API怪真的牛逼 */
var minimumLengthEncoding = function(words) {
    return words.map(word => {
        return word.split('').reverse().join('')
    }).sort().reduce((result, word, index, arr) => {
        let next = arr[index + 1] || ''
        if (word.length > next.length || next.slice(0, word.length) != word) {  //这个判断是精髓之处
            result += word.length + 1
        }
        return result
    }, 0)
}