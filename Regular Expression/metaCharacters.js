

// let regex = /vivek/;
// regex = /^viv/;      // The ^(carrot) indicate that complete string should be starting with mentioned expression.
// regex = /vek$/;      // This checks for complete string ending wiht the mentioned expression.
// regex = /v.vek/;     // This matches for any string with any ONE character in place of .(dot)
// regex = /v*vek/;     // This matches for any string with any ONE or MORE characters in place of *
// regex = /vi?ve?k/;   // ? after the character means that character's presence is optional..
regex = /v\*ivek/;      // To use above mentioned meta characters as part of the string, use \.


let s = 'The v*ivek is good ';

// let result = regex.exec(s);
// console.log('The result from exec is at position : ', result.index);

// let result2 = regex.test(s);    
// console.log(result2);

// let result3 = regex.test(s);
// console.log(result3);

// let result4 = regex.test(s);    
// console.log(result4);



// if(regex.test(s)) {
//     console.log(`The Expression "${regex.source}" is present in the string "${s}"`);
// }
// else {
//     console.log(`The Expression "${regex.source}" is NOT present in the string "${s}"`);

// }