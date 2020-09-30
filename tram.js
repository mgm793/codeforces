var n = readline();
var ac = 0;
var res = 0;
for(var i = 0; i < n; ++i){
    var c = readline().split(' ');
    ac += (+c[1] - +c[0]);
    if(ac > res) res = ac;
}   
print(res);