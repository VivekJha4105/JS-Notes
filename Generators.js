
///// Generaotrs are used to generate values on-the-fly...
///// We are not required to initialize and store long ass arrays for integers..
////// Here too we need the keyword next(), value etc just like in ITERATORS..
function* numbersGen () {

    let i = 0;

    while (true) {
        yield i++;
        // yield (i++).toString();
    }
}

const num = numbersGen();
console.log(num.next().value);
console.log(num.next().value);