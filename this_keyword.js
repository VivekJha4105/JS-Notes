
///////  THUMB RULES  ///////

// If this is used in a function which is a method in an object,
/// then this keyword is referencing that object.

// For fns not called by objects - 
// Eg call back functions - 'this' refers to the global object.

let video = {
    title: 'a',
    tags: ['b', 'c', 'd'],
    showTags() {
        // console.log(this.title);
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this);
    }
}

// For fns defined using arrow functions
//  - 'this' simple refers to the object that is executing
//  the arrow function - Irrespective of object's scope. 
// Meaning:  if the arrow function is called from a global scope?
//  'this' will refer to the global object.
//  If the arrow function is called with in a function which belongs to an object?
// 'this' will refer to the calling function's scope and in this case the object itself.

let video2 = {
    title: 'a',
    tags: ['b', 'c', 'd'],
    showTags() {
        // console.log(this.title);
        this.tags.forEach(tag => console.log(this.title, tag));
    }
}

// video.showTags();
video2.showTags();

///// I AM YET TO LOOK AT THE BEHAVIOUR OF this KEYWORD IN CASE OF CONSTRUCTORS. ////