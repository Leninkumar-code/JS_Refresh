// /* What is a variable?
//     Variable is a name storage for data.
//     It's a temporary memory location.

// It declared by 3 types */
// // 1 var => we mention that var keyword in every line when declare and assign the variable.
//     var a = 10;
//     var a = 12;
//     console.log(a);
// // 2 let => It has a freedom to change a value without declaring let.
//     let b;
//     b=25;
//     console.log(b);
// // 3 const => It also called constant.we can't change the data(value) like others.
//     const c=4;
//     const d=5;
//     console.log(c+d);

// /* Datatype
//     A data type (or simply type) is a collection or grouping of data values.
//     That is typed in various ways:            */
// // 1 Primitive Datatype:
//     //string => Represents a sequence of characters used to store and manipulate text.
//     let favoriteMovie = 'Amores perros'; // using single quote.
//     let favoriteDirector = "Alejandro gonzlez inarritu" // using double quotes.
//     let favoriteProgrammingLanguage = `Javascript` // using backtick.

//     // number => Represents both integer and floating-point numbers.
//     let nuMber = 12;
//     let flOat = 1.2;

//     // BigInt => Represents integers with arbitrary precision, useful for working with very large numbers.
//     let veryLargeNumber = 123456789987654321n;

//     // boolean => Represents a logical entity and can have only two values: true or false.
//     let lovesCoding = true;
//     let hatesCoding = false;

//     // Symbol => Represents a unique and immutable primitive value, often used as an identifier for object properties.
//     const uniqueKey = Symbol('Lenin');
//     console.log(uniqueKey);

// // 2 Special Dtatype:
//     // undefined => Represents a variable that has been declared but not yet assigned a value.
//     let favoriteColor;
//     console.log(favoriteColor);

//     // null => Represents the intentional absence of any object value. It is a special keyword that denotes a null object reference.
//     favoriteFood = null;
//     console.log(favoriteFood);

// // 3 Non-Primitive/Reference Datatype and Object Types:
//     //object => Represents a collection of key-value pairs. Objects are used to store more complex data structures.
//     let course = {
//         name : 'JavaScript for Beginners',
//         duration : '3.5 hours',
//         grade : 1
//     }
//     console.log(course.name);
//     console.log(course.duration);
//     console.log(typeof(course.name));
//     console.log(typeof(course.grade));
    
//     //array => It's an ordered collection of elements, accessible by index, that can store multiple values of different types.
//     let programmingLanguages = [1,'JavaScript',2,'Python',3,'C',4,'Java',0.5675,345678987654n,true,Symbol('id'),null];
//     console.log(programmingLanguages);
//     console.log(typeof(programmingLanguages[4]));
//     console.log(programmingLanguages[4]);

// // Dynamically typing in javascript => This means that the same variable can be used as more than one type, as you can see below
// let isAlive = "Yes";
// console.log(typeof(isAlive));

// isAlive = 1;
// console.log(typeof(isAlive));

// isAlive = true;
// console.log(typeof(isAlive));

// //Function = > It's a reusable block of code that performs a specific task and can be executed when called.
// // Reason for create a function 
// // without parameter and argument
// function Name (){
//     console.log("Hi!");
// }
// Name();

// // with parameter and arguement (value)
// function Fname (name){
//     console.log('Hello'+name);
//     name=25
//     console.log("Hi! "+name);
// }
// Fname();
// Fname("human");

// // Operators:
// // Arthmetic Operators
// // Logical Operators => 
//     // || (or operator) => when comparing the values are comes under the true condition it will return true.
//         // if you want false you make all the values into false.
//         console.log(true || true); // true
//         console.log(false || true); // true
//         console.log(true || false); // true
//         console.log(false || false); // false
//     // && (and operator) => true = all data should be true. false = anyone of the data should be false.
//         console.log(true && true); // true
//         console.log(true && false); // false
//         console.log(false && true); // false
//         console.log(false && false); // false
//     // ! (not operator)
//     // ?? (null coelescing)

    let a=false, b=true, c=false, d=true;

    console.log (a&&b || c&&d);
    console.log ((a&&b) || (c&&d));