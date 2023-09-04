function formatDate(t,str){
    var obj = {
      yyyy:t.getFullYear(),
      yy:(""+ t.getFullYear()).slice(-2),
      M:t.getMonth()+1,
      MM:("0"+ (t.getMonth()+1)).slice(-2),
      d:t.getDate(),
      dd:("0" + t.getDate()).slice(-2),
      H:t.getHours(),
      HH:("0" + t.getHours()).slice(-2),
      h:t.getHours() % 12,
      hh:("0"+t.getHours() % 12).slice(-2),
      m:t.getMinutes(),
      mm:("0" + t.getMinutes()).slice(-2),
      s:t.getSeconds(),
      ss:("0" + t.getSeconds()).slice(-2),
      w:['日', '一', '二', '三', '四', '五', '六'][t.getDay()]
    };
    return str.replace(/([a-z]+)/ig,function(m){return obj[m]});
}