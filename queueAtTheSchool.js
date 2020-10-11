function main(){
    var cas = readline().split(' ');
    var arr = readline().split('');
    var n = +cas[0];
    var times = +cas[1];
    while(times){
        for(var i = 0; i < n; ++i){
            if(arr[i] === 'B' && arr[i + 1] === 'G'){
                arr[i] = 'G';
                arr[i + 1] = 'B';
                ++i;
            }
        }
        --times;
    }
    print(arr.join(''));
}

main();