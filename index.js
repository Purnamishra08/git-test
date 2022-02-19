// //////////////Hoisting//////////////////////
// getName();
// // console.log(x);
// console.log("HELLO");
// // console.log(getName);
// var x=7;
// // function getName()
// // {
// //   console.log("Xer");
// // }
// function getName()
// {
//     console.log("Namaste Java Script");
// }
////////////////////call stack////////////////////////
var n = 2;
function square(num){
    var ans = num * num ;
    return ans;
    // console.log(ans);
}
var square2 = square(n);

