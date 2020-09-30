var i = readline();
var steps = 0;
while(i > 0){
    ++steps;
    if(i >= 5) i -= 5;
    else{
        i = 0;
    }
}

print(steps);