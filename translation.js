function main(){
    var f = readline();
    var s = readline();
    if(f === s.split('').reverse().join('')){
        print('YES');
    }
    else{
        print('NO');
    }
}

main();