import {Node} from "../../models/tree-node.js";
import {Compare,defaultCompare} from "../../util.js";
import BinarySearchTree from "./BinarySearchTree.js";

export const BalanceFactor={
    UNBALANCED_RIGHT:1,
    SLIGHTLY_UNBALANCED_RIGHT:2,
    BALANCED:3,
    SLIGHTLY_UNBALANCED_LEFT:4,
    UNBALANCED_LEFT:5
};

export default class AVLTree extends BinarySearchTree{
    constructor(compareFn=defaultCompare){
        super(compareFn);
        this.compareFn=compareFn;
        this.root=null;
    }
    getNodeHeight(node){
        if(node==null){
            return -1;
        }
        return Math.max(
            this.getNodeHeight(node.left),this.getNodeHeight(node.right)
        ) + 1;
    }
    getBalanceFactor(node){
        const heightDifference=this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
        switch(heightDifference){
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;      //1
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;     //2
            case  1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;      //4
            case  2:
                return BalanceFactor.UNBALANCED_LEFT;       //5
            default:
                return BalanceFactor.BALANCED;      //3
        }
    }
    rotationLL(node){
        const tmp=node.left;
        node.left=tmp.right;
        tmp.right=node;
        return tmp;
    }
    rotationRR(node){
        const tmp=node.right;
        node.right=tmp.left;
        tmp.left=node;
        return tmp;
    }
    rotationLR(node){
        node.left=this.rotationRR(node.left);
        return this.rotationLL(node);
    }
    rotationRL(node){
        node.right=this.rotationLL(node.right);
        return this.rotationRR(node);
    }
    insert(key){
        this.root=this.insertNode(this.root,key);
    }
    insertNode(node,key){
        //just like BST-Tree
        if(node==null){
            return new Node(key);
        }else if(this.compareFn(key,node.key) === Compare.LESS_THAN){
            node.left=this.insertNode(node.left,key);
        }else if(this.compareFn(key,node.key) === Compare.BIGGER_THAN){
            node.right=this.insertNode(node.right,key);
        }else{
            return node;    //重复的键
        }
        //if needed , balance this tree
        const balanceFactor=this.getBalanceFactor(node);
        if(balanceFactor === BalanceFactor.UNBALANCED_LEFT){
            if(this.compareFn(key,node.left.key) === Compare.LESS_THAN){
                node=this.rotationLL(node);
            }else{
                node=this.rotationLR(node);   //这个跟上一句是不是有问题？
            }
        }
        if(balanceFactor === BalanceFactor.UNBALANCED_RIGHT){
            if(this.compareFn(key,node.right.key) === Compare.BIGGER_THAN){
                node=this.rotationRR(node);
            }else{
                node=this.rotationRL(node);
            }
        }
        return node;
    }
    remove(key){
        this.root=this.removeNode(this.root,key);
    }
    removeNode(node,key){
        node=super.removeNode(node,key);    //返回值是更新后的node
        if(node === null){
            return node;    //null,不需要进行balance
        }
        //test-tree-balance
        const balanceFactor=this.getBalanceFactor(node);    
        if(balanceFactor === BalanceFactor.UNBALANCED_LEFT){
            const balanceFactorLeft=this.getBalanceFactor(node.left);
            if(balanceFactorLeft===BalanceFactor.BALANCED || balanceFactorLeft===BalanceFactor.SLIGHTLY_UNBALANCED_LEFT){
                return this.rotationLL(node);
            }
            if(balanceFactorLeft===BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT){
                return this.rotationLR(node);
            }
        }
        if(balanceFactor === BalanceFactor.UNBALANCED_RIGHT){
            const balanceFactorRight=this.getBalanceFactor(node.right);
            if(balanceFactorRight===BalanceFactor.BALANCED || balanceFactorRight===BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT){
                return this.rotationRR(node);
            }
            if(balanceFactorRight===BalanceFactor.SLIGHTLY_UNBALANCED_LEFT){
                return this.rotationRL(node);
            }
        }
        return node;
    }
}

/* let tree=new AVLTree();
tree.insert(11);
tree.insert(9);
tree.insert(7);


tree.insert(5);
tree.insert(3);


console.log(tree.root); */