/* 栈，迭代，DFS */
const cloneGraph = (node) => {
    if(!node) return null;
    let stack0 = [node];
    let map0 = new Map();
    let newNode = new Node(node.val,[]);
    map0.set(node,newNode);
    while(stack0.length){
        let _node = stack0.pop();
        let _newNode = map0.get(_node);
        _node.neighbors.forEach(neighbor => {
            let _newNB = map0.get(neighbor);
            if(!_newNB){
                stack0.push(neighbor);
                _newNB = new Node(neighbor.val,[]);
                map0.set(neighbor,_newNB);
            }
            _newNode.neighbors.push(_newNB);
        })
    }
    return newNode;
}

/* 递归 */
const clone = (node,map) => {
    if(!node) return null;
    let newNode = map.get(node);
    if(newNode) return newNode;                         //有无映射，有则说明已经遍历过此点,返回
    newNode = new Node(node.val,[]);
    map.set(node,newNode);                              //真品与赝品的映射
    node.neighbors.forEach(neighbor => {                //遍历原图节点,填充赝品邻接表
        newNode.neighbors.push(clone(neighbor,map));    
    })
    return newNode;
}

const cloneGraph = (node) => {
    return clone(node, new Map());
}