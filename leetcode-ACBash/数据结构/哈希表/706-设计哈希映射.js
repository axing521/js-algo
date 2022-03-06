/***
 * @creater:ACBash
 * @create_time:22-3-6 13:36:49
 * @last_modify:ACBash
 * @modify_time:22-3-6 13:58:16
 * @line_count:46
 **/

 class MyHashMap{
    constructor(){
        this.BASE = 769;
        this.data = Array.from({length: this.BASE}, () => []);
    }

    put(key, val){
        const hash = this.hash(key);
        let list = this.data[hash];

        for(const item of list){
            if(item[0] == key){
                item[1] = val;
                return;
            }
        }
        
        list.push([key, val]);
    }

    get(key){
        const hash = this.hash(key);
        let list = this.data[hash];

        for(const item of list){
            if(item[0] == key){
                return item[1];
            }
        }

        return -1;
    }

    remove(key){
        const hash = this.hash(key);
        let list = this.data[hash];

        list.forEach((item, index) => {
            if(item[0] == key) list.splice(index, 1);
        });
    }

    hash(key){
        return key % this.BASE;
    }
}