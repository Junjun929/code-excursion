function factorial(num){
  // define a result variable
  // calculate factorial
  var result = 1;
  for (var i =2; i<=num; i++;)
  {result *= i;
  }
  return result;
}
//
 function isEven(i){
   if(i % 2 == 0){
     return true
   }
 else {
   return false
 }}
//
 function kebabToSnake(str){
  var newStr=  str.replace(/-/g, "_");
  return newStr;
 }
