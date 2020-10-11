function main(){
    var word = readline();
    var letters = word.split('');
    var lower = 0;
    var upper = 0;
    for(var i = 0; i < letters.length; ++i){
        if(letters[i].match(/[A-Z]/)) ++upper;
        else ++lower;
    }
    if(lower >= upper){
        print(word.toLowerCase());
    }
    else{
        print(word.toUpperCase());
    }
    
}

main();