var cases = readline();
var winMatch = 0;
for(var i = 0; i < cases; ++i){
    var points = readline();
    if(points.includes('1 1') || points.includes('1 0 1')){
        ++winMatch;
    }
}

print(winMatch);