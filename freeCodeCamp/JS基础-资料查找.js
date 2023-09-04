function lookUpProfile(name, prop){
    // 请把你的代码写在这条注释以下
    var what;
    for(var i=0;i<4;i++){
      if(contacts[i].firstName!=name){
        what="No such contact";
        continue;
      }else if(!(contacts[i].hasOwnProperty(prop))){
        what="No such property";
        break;
      }else{
        what=contacts[i][prop];
        break;
      }
    }
    return what;
    // 请把你的代码写在这条注释以上
    }