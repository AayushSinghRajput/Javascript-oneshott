// // Ways to print in javascript
// console.log("hello world");
// // alert("hello world");
// // document.write("hello world");





// // javascript console Api (application programming interface)
// console.warn("this is a warning");
// console.error("this is an error"); //to lock the error in console
// //conole.clear(); //to clear the console
// // console.assert(5==(4+1));
// console.log("hello", 3, "world");


// /*
// multi 
// line  
// comment  
// */



// // javascript variables
// var1 = 3;
// var2 = 2;
// console.log(num1+num2);



// // Data types in js
// var num1 =233;
// var num2 = 23.42;
// console.log(num1)
// console.log(num2)
 
// var str1 ="This is a string"
// var str2 = 'This is also a string'
// console.log(str1)
// console.log(str2)
// console.log(str1 + str2)

// var marks ={
//     aayush : 33,
//     bishal : 92,
//     bhanu :  32
// }
// console.log(marks);



// var a = true;
// var b = false;
// console.log(a)
// console.log(b)


// // var und = undefined;
// var und;
// console.log(und)



// var n = null;
// console.log(n);


// /*
// At a very high level ,there are two types of data types in javascript
// 1.primitive data type:undefined,null,number,string,boolean,symbol
// 2.Reference data type:Arrays and objects
// */


// var arr = [1,2,3,4,5]
// var arr1 = ["aayush",'bishal','bhanu']
// console.log(arr1)
// console.log(arr1[2])
// console.log(arr);
// console.log(arr[3]);




// Operators in javascript
// Arithmetic operator
a = 22;
b = 33;
console.log("The value of a + b is ",a+b);
console.log("The value of a - b is ",a-b);
console.log("The value of a * b is ",a*b);
console.log("The value of a / b is ",a/b);
  

// Assignment operator
var c = a;
c+=2
console.log(c);


// comparison operator
var x = 22;
var y = 44;
// console.log(x==y);
// console.log(x<=y);
// console.log(x>=y);


// logical operator
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false  || false);


// console.log(!false);
// console.log(!true);


// function avg(a,b){
//     return (a+b)/2;
// }
// console.log(avg(2,4));

function fibo(n){
    if (n==0){
        return 0;

    }else if (n==1){
        return 1;
    }else {
        return fibo(n-1)+fibo(n-2);
    }
}
console.log(fibo(4));


// function age(n){
//     if (n>=18){
        
//         // console.log("you can drive");
//         return "you can drive"
//     }else if (n<18){
       
//         // console.log("you cannot drive")
//          return "you cannot drive"
//     }

// }
// console.log(age(32));

// In JavaScript, if a function doesn't return anything explicitly, it returns undefined by default.


// conditionals in javascript
function age(n) {
    if (n < 18) {
        return "you cannot drink";
    } else if (n >= 18 && n < 25) {
        return "you can drink only beer";
    } else if (n >= 25) {
        return "you can drink anything hard drink";
    }
}

console.log(age(22));  // This will print "you can drink only beer"



// loops in javascript
var arr = [1,2,3,4,5,6,7]
console.log(arr);
for(var i = 0 ; i<arr.length ;i++){
    console.log(arr[i]);
}
