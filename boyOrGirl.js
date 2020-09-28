var input = readline().split('');
var len = new Set(input).size;
print(len % 2  ? 'IGNORE HIM!' : 'CHAT WITH HER!');
