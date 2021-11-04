/***
 * @creater:ACBash
 * @create_time:21-11-3 20:30:22
 * @last_modify:ACBash
 * @modify_time:21-11-4 11:51:3
 * @line_count:54
 **/

/* 说好听点叫扁平化，其实就是直接先中序遍历出遍历数组，再迭代 */
class BSTIterator{
    constructor(root){
        this.root = root;
        this.visited = [null];
        this.index = 0;
        /* ---这个递归中序遍历部分可以写到原型--- */
        const inorder = (node) => {
            if(!node) return;

            inorder(node.left);
            this.visited.push(node.val);
            inorder(node.right);
        }
        /* ---这个递归中序遍历部分可以写到原型--- */
        inorder(this.root);

        return this.visited[0];
    }

    hasNext(){
        return this.index + 1 < this.visited.length;
    }

    next(){
        return this.visited[++this.index];
    }
}

/* 模拟法实时迭代，懒加载 */
class BSTIterator{
    constructor(root){
        this.node = root;
        this.stack = [];
    }

    hasNext(){
        return this.node || this.stack.length;
    }

    next(){
        //建议先将node和stack从this中解构赋值出来，免得忘记+this
        while(this.node){
            this.stack.push(this.node);
            this.node = this.node.left;
        }

        this.node = this.stack.pop();
        const ans = this.node.val;
        this.node = this.node.right;

        return ans;
    }
}