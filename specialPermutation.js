function main(){
  var n = readline();
  for(var i = 0; i < n; ++i){
      var num = readline();
      var res = '';
      res += `${num} `;
      for(var j = 1; j < num - 1; ++j){
          res += `${j} `;
      }
      res += num - 1;
      print(res);
  }
}

main();