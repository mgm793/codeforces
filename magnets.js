function main(){
    var n = +readline();
    var prev;
    var res = 1;
    for(var i = 0; i < n; ++i){
        var num = readline();
        if(!prev){
            prev = num;
            continue;
        }
        if(prev !== num) ++res;
        prev = num;
    }

    print(res);
}

main();