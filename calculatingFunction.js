function main(){
    var n = +readline();
    if(n%2){
        print(Math.ceil(n / 2) * -1); 
    }
    else{
        print(n / 2); 
    }
    
}

main();