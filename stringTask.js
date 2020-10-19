function main(){
    var i = readline().toLowerCase().split('');
    var res = i.reduce((acc, l) => {
        if(!l.match(/[aeiouy]/)) acc += `.${l}`;
        return acc; 
    }, '');
    print(res);
}

main();