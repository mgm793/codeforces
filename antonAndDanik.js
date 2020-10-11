function main(){
    var n = +readline();
    var arr = readline().split('');
    var A = 0;
    var D = 0;
    for(var i = 0; i < n; ++i){
        if(arr[i] === 'A') ++A;
        else ++D;
    }
    if(A < D) {
        print('Danik');
        return;
    }
    if(A > D){
        print('Anton');
        return;
    }
    print('Friendship');
}

main();