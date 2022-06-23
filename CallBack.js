
////// POINTS TO REMEMBER /////

// 1. Any function can act as a callback function.
// 2. If callback in a setTimeout() has a setTimeout() of its own, then the setTimeout() of the parent function will have more precedence.
// 3. Need to add something new to DOM??....just use the str variable and add HTML elements inside back ticks(``).

const students = [
    { name: 'vivek', book: 'art of war'},
    { name: 'vineet', book: 'Devo ke dev'}
]

function enrollStudent(student, callback) {
    setTimeout(function() {
        students.push(student);
        console.log('Student is being pushed.');
        callback();
    }, 3000);
}

function getStudents() {
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str  += `<li>${student.name}</li>` 
        });
        document.getElementById('students').innerHTML = str;
    }, 1000);
}

let newStudent = { name: 'Arshad', subject: 'ML'};
enrollStudent(newStudent, getStudents);
// getStudents();
