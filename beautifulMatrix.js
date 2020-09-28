var px;
var py;
var res = 0;
for(var i = 0; i < 5; ++i){
    var line = readline().split(' ');
    for(var j = 0; j < 5; ++j){
        if(+line[j] === 1){
            px = j;
            py = i;
        }
    }
}

res = Math.abs(3 - (px + 1)) + Math.abs(3 - (py + 1));

print(res);
