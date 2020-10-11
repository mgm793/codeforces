function main(){
    var n = readline().split('');
    var found = 0;
    for(var i = 0; i < n.length; ++i){
        if(n[i] === '7' || n[i] === '4') ++found;
    }
    var a = found.toString().split();
    for(var i = 0; i < a.length; ++i){
        if(a[i] !== '7' && a[i] !== '4') {
            print('NO');
            return;
        }
    }
    print('YES');
}

main();

