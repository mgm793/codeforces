var input = readline().split(' ');
var i = 1;
var l = +input[0];
var b = +input[1];
while(true){
    if(l > b) break;
    l *= i * 3;
    b *= i * 2;
    ++i;
}
print(i - 1);