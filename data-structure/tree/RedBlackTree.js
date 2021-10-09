import { RedBlackNode } from "../../models/tree-node";
import { Compare, defaultCompare } from "../../util";
import BinarySearchTree from "./BinarySearchTree";
import {Colors} from "../../models/tree-node";


export default class RedBlackTree extends BinarySearchTree{
    constructor(compareFn=defaultCompare){
        super(compareFn);
        this.compareFn=compareFn;
        this.root=null;
    }
    insert(key){
        if(this.root==null){
            this.root=new RedBlackNode(key);
            this.root.color=Colors.BLACK;
        }else{
            const newNode=this.insertNode(this.root,key);
            this.fixTreeProperties(newNode);    //验证插入新节点后是否满足红黑树规则
        }
    }
    insertNode(node,key){
        if(this.compareFn(key,node.key) === Compare.LESS_THAN){
            if(node.left==null){
                node.left=new RedBlackNode(key);
                node.left.parent=node;
                return node.left;
            }else{
                return this.insertNode(node.left,key);
            }
        }else if(node.right==null){
            node.right=new RedBlackNode(key);
            node.right.parent=node;
            return node.right;
        }else{
            return this.insertNode(node.right,key);
        }
    }
    fixTreeProperties(node){
        while(node && node.parent && node.parent.color.isRed() && node.color!==Colors.BLACK){
            let parent=node.parent;
            const grandParent=parent.parent;
            //case1 : 父节点是左侧子节点
            if(grandParent && grandParent.left===parent){
                const uncle=grandParent.right;
                //case1A : 叔节点也是红色------只需要重新填色
                if(uncle && uncle.color===Colors.RED){
                    grandParent.color=Colors.RED;
                    parent.color=Colors.BLACK;
                    uncle.color=Colors.BLACK;
                    node=grandParent;
                }else{
                    //case1B : node是右侧子节点------左旋转
                    if(node===parent.right){
                        this.rotationRR(parent);    
                        node=parent;
                        parent=node.parent;
                    }
                    //case1C : node是左侧子节点------右旋转
                    this.rotationLL(grandParent);
                    parent.color=Colors.BLACK;
                    grandParent.color=Colors.RED;
                    node=parent;    //向上搜索
                }
            }else{
                //case2:父节点是右侧子节点
                const uncle=grandParent.left;
                //case2A : 叔节点也是红色------只需要重新填色
                if(uncle && uncle.color===Colors.RED){
                    grandParent.color=Colors.RED;
                    parent.color=Colors.BLACK;
                    uncle.color=Colors.BLACK;
                    node=grandParent;
                }else{
                    //case2B : node是左侧子节点------右旋转
                    if(node===parent.left){
                        this.rotationLL(parent);
                        node=parent;
                        parent=node.parent;
                    }
                    //case2C : node是右侧子节点------左旋转
                    this.rotationRR(grandParent);
                    parent.color=Colors.BLACK;
                    grandParent.color=Colors.RED;
                    node=parent;
                }
            }
        }
        this.root.color=Colors.BLACK;
    }
    rotationLL(node){
        const tmp=node.left;
        node.left=tmp.right;
        if(tmp.right && tmp.right.key){
            tmp.right.parent=node;
        }
        tmp.parent=node.parent;
        if(!node.parent){
            this.root=tmp;
        }else{
            if(node===node.parent.left){
                node.parent.left=tmp;
            }else{
                node.parent.right=tmp;
            }
        }
        tmp.right=node;
        node.parent=tmp;
    }
    rotationRR(node){
        const tmp=node.right;
        node.right=tmp.left;
        if(tmp.left && tmp.left.key){
            tmp.left.parent=node;
        }
        tmp.parent=node.parent;
        if(!node.parent){
            this.root=tmp;
        }else{
            if(node===node.parent.left){
                node.parent.left=tmp;
            }else{
                node.parent.right=tmp;
            }
        }
        tmp.left=node;
        node.parent=tmp;
    }
}