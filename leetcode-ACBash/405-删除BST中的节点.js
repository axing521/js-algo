/***
 * @creater:ACBash
 * @create_time:21-11-4 14:11:38
 * @last_modify:ACBash
 * @modify_time:21-11-4 22:18:53
 * @line_count:65
 **/

/* 递归，妙不可言，被删节点有三种，注意一下 */
const deleteNode = (root, key) => {
    if(!root) return null;

    if(key < root.val){
        root.left = deleteNode(root.left, key); //这个root.left = 太巧妙了
    }else if(key > root.val){
        root.right = deleteNode(root.right, key);
    }else{
        if(!root.left) return root.right;
        //被删节点只有一个子节点，直接返回该子节点，其实还包括了没有子节点的情况
        if(!root.right) return root.left;

        let node = root.right;  //找后继：右子树的最左点

        while(node.left) node = node.left;

        node.left = root.left;

        return root.right;
    }

    return root;    //秒哉
};

/* 迭代实现✅ */
const deleteNode = (root, key) => {
    let node = root;

    while(node){
        if(key < node.val){
            if(node.left) node.left.prev = [node, "left"];
            node = node.left;
        }else if(key > node.val){
            if(node.right) node.right.prev = [node, "right"];
            node = node.right;
        }else{
            if(node == root){
                if(!node.left) return node.right;
                if(!node.right) return node.left;
    
                let pred = node.right;
                while(pred.left) pred = pred.left;
                pred.left = node.left;
                return node.right;
            }

            const [parent, dir] = node.prev;
            if(!node.left){
                parent[dir] = node.right; break;
            }
            if(!node.right){
                parent[dir] = node.left; break;
            }

            let pred = node.right;
            while(pred.left) pred = pred.left;
            pred.left = node.left;
            parent[dir] = node.right;
            break;
        }
    }

    return root;
};