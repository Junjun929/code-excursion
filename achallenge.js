// alert('hey')
//
// var ThingsIlike=['cat', 'cake','flower','movie']
//
//
//  function printReverse(){for(var i=ThingsIlike.length; i >= 0; i--){
//       console.log(arr[i]);
//     }
//   }
  // solution

    function printReverse(arr){
      for(var i = arr.length-1; i>=0; i--){
        console.log(arr[i]);
      }
    }

 printReverse(['cat', 'movie','flower','movie'])

//  isUniform
 function isUniform(arr){
     var first = arr[0];
     for(var i =1; i<arr.length; i++) {
    if(arr[i] !== first){
      return false
    }
   }
   return true;
 }

 // sum Array

 function sumArray(arr){
   var total = 0;
   arr.forEach(function(element){
     total += element;
   });
   return total;
 }
 // max Array

 function max(arr){
   var max = arr[0];
   for(var i =1; i<arr.lenth; i++){
     if(arr[i]> max){
       max =arr[i];
     }
   }
 }
return max;
