// // console.log(hello);                                   
// // var hello = 'world';

// //var hello;
// // console.log(hello);                                   
// // hello = 'world';


// ////////////////////////////////////

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
//     console.log(food)
// }

/////AFTER HOISTING
// // var food;
// //function eat(){
//     //var food;
//     //food = 'half-chicken';
//     //console.log(food);
//     //food = 'gone';

// // }
// // food ='chicken';
// // console.log(food);
// //eat();



////////////////////////////////////////
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);


//AFTER HOISTING
//var mean;
//mean();
//console.log(food);
//mean = function() {
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }




