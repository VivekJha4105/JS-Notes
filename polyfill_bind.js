

///////// --- POLYFILL FOR BIND METHOD ---- /////

let name1 = {
    name: 'vivek',
    age: 24
}

let printName = function(hometown, state, country){
    console.log(`${this.name} is ${this.age} years old. Lives in ${hometown}, state ${state}, country ${country}`);
}

let printName2 = printName.bind(name1, 'Dhanbad');    // Binds the printName2() function with the object name1, resulting the 'this' in printName() 
                                                      /// refers to name1.
printName2('Jharkhand', 'India');

/////  Custom Bind() Method. /////
//// Properties of our Custom bind() Method:
// 1. All the functions should have access to it.
// 2. It should return a function which can be called later.
// 3. It should have the object reference as argument.


/// So our myBind() needs to behave as bind().
// It should return a function which is a copy of printName() binded with object name1.
// So the this keyword is used to access the printName() method and the object to bind is passed as argument.

// Also, suppose we pass arguments to printName3() and wish them behave as same as with printName2(). Then,
// we need to provide the arguments as the parameter to the function which is returned to printName3() method.

Function.prototype.myBind = function(...args){
    let obj = this          // Somehow we cant use this.apply(). We need to first assign 'this' in a variable and then use it.????????
    params = args.slice(1); // returns an array of all the arguments passed to myBind() method.
    return function(...args2){
        obj.apply(args[0], [...params, ...args2]);
    }
}

let printName3 = printName.myBind(name1, 'Dhanbad');  // So the 'this' keyword in myBind will refer to method printName().
printName3('Jharkhand','India');