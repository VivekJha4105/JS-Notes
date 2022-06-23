let names = {
    firstName: "Vivek",
    lastName: "Jha"
};

let names2 = {
    firstName: "Sham",
    lastName: "Sundar"
};

let printFullName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
};

// function_to_invoke.call(reference_to_the_object) references to an object where this.variable_name points to the object variables..
// It can also take additional comma separated arguments.
printFullName.call(names, "dhanbad", "Jharkhand");
printFullName.call(names2, "kolkata", "bengal");

// function_to_invoke.apply(reference_to_the_object) does the same as call().
// Only diff that it takes additional arguments as an array.
printFullName.apply(names, ["Dhanbad", "Jharkhand"]);
printFullName.apply(names2, ["Kolkata", "West Bengal"]);

// Bind() has also same kind of functions but it does not simply invokes the functions.
// Below, bind() makes a copy of printFullName() method, binds the arguments passed to it, 
/// and returns a copy of that function which can be invoked later on..

let bind_printFullName = printFullName.bind(names, "Dhanbad", "Jharkhand");
bind_printFullName();