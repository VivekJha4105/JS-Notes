

console.log('We are starting here.');

async function printName() {
    console.log('Inside the function.');
    const response = await fetch('http://api.github.com/users');
    console.log('before response.');
    const users = await response.json();
    console.log('users resolved.');
    return users;
}


console.log('Before calling function.');
let a = printName();
console.log('After calling function.');
console.log(a);
a.then((data) => console.log(data));
console.log('Last line of the code');

// OUTPUT OF ABOVE WOULD BE:

// We are starting Here.
// Before Calling function.
// Inside the function.
// After calling Function.
// promise(pending..) .... //// Here, We tried to print the unresolved, still pending promise.
// Last line of the code.
// before response.
// users resolved
// the actual detailed object output....
