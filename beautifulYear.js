function main(){
    var year = +readline();
    var found = false;
    while(!found){
        ++year;
        var arr = year.toString().split('');
        var set = new Set(arr);
        if(arr.length !== set.size) continue;
        found = true;
    }
    print(year);
}

main();