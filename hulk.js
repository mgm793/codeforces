function main(){
    var n = +readline();
    var w = ['hate', 'love'];
    var res = '';
    for(var i = 0; i < n; ++i){
        res += 'I ' + w[i%2];
        if(i === n - 1){
            res += ' it';
        }
        else{
            res += ' that ';
        }
    }
    print(res);
}

main();