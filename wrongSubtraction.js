var input = readline().split(' ');
var n = input[0];
for(var i = 0; i < input[1]; ++i){
    if(n % 10) n -= 1;
    else n /= 10;
}
print(n);