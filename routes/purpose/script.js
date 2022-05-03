var words = "WHAT IS YOUR PURPOSE?"

$( document ).ready(function() {

  function typeWriter(l,s,i){
    var track = "";
    var len = s.length;
    var n = 0;
    $(l).text("");
    var si = setInterval(function(){
    var res = track + s.charAt(n);
    $(l).text(res);
    track = res;
    if(n===len-1){
        clearInterval(si);
    }
    n = n + 1;
  },i);
  }

  typeWriter("h1", words, 100 )

});

