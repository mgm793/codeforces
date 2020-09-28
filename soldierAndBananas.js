var input = readline().split(' ');
var cost = input[0];
var dolars = input[1];
var n = input[2];
var val = 0;

for(var i = 1; i <= +n ; ++i){
    val += i * +cost;
}

print(val > dolars ? val - dolars : 0);