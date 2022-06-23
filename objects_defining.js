
// If defining using object literals, copying it could be 
/// tiring in case the object has BEHAVIOUR i.e multiple methods.

/// In the example below, the constructor property of object is used to construct the object. 
// const circle = {
//     radius: 1,
//     location: {
//         x:1,
//         y:2
//     },
//     draw: function(){
//         console.log("draw");
//     }
// };

// circle.draw();

// To make the code reusable in case of defining an object, we use Fatory Function:
function createCircle(radius){
    return {
        radius, // ES6 feature that if parameter and key has the same name, we do not need to specify the value against it.
        draw: function(){
            console.log("draw");
        }
    };
}

// We can call the Factory Function createCircle(radius) with the desirable radius passed as the argument.

// const circle = createCircle(1);
// circle.draw();

// OR
// createCircle(1).draw();

///// NOW THE RAAMBAAN OF DEFINING objects, as I see it to be:

///// EVERY OBJECT IN JAVASCRIPT HAS A PROPERTY CONSTRUCTOR,
///// WHICH REFERENCES TO THE FUNCTION WHICH IS USED TO DEFINE OR CONSTRUCT THAT OBJECT.

// CONSTRUCTR FUNCTIONS:
/// So a constructor function is always defined in CAPS..
function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

// So the keyword 'new' does some things..
/// 1. Cretes an empty object {}.
/// 2. References the this mentioned in the constructor function to that empty object.
/// 3. Returns the newly defined object.
const constructorCircle = new Circle(1);
// console.log(constructorCircle);


// for (let key in constructorCircle){
//     console.log(key, constructorCircle[key]);
// }

// OR

const keys = Object.keys(constructorCircle);  // Returns an array of keys of contructorCircle object.
// console.log(keys);    

// 'in' operator:

// if ('radius' in constructorCircle){
//     console.log("Radius in Circle");
// }


/////// To Clone an object ///////

let obj1 = {
    x: 'r',
    y: 1
}

const copyObj1 = Object.assign({}, obj1);    /// Copies the obj1 into the empty object passed and returns it to copyObj1
// const copyObj1 = {...obj1};        /// More elegant way to copy objects in JS.
console.log(copyObj1);
