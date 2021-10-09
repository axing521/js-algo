function strLength(s, bUnicode255For1) {
    let len = s.length
    if(bUnicode255For1 !== true){
        for(let i in s){
            if(s.charCodeAt(i)>255)len++
        }        
    }
    return len
}