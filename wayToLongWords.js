var cases = readline();
var stricLen = 10;
for(var i = 0; i < cases; ++i){
    var word = readline();
    if(word.length <= stricLen){
        print(word);
        continue;
    }
    var splitedWord = word.split("");
    print(`${splitedWord[0]}${word.length - 2}${splitedWord[word.length - 1]}`);
}

