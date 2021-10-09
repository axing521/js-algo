function commonParentNode(oNode1, oNode2) {
    if(oNode2.contains(oNode1)){
        return oNode2;
    }
    for(;oNode1;oNode1=oNode1.parentNode){
        if(oNode1.contains(oNode2)){
            return oNode1;
        }
    }
}