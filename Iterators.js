
/////////////// 3################### ---------- LOOK FOR MORE CLARITY REGARDING ITERATORS....

// Iterators are Modern JavaScript Concepts...
// Iterators should contain a next(), done as well as any javascript value..

function fruitsIterator (values) {
    let nextIndex = 0;
    // Return an Object
    return {
        next: function () {
            if (nextIndex < values.length) {
                // Return an Object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                // Return an Object
                return {
                    done: false
                }
            }
        }
    }
}

myArray = ['Apple', 'Banana', 'Mango', 'Orange', 'Papaya'];
console.log('My Array is', myArray);

// Using the Iterator

const fruits = fruitsIterator(myArray);
console.log(fruits.next());
console.log(fruits.next());