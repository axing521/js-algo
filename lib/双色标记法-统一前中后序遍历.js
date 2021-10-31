/***
 * @creater:ACBash
 * @create_time:21-10-31 15:53:33
 * @last_modify:ACBash
 * @modify_time:21-10-31 16:8:22
 * @line_count:96
 **/

/* 
垃圾回收算法中，有一种算法叫三色标记法。 即：

用白色表示尚未访问
灰色表示尚未完全访问子节点
黑色表示子节点全部访问
那么我们可以模仿其思想，使用双色标记法来统一三种遍历。

其核心思想如下：

使用颜色标记节点的状态，新节点为白色，已访问的节点为灰色。
如果遇到的节点为白色，则将其标记为灰色，然后将其右子节点、自身、左子节点依次入栈。
如果遇到的节点为灰色，则将节点的值输出。 
*/

/* 模板 */
const orderTraversal = (root) => {
    const [WHITE, GRAY] = [0, 1];
    let ans = [], stack = [[WHITE,root]];

    while(stack.length){
        const [color, node] = stack.pop();

        if(!node) continue;
        if(color == WHITE){
            //stack.push()的顺序?
        }else{
            ans.push(node.val);
        }
    }

    return ans;
};

/* 前序遍历 */
const preorderTraversal = (root) => {
    const [WHITE, GRAY] = [0, 1];
    let ans = [], stack = [[WHITE,root]];

    while(stack.length){
        const [color, node] = stack.pop();

        if(!node) continue;
        if(color == WHITE){
            stack.push([WHITE, node.right]);
            stack.push([WHITE, node.left]);
            stack.push([GRAY, node]);
        }else{
            ans.push(node.val);
        }
    }

    return ans;
};

/* 中序遍历 */
const inorderTraversal = (root) => {
    const [WHITE, GRAY] = [0, 1];
    let ans = [], stack = [[WHITE,root]];

    while(stack.length){
        const [color, node] = stack.pop();

        if(!node) continue;
        if(color == WHITE){
            stack.push([WHITE, node.right]);
            stack.push([GRAY, node]);
            stack.push([WHITE, node.left]);
        }else{
            ans.push(node.val);
        }
    }

    return ans;
};

/* 后序遍历 */
const postorderTraversal = (root) => {
    const [WHITE, GRAY] = [0, 1];
    let ans = [], stack = [[WHITE,root]];

    while(stack.length){
        const [color, node] = stack.pop();

        if(!node) continue;
        if(color == WHITE){
            stack.push([GRAY, node]);
            stack.push([WHITE, node.right]);
            stack.push([WHITE, node.left]);
        }else{
            ans.push(node.val);
        }
    }

    return ans;
};