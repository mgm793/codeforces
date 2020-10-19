function main(){
    var ncases = +readline();
    for(var i = 0; i < ncases; ++i){
        var input = readline().split(' ');
        var res = Math.ceil((+input[0] - 2) / +input[1]) +1;
        print(res || 1);
    }
}

main();