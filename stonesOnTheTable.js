var n = readline();
var stones = readline().split('');
var prev = stones[0];
var res = 0;
for(var i = 1; i < n; ++i){
    if(stones[i] === stones[i - 1]) ++res;
}

print(res);