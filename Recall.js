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

    // let a=false, b=true, c=false, d=true;

    // console.log (a&&b || c&&d);
    // console.log ((a&&b) || (c&&d));
    
// let user = Symbol("lenin");
// let user1 = Symbol("lenin");
// if (user === user1) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }



// console.log((1!=1)?"lenin":"false")

// let a=10, b='lenin', c= 'siren' ;
// let ans = (a,b,c);
// console.log(ans);

// let a={name : "lenin"};
// console.log(a.name); // => lenin
// delete a.name;
// console.log(a); // => {}

// let a={name:'lenin'};
// let b= 'name' in a;
// console.log(b);

// function car (make,model,year){
//     this.make = make;
//     this.model = model;
//     this.year = year;
// };

// let mycar = new car('Chevrolet','Cruze',2024);
// console.log (mycar);
// let a = new car('toyota','camry',2023);
// console.log(a instanceof car);

// let Name = {name : 'Lenin', age: 25, place: 'Madurai'};

// for (keys in  Name){
//     console.log(keys,": ",Name[keys]);
// }

// let lists = [1,2,4,3,5,6,7,8];

// for (list in lists){
//     console.log("list: ",list);
// }

// for (let i=0; i<=10; i++){
//     if (i>=6){
//         break;
//     }
//     console.log(i);
// }

// for (let i=0;i<10;i++){
//     if (i===7){
//         continue;
//     }
//     console.log(i);
// }
// throw new Error ('User defined error');

// let a=1;
// if (0 == 0){
// throw new Error('lenin is good guy but evil also');}

// function greet(){
//     console.log('Hello');
//     return;
//     console.log('it could not print');
// }
// greet();


// try{
//     let (a / 0)
//         console.log (a);
    
// }catch(lenin){
//     console.log(lenin);
//     console.log(lenin.message);// .message converts an error as a message;
// }

// try {
//     let data = JSON.parse('{"name": "John"}');  // Valid JSON
//     console.log(data.name);  // Output: John
// } catch (error) {
//     console.log("An error occurred: " + error.message);
// } finally {
//     console.log("This will always run.");  // Output: This will always run.
// }

// try{
//     throw new Error('user defined error');
// }catch(err){
//     console.log(err.message);
//     console.log(err);
// }


// JavaScript functions are a key building block in programming, allowing you to define reusable blocks of code. Functions can accept input values (parameters), perform operations, and return results. JavaScript offers different types of functions, including built-in functions, custom functions, anonymous functions, and more.

// Here’s a comprehensive breakdown of **JavaScript functions** and their uses:

// ### 1. **Function Declaration**
//    A function declaration defines a named function. These functions can be called anywhere in the scope, even before they are defined (due to function hoisting).

//    ```javascript
//    function greet(name) {
//        return "Hello, " + name + "!";
//    }

//    console.log(greet("Alice"));  // Output: "Hello, Alice!"
//    ```

//    - **Use**: Defined using the `function` keyword, used for tasks that you want to reuse across your code.

// ### 2. **Function Expression**
//    A function expression creates a function and assigns it to a variable. Unlike function declarations, function expressions are not hoisted, so they can only be called after being defined.

//    ```javascript
//    const add = function (a, b) {
//        return a + b;
//    };

//    console.log(add(5, 3));  // Output: 8
//    ```

//    - **Use**: Useful when you need to declare functions dynamically or store them in variables.

// ### 3. **Arrow Function**
//    Arrow functions are a shorter syntax for writing functions. They do not have their own `this` value, and are often used for concise function definitions.

//    ```javascript
//    const multiply = (a, b) => a * b;

//    console.log(multiply(4, 5));  // Output: 20
//    ```

//    - **Use**: Preferred for simple operations and inline functions, especially in callbacks and array operations.

// ### 4. **Anonymous Function**
//    An anonymous function is a function without a name. It is often used as an argument to other functions, such as in callbacks.

//    ```javascript
//    setTimeout(function() {
//        console.log("This runs after 2 seconds.");
//    }, 2000);
//    ```

//    - **Use**: Used for one-time use or for passing as callbacks, often in asynchronous code like `setTimeout` or `event listeners`.

// ### 5. **Immediately Invoked Function Expression (IIFE)**
//    An IIFE is a function that is executed immediately after it is defined. This pattern is often used to avoid polluting the global scope.

//    ```javascript
//    (function () {
//        console.log("I am an IIFE and execute immediately!");
//    })();
//    ```

//    - **Use**: Useful for creating a scope to encapsulate variables and avoid conflicts.

// ### 6. **Higher-Order Functions**
//    Functions that take other functions as arguments or return functions are called higher-order functions. JavaScript’s built-in array methods like `map()`, `filter()`, and `reduce()` are examples.

//    ```javascript
//    const numbers = [1, 2, 3, 4];

