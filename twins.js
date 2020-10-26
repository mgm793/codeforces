function main(){
    var n = +readline();
    var ms = readline().split(' ').sort((a,b) => +b - +a);
    var sum = ms.reduce((acc, ac) => acc + +ac, 0);
    var med = sum / 2;
    var res = 0;
    for(var i = 0; i < n; ++i){
        res += +ms[i];
        if(res > med){
            break;
        }
    }
    print(i + 1);
}

main();