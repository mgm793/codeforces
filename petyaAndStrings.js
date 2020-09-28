var s1 = readline().toLowerCase();
var s2 = readline().toLowerCase();
var res;
if(s1 === s2) res = 0;
else if(s1 > s2) res = 1;
else res = -1;
print(res);