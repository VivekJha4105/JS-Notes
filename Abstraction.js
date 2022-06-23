
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = {x:0, y:1};

    this.showDefaultLocation = function () {
        console.log(defaultLocation);        // Due to the CLOSURE which this function forms with object, defaultLocation is accessible in this scope.
    }

    this.draw = function () {
        console.log('draw');
    }

    /// In case we need to display the so called private variables of this object, we can define them as object properties.
    // The first argument of the Object.defineProperty is reference to the object we are defining the property to..
    // The second argument is name of the variable or method, we wanna make into a property, passed as a string.
    // The third argument is a object with the keyword 'get' as a key with value being a function returning the property we wanna display.
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        
        /// Whatever property we define we can only see it in the console as a part of the Object properties under the feature 'getter'.
        /// Getter is used to display private members of the function.
        /// Setter is used to make changes to the value of private members from the outside.

        set: function(value){         
            defaultLocation = value
        }
    });
}

const circle = new Circle(1); // constructs an object..

circle.draw();
console.log(circle.radius);
circle.showDefaultLocation();

//// We are able to make changes to the defaultLocation function due to the setter keyword.
circle.defaultLocation = {
    x:9,
    y:3
};
circle.showDefaultLocation();
