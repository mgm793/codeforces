var cases = readline();
var res = 0;
for(var i = 0; i < cases; ++i){
    var op = readline();
    if(op.includes('--')) --res;
    if(op.includes('++')) ++res;
}

print(res);