//    const doubled = numbers.map(function (num) {
//        return num * 2;
//    });

//    console.log(doubled);  // Output: [2, 4, 6, 8]
//    ```

//    - **Use**: Useful in functional programming and for handling collections like arrays.

// ### 7. **Callback Functions**
//    A callback function is passed as an argument to another function and is executed after that function has finished executing.

//    ```javascript
//    function greeting(name) {
//        console.log("Hello, " + name);
//    }

//    function processUserInput(callback) {
//        const name = "John";
//        callback(name);
//    }

//    processUserInput(greeting);  // Output: "Hello, John"
//    ```

//    - **Use**: Common in asynchronous operations, event handling, and when executing a function after another has completed.

// ### 8. **Rest Parameters (`...`)**
//    Rest parameters allow a function to accept an indefinite number of arguments as an array.

//    ```javascript
//    function sum(...numbers) {
//        return numbers.reduce((total, num) => total + num, 0);
//    }

//    console.log(sum(1, 2, 3, 4));  // Output: 10
//    ```

//    - **Use**: Useful when you don’t know how many arguments will be passed to a function.

// ### 9. **Default Parameters**
//    Default parameters allow you to set default values for function parameters if no value is provided.

//    ```javascript
//    function greet(name = "Guest") {
//        return "Hello, " + name;
//    }

//    console.log(greet());  // Output: "Hello, Guest"
//    console.log(greet("Alice"));  // Output: "Hello, Alice"
//    ```

//    - **Use**: Useful for avoiding `undefined` parameters when a value is not provided.

// ### 10. **Recursive Function**
//    A recursive function is one that calls itself. It’s used to solve problems that can be broken down into smaller instances of the same problem.

//    ```javascript
//    function factorial(n) {
//        if (n === 0) return 1;
//        return n * factorial(n - 1);
//    }

//    console.log(factorial(5));  // Output: 120
//    ```

//    - **Use**: Commonly used in problems involving tasks like factorials, tree traversal, or other recursive data structures.

// ### 11. **Generator Functions**
//    A generator function is a special type of function that can pause and resume its execution. They are defined using the `function*` syntax and use `yield` to pause execution.

//    ```javascript
//    function* counter() {
//        let i = 0;
//        while (true) {
//            yield i++;
//        }
//    }

//    const gen = counter();

//    console.log(gen.next().value);  // Output: 0
//    console.log(gen.next().value);  // Output: 1
//    ```

//    - **Use**: Useful for handling sequences of values, iterating over data lazily, and controlling complex workflows.

// ### 12. **Async Functions**
//    Async functions are functions that return a `Promise` and allow the use of the `await` keyword to wait for asynchronous operations to complete.

//    ```javascript
//    async function fetchData() {
//        const response = await fetch('https://api.example.com/data');
//        const data = await response.json();
//        return data;
//    }

//    fetchData().then(data => console.log(data));
//    ```

//    - **Use**: Simplifies working with promises and asynchronous operations like fetching data from an API.

// ### 13. **Function Constructor**
//    The `Function` constructor creates a new function dynamically, but it's rarely used due to security risks and performance issues.

//    ```javascript
//    const sum = new Function('a', 'b', 'return a + b');
//    console.log(sum(2, 3));  // Output: 5
//    ```

//    - **Use**: Used to create functions dynamically, but not recommended due to performance concerns and potential security vulnerabilities (similar to `eval`).

// ### 14. **Currying Function**
//    Currying is the process of transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument.

//    ```javascript
//    function multiply(a) {
//        return function (b) {
//            return a * b;
//        };
//    }

//    const multiplyByTwo = multiply(2);
//    console.log(multiplyByTwo(3));  // Output: 6
//    ```

//    - **Use**: Useful in functional programming to create specialized versions of functions by providing partial arguments.

// ---

// ### Summary:
// JavaScript functions come in various forms, each serving specific purposes:
// - **Function Declarations** and **Function Expressions** define reusable blocks of code.
// - **Arrow Functions** provide concise syntax, especially in callbacks.
// - **Rest Parameters** and **Default Parameters** offer flexibility in handling arguments.
// - **Generators** and **Async Functions** are useful for handling sequences and asynchronous operations.

// By mastering these different types of functions, you can write more flexible, efficient, and readable code.



// setTimeout(function() {
//     console.log("This runs after 2 seconds.");
// }, 2000);

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3, 4));  // Output: 10

// const s = [1,2,3,4,5,6,7];
// const sums = s.reduce((a,b)=> a+b);
// console.log(sums);

// let a = [1,2,3,4,5,6,7,8,8];
// let b = a.map();
// console.log(b);

// const numbers = [1, 2, 3, 4];

// const doubled = numbers.map(function (num) {
//     return num * 2;
// });

// console.log(doubled);  // Output: [2, 4, 6, 8]




// // =========================================================================================================================>
//     Methods of the HTML DOM:

