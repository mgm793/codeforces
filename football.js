function main(){
    var arr = readline().split('');
    var z = 0; 
    var o = 0;
    for(var i = 0; i < arr.length; ++i){
        if(arr[i] == 0 && arr[i - 1] == 1){
            o = 0;
        }
        if(arr[i] == 1 && arr[i - 1] == 0){
            z = 0;
        }
        if(arr[i] == 0) ++z;
        if(arr[i] == 1) ++o;
        if(z >= 7 || o >= 7){
            print('YES');
            return;
        }
    }
    print('NO');
    
}

main();