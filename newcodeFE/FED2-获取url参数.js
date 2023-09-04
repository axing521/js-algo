function getUrlParam(sUrl, sKey) {
    var result = {}
    sUrl.replace(/\??(\w+)=(\w+)&?/g, function(a, k, v){
        result[k] = result[k]? [...result[k]].concat(v) : v
    })
    return sKey? result[sKey]? result[sKey] : '' : result
}