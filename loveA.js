function main(){
    var inp = readline().split('');
    var n = 0;
    for(var i = 0; i < inp.length; ++i){
        if(inp[i] === 'a') ++n;
    }
    if(n > inp.length / 2) print(inp.length);
    else print(2* n - 1);
}

main();