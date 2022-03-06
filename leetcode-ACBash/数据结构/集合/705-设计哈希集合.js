/***
 * @creater:ACBash
 * @create_time:22-3-4 20:23:57
 * @last_modify:ACBash
 * @modify_time:22-3-6 13:36:51
 * @line_count:41
 **/

 class MyHashSet{
    constructor(){
        this.BASE = 769;
        this.data = Array.from({length: this.BASE}, () => []);
    }

    add(key){
        const hash = this.hash(key);
        let list = this.data[hash];

        for(const item of list){
            if(item == key) return;
        }

        list.push(key);
    }

    remove(key){
        const hash = this.hash(key);
        let list = this.data[hash];

        list.forEach((val, index) => {
            if(val == key) list.splice(index, 1);
        })
    }

    contains(key){
        const hash = this.hash(key);
        let list = this.data[hash];

        for(const item of list){
            if(item == key) return true;
        }

        return false;
    }

    hash(key){
        return key % this.BASE;
    }
}