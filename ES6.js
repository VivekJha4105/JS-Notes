
// ######## 01. #######
// Accessing individual elements of an object:
const address = {
    street:'halo',
    town:'yelo',
    state:'khelo'
};

// const street = address.street;
// const town = address.town;
// const state = address.state;

/// OR

// Below line stores the values of the properties of object address in the const variables...
// const {street, town, state} = address;

// We can also put aliases to the object properties..
const {street:str, town:twn, state:st} = address;
console.log(str, twn, st);


// ######## 02. #######
/// SPREAD OPERATOR...:

const arr1 = [1,2,34];
const arr2 = [4,4,5];

const combine1 = [...arr1, ...arr2];
const combine2 = ['a',...arr1,'b',...arr2,'c'];
console.log(combine1);
console.log(combine2);

const obj3 = {
    name: 'Vivek'
}

const copyObj3 = {...obj3};  // Spread operator is used to copy an object as well efficiently.
console.log(copyObj3);