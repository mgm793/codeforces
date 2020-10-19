function main(){
    var input = readline().split('');
    var exp = 'hello';
    var actual = 0;
    for(var i = 0; i < input.length; ++i){
        if(input[i] === exp[actual]){
            ++actual;
        }
        if(actual >= exp.length){
            print('YES');
            return;
        }
    }
    print('NO')
}

main();