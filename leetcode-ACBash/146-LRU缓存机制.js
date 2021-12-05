/***
 * @creater:ACBash
 * @create_time:21-12-5 12:51:10
 * @last_modify:ACBash
 * @modify_time:21-12-5 16:59:23
 * @line_count:107
 **/

/* LRU缓存机制,哈希表 + 双向链表,哈希表用于O(1)时间查找，链表用于频繁增删 */
class ListNode{
    constructor(key, val){
        this.key = key;
        this.val = val;
        this.pre = null;
        this.next = null;
    }
};

class LRUCache{
    constructor(capacity){
        this.capacity = capacity;
        this.size = 0;
        this.data = {};
        this.head = new ListNode();
        this.tail = new ListNode();
        this.head.next = this.tail;
        this.tail.pre = this.head;
    }

    get(key){
        if(!this.data[key]) return -1;
        else{
            let node = this.data[key];
            this.removeNode(node);
            this.appendHead(node);
            
            return node.val;
        }
    }

    put(key, value){
        if(!this.data[key]){
            let node = new ListNode(key, value);

            this.data[key] = node;
            this.appendHead(node);
            this.size++;

            if(this.size > this.capacity){
                const lastKey = this.removeTail();
                delete this.data[lastKey];
                this.size--;
            }

        }else{
            let node = this.data[key];
            this.removeNode(node);
            node.val = value;
            this.appendHead(node);
        }   
    }

    removeNode(node){
        let preNode = node.pre;
        let nextNode = node.next;

        preNode.next = nextNode;
        nextNode.pre = preNode;
    }

    appendHead(node){
        let firstNode = this.head.next;

        this.head.next = node;
        node.pre = this.head;
        node.next = firstNode;
        firstNode.pre = node;
    }

    removeTail(){
        let key = this.tail.pre.key;

        this.removeNode(this.tail.pre);
        
        return key;
    }
}

/* API怪，Map()解决 */
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