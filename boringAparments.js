function main(){
    var n = +readline();
    for(var i = 0; i < n; ++i){
        var c = readline().split('');
        var l = 1;
        if(c.length === 2) l = 3;
        if(c.length === 3) l = 6;
        if(c.length === 4) l = 10;
        print(l + ((+c[0] - 1) * 10));
    }
}

main();