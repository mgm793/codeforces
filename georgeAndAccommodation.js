function main(){
    var n = readline();
    var res = 0;
    for(var i = 0; i < n; ++i){
        var c = readline().split(' ');;
        if(+c[1] - +c[0] >= 2) ++res;
    }
    print(res);
}

main();