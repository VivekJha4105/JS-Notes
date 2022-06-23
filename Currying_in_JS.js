
///// CURRYING is a technique in functional programming, transformation of the function of multiple arguments
////// into several functions of a single argument in sequence.

// There are two ways to achieve Currying: 
//// ------- 1. with bind() method...

let multiply = function(x,y){
    return x*y;
}

let multiplyByTwo = multiply.bind(this);  // This is same as setting argument x = 2. Arguments passed here
                                          /// takes precedence over arguments passed when multiplyByTwo() is called.
console.log(multiplyByTwo(2,3));          // Here, 3 is passed to parameter 'y' in multiply() method.

let multiplyByThree = multiply.bind(this,3);
console.log(multiplyByThree(4));



//// ------- 2. with closures...

let multi = function(x){
    return function(y){
        console.log(x*y);   // This works because parameter x is in the lexical scope of the function with parameter y.
    }
}

let multiByTwo = multi(2);  // Setting parameter x = 2.
multiByTwo(4);              // Setting parameter y = 4.

