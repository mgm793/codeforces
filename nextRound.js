var n = readline().split(' ');
var points = readline().split(' ');
var res = 0;


for(var i = 0; i < n[0]; ++i){
    var p = +points[i];
    if(p > 0 && p >= +points[+n[1] - 1]) ++res;
}

print(res);