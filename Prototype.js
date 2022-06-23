///// ---------- PROTOTYPES IN JS ------------- //////
////   POINTS TO REMEMBER :
// 1. Every variable, Function, Object etc in javascript, when declared is attached with a Protorype Object which
//    has access to hidden methods and properties. 
// 2. So if we create an array named arr, it would have arr.__proto__ === Array.prototype, which further is
//    arr.__proto__.__proto__ === Object.prototype, which further is Object.prototype.__proto__ === null. This is
//    also called as the prototype chain.
// 3. We can set an object, namely object1 as the prototype of another object, namely object2. Doing this provides 
//    access to the properties and methods of object1 to object2. This is called Prototypal Inheritance.
// 4. In technical terms, object2 is inheriting properties and methods from the 'proto' which is pointing at object1.

let object1 = {
    name: 'vivek',
    city: 'dhanbad',
    intro(){
        console.log(`${this.name} from ${this.city}`);
    }
}

let object2 = {
    name: 'vishal'
}

// When any method or property are called by object2, control of program will look for that method or property in 
// object2 if not it will look for it in object1 then due to prototypal inheritance.

object2.__proto__ = object1;    // This is not recommended, though here object1 is set as the prototype of the object2.

Function.prototype.hello = function(){
    console.log(this);      // So the function
}

function fun(){
    //
}

fun.hello();    // We got the access to hello() method as function fun() inherited it from the proto in which we added the method hello().