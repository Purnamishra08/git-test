// call stack 
var n = 16;
function square(num) {
    var ans = num * num;
    return ans;
}
var square2 = square(n);
console.log(square2);
var square6 = square(12);
console.log(square6);

// Hoisting 

var x = 7;
function getName() {
    console.log("Namaste Java script");
}
getName();
console.log(x);
// How function works

var x = 1;
a();
b();
console.log(x);

 function a()
 {
     var x=10;
     console.log(x);
 }
 function b()
 {
      var x=100;
     console.log(x);
 }
