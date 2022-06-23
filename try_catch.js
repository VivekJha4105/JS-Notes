
/// Below is shown on how to throw error, in case entire execution needs to stop in case of certain errors.

// let a = 'vivek';
a = undefined;
if (a != undefined) {
    throw new Error('This is defined.');   // throw keyword followed by new followed by Error('message_name')
} else {
    console.log('This is not defined.');
}



/// Below is try and catch block for cases where execution does not need to stop, even if we encounter certain errors.
try {
    console.log('We are inside the try block.');
    a();
} catch (error) {
    // console.log(error.name);
    console.log(error.message);
} finally {
    console.log('Finally executes, regardless of error.');
}


/////// ########## --------- SOME FAMOUS TYPES OF ERRORS ---------- ######### //////////////

// EvalError
// Creates an instance representing an error that occurs regarding the global function eval().
// InternalError 
// Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g. "too much recursion".
// RangeError
// Creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range.
// ReferenceError
// Creates an instance representing an error that occurs when de-referencing an invalid reference.
// SyntaxError
// Creates an instance representing a syntax error.
// TypeError
// Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.
// URIError
// Creates an instance representing an error that occurs when encodeURI() or decodeURI() are passed invalid parameters.
// Constructor
