console.log('Starting');

let reg = /Vivek/; // Regular Expression Literals
// reg = /Vivek/g;    // The little 'g' is meant to be the Global Flag.
// reg = /Vivek/i;       // The 'i' is Insensitivity Flag.


console.log(reg);           // Prints the Regular Expression Literal as it is..
console.log(reg.source);    // Prints the Regular Expression literal source.

// Functions to match Expressions using Regular Expressions...

//// ###### ------ 1. exec() -->> This will return an array for match and NULL for no match..
let s = 'This is great code with Vivek and also Vivek is a good guy.';

// console.log(reg.exec(s));     //  All the below results are same as no flag is mentioned in the Regular Expression Literal.. 
// console.log(reg.exec(s));     //  ,,  ,,   ,, ,,  ,,  ,,  ,, ,, ,, ,, ,, ,,  ,,   ,, ,,  ,,  ,,  ,, ,, ,, ,, ,,
// console.log(reg.exec(s));     //   ,,  ,,   ,, ,,  ,,  ,,  ,, ,, ,, ,, ,, ,,  ,,   ,, ,,  ,,  ,,  ,, ,, ,, ,, ,,

// console.log(reg.exec(s));     //  All the below results are NOT same as Global flag is mentioned in the Regular Expression Literal.. 
// console.log(reg.exec(s));     //  The results tells us the next position of the index mentioned in the Regular Expression of the Literal.
// console.log(reg.exec(s));     //   ,,  ,,   ,, ,,  ,,  ,,  ,, ,, ,, ,, ,, ,,  ,,   ,, ,,  ,,  ,,  ,, ,, ,, ,, ,,

// console.log(reg.exec(s));        // Result of Insensitivity Flag..

// let result = reg.exec(s);
// console.log(result.index);        // Result of Insensitivity Flag..

//// ###### ------ 2. test() -->> This will return True for match and Flase for no match..

// let result2 = reg.test(s);
// console.log(result2);            // Returns True if Refular Expression String is mentioned in the String s, else returns False 


//// ###### ------ 3. match() -->> Returns array of results or NULL..

// let result3 = reg.match(s);  -->> This is wrong syntax.
// let result3 = s.match(reg);
// console.log(result3);    

//// ###### ------ 4. search() -->> Returns index of first match or returns -1..

// let result3 = reg.search(s);  -->> This is wrong syntax.
// let result3 = s.search(reg);
// console.log(result4);

//// ###### ------- 5. replace() -->> Returns new string with first occurance replaced..if used with Global Flags, all occurances are replaced.

// let result5 = s.replace(reg, 'Ravi');
// console.log(result5);

