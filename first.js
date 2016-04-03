var a = 10;

var b = 20;

function add(a,b){
  console.log(a+b);
  return a+b;
}
exports.add //使用模块化管理将add 函数暴漏出去
