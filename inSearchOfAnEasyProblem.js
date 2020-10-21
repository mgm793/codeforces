function main(){
    var n = +readline();
    var input = readline().split(' ');
    for(var i = 0; i < n; ++i){
        if(+input[i]) {
            print('HARD');
            return;
        }
    }
    print('EASY');
}

main();