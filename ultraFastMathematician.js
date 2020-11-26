process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readline() {
    return inputString[currentLine++];
}

function main(){
    const n1 = readline().split('');
    const n2 = readline().split('');
    let res = '';
    for(let i = 0; i < n1.length; ++i){
        const [num1, num2] = [+n1[i], +n2[i]];
        if((num1 && num2) || (!num1 && !num2)) res += '0';
        else res += '1';
    }
    console.log(res);
}