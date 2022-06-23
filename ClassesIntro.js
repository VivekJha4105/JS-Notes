//////////////// INTRODUCTION TO CLASSES /////////////////

//##----- POINTS TO REMEMBER.
// 1. A constructor is called only once at the time of creation of class.
// 2. get and set properties can be used as shown in this program as well.
// 3. Methods defined under get or set property are called not as functions but as properties.
//    They also do not take arguments and are assigned with values which act as arguments.
// 4. Static methods are defined under the class but are not bound to the class object.
//    Static methods and preperties do not need instances of class objects to be created in order to use them.
//    Static methods and properties are used and called using the name of the class itself.
//    Even if we do not make an object instance for the class and just use 'class_name.Static_method_name', it works.
// 5. Inheritance is useful. We achieve it by the keyword 'extend'.
//    Inside the child class, we use keyword 'super' to execute the parent class's contructor.
//    Using 'super' we can also call the properties and methods of parent class inside the child class.
//    Child classes can make use of the parent class's properties and methods but parent class cannot do the same
//    with the child class's.
//    We can make an array of objects of class.
// 6. Polymorphism is changing the form of a method insid the derived child class of parent.

class Rectangle {
    constructor(_height, _width, _color){
        this.height = _height;
        this.width = _width;
        this.color = _color;
    }

    getArea(){
        console.log(this.height*this.width);
    }
}

let rectangle1 = new Rectangle(3,4,'orange');
// console.log(rectangle1);
rectangle1.getArea();


class Square {
    constructor(_side){
        this.side = _side;
    }
    
    get area(){
        console.log(this.side*this.side);
    }

    /// Below parameters a and b are objects...
    static equals(a,b){ 
        console.log(a.side*a.side === b.side*b.side);
    }

    /// Below width and height are simple number data type parameters...
    static isEqualSides(width, height){
        console.log(width === height);
    }

    set side_method(area){
        this.side = Math.sqrt(area);
        console.log('Newer side is: ', this.side);
    }
}

let square1 = new Square(3);
let square2 = new Square(3);
// square1.area;   // Notice that methods defined under get keyword are called as not functions but properties.
// console.log('older side is: ', square1.side);
// square1.side_method = 25 // Set property method taking area and making changes to class properties accordingly.

// Square.equals(square1, square2);   // Static method 'equals()' takes in object instances as arguments..
// Square.isEqualSides(3, 3);   // Static method 'equals()' takes in object instances as arguments..


class Person {
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }

    descriptionPerson(){
        console.log(`I am ${this.name} and I am ${this.age} years old.`);
    }
}

class Programmer extends Person{
    constructor(_name, _age, _yearsOfExp){
        super(_name, _age);
        
        // Custom Behaviour of the child class.
        this.yearsOfExp = _yearsOfExp;
    }

    descriptionProgrammer(){
        console.log(`${this.name} is coding with the experience of ${this.yearsOfExp} years.`);
    }
}

let person1 = new Person('vivek', 25);
let programmer1 = new Programmer('vivek', 25, 12);

// console.log(person1);
// console.log(programmer1);

// programmer1.descriptionPerson();  // Inherited method form the parent class.
// programmer1.descriptionProgrammer();


class Animal {
    constructor(name){
        this.name = name;
    }

    sound(){
        console.log('Generic Animal Sound.');
    }
}

class Dog extends Animal {
    constructor(name){
        super(name);
    }

    sound(){
        super.sound();    //// Calling the Parent method inside the child class body using the keyword 'super'.
        console.log('woof');
    }
}

let animal1 = new Animal('Generic Animal');
let dog1 = new Dog('Dog');

animal1.sound();
dog1.sound();