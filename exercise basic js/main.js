// Lab 1.1.1, Lab 1.1.3
// alert('My name is Got');

// Lab 1.2.1
// var person;
// let name = 'Nontakorn';
// person = name;
// alert('My name is ' + name);

// Lab 1.2.2
// let pocketMoney;
// let fatherName;
// let motherName;
// let myAdress;
// let universeAge;

// Lab 1.2.3
// error const need to be difind default value
// const user
// user = 'iamhero';
// const role
// role = 'customer';
// error need to declair variable before call to use
// alert(username);

// Lab 1.2.4
// const firstName = 'Nontakorn';
// let lastName = 'Setthachoduek';
// var nickName = 'Got';
// //error because variable can declair only one time
// const firstName = 'Grant';
// let lastName = 'Justtim';
// var nickName = 'Flash';
// // not error but not recommend (become variable declairation of window object)
// bithDate = '1/1/1990';

// Lab 1.2.5
// BRAND_NAME = 'I am a hero'
// can do but not recommended (use only when for constant value that you want the value can import to every file)

// Lab 1.4.2
// let firstName = 'Nontakorn';
// let lastName = 'Setthachoduek';
// let myAge = 22;
// let myAddress = '419/24 Prapin K.9 Ayuthaya';
// console.log(`Full Name: ${firstName + ' ' + lastName} , Age:${myAge}, Address: ${myAddress}`);

// Lab 1.6.1
// let a = undefined;
// let b = 2;
// let c = a++; //a = a + 1 => undefined + 1
// let d = String(a);
// let e = '' + b;
// let f = `${c}`;
// console.log(d); //'undefined'
// console.log(e); //'2'
// console.log(f); //'NaN'

// Lab 1.6.2
// let a = undefined;
// let b = null;
// let c = b + '4 2';
// let d = Number(a);
// console.log(d);//NaN
// let e = +b;
// console.log(e);//0
// let f = c * 1;
// console.log(f);//NaN

// Lab 1.6.3
// let a = undefined;
// let b = ' ';
// let c = !b;
// let d = Boolean(a);
// let e = !!b;
// let f = !!c;
// console.log(d);//false
// console.log(e);//true
// console.log(f);//false

// Lab 1.6.4
// console.log('' + 1 + 0); //'10'
// console.log('' - 1 + 0); //-1
// console.log(true + false); //1
// console.log(6 / '3'); //2
// console.log('2' * '3'); //6
// console.log('   -9   ' - 5); //-14
// console.log('   -9   ' + 5); //'    -9    5'
// console.log('4px' - 2); //NaN
// console.log(2 + 4 + 'px'); //'6px'
// console.log(null + 1); //1
// console.log(undefined + 1); //NaN

// Lab 1.6.5
// let a = 0;
// a++; //1
// a += 3; //4
// a *= 17; //68
// a %= 7; //5
// console.log(a);

// Lab 1.6.6
// let a = 1; //a = 1
// let b = 2;//a = 1,b = =2
// let c = a++;//a = 2, b = 2 ,c = 1
// let d = ++c;//a = 2, b = 2, d = 2, c = 2
// let e = ++d + d++ + d;//3 + 3 + 4 : d = 4 , e = 10
// console.log(e);

// Lab 1.6.7
// let num1 = +prompt('Enter number1:');
// let num2 = +prompt('Enter number2:');
// console.log(num1 + num2);

// Lab 1.6.8
// let a = 0.1;
// let b = 0.2;
// let c = a + b;
// console.log(c.toFixed(1));

// Lab 1.6.9
// let a = 1 * '4' + +null + +' ' - '5' * 2 + +(7 + 2 + '' + +!!undefined);
// 4 + 0 => 4 + 0 => 4 - 10 => -6 + +('9' + 0) => -6 + 90 => 84
// console.log(a);

// Lab 1.7.1
// console.log('1' > 4);
// console.log('' <= 1);
// console.log('apple' > 'pineapple');
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(NaN !== 2);
// console.log(NaN == NaN); // do not use == with NaN use isNaN() instread
// console.log(NaN === NaN);

//Lab 1.8.1
// if (0) {
//     // 0 = false
//     alert('Zero');
// } else {
//     alert('Nooo');
// }

//Lab 1.8.2
// if (' ') alert('Yes');
// else alert('Nooo');
//Yes ' ' = true

//Lab 1.8.3
// let Name = prompt('Guest my name');
// if (Name === 'Got' || Name === 'got') {
//     alert('You are right!!');
// } else {
//     alert("You don't know me!!");
// }

// Lab 1.8.4
// let num = +prompt('Enter a Number:');
// let solution = null;
// if (isNaN(num)) {
//     solution = 'invalid number';
// } else {
//     solution = num > 0 ? 'Positive number' : num === 0 ? 'Zero' : 'Negative number';
// }
// alert(solution);

// Lab 1.8.5
// let num = prompt('Enter number');
// if (num === null || num.trim() === '' || isNaN(num)) {
//     console.log('Invalid number');
// } else if (num % 2 === 0) {
//     console.log('Even number');
// } else {
//     console.log('Odd number');
// }

//Lab 1.8.6
// function isInvalidNumber(number) {
//     return number === null || number.trim() === '' || isNaN(number)
//         ? 'Invalid Number'
//         : 'Valid Number';
// }
// let num1 = prompt('Enter number1');
// let num2 = prompt('Enter number2');
// console.log(isInvalidNumber(num1));
// console.log(isInvalidNumber(num2));

//Lab 1.8.7
// const username = prompt('Enter username:');
// if (!isValidInput(username)) {
//     alert('Username is required');
// } else {
//     const password = prompt('Enter password');
//     if (!isValidInput(password)) {
//         alert('Password is required');
//     } else {
//         if (username === 'admin' && password === '1234') {
//             alert(`Hello ${username}`);
//         } else if (username === 'john' && password === 'qwerty') {
//             alert(`Hello ${username}`);
//         } else {
//             alert('Invalid username or password');
//         }
//     }
// }

// function isValidInput(input) {
//     return !(input === null || input.trim() === '');
// }

//Lab 1.8.8
function isValidNumber(checkValue) {
    return !(checkValue === null || checkValue.trim() === '' || isNaN(checkValue));
}
// const input = prompt('Enter score');
// if (!isValidNumber(input)) {
//     alert('Invalid Number');
// } else {
//     if (input >= 80) {
//         alert('A');
//     } else if (input >= 70) {
//         alert('B');
//     } else if (input >= 60) {
//         alert('C');
//     } else if (input >= 50) {
//         alert('D');
//     } else if (input < 0) {
//         alert('Invalid Score, Score must be greater than 0');
//     } else {
//         alert('F');
//     }
// }

//Lab 1.8.9
// let age = prompt('How old are you');
// let message;
// if (age >= 18) {
//   message = 'Allowed';
// } else {
//   message = 'Not allowed';
// }

// let message = age >= 18 ? 'Allowed' : 'Not allowed';
// console.log(message);

// Lab 1.8.10
// let login = prompt('Enter username');
// let message;
// if (login == 'Employee') {
//     message = 'Hello';
// } else if (login == 'Director') {
//     message = 'Greetings';
// } else if (login == '') {
//     message = 'No login';
// } else {
//     message = '';
// }

// let message =
//     login === 'Employee'
//         ? 'Hello'
//         : login == 'Director'
//         ? 'Greetings'
//         : login == ''
//         ? 'No login'
//         : '';
// console.log(message);

// Lab 1.8.11
// const input = prompt('Enter score');
// !isValidNumber(input)
//     ? alert('Invalid Number')
//     : input >= 80
//     ? alert('A')
//     : input >= 70
//     ? alert('B')
//     : input >= 60
//     ? alert('C')
//     : input >= 50
//     ? alert('D')
//     : input < 0
//     ? alert('Invalid Score, Score must be greater than 0')
//     : alert('F');

// Lab 1.9.1
// const input = prompt('Enter number');
// switch (input) {
//     case '1':
//         alert('One');
//         break;
//     case '0':
//         alert('Zero');
//         break;
//     case '-1':
//         alert('Minus zero');
//         break;
//     default:
//         alert('Invalid Number');
// }

// Lab 1.9.2
// let a = +prompt('a?');

// if (a == 0) {
//   alert(0);
// }
// if (a == 1) {
//   alert(1);
// }

// if (a == 2 || a == 3) {
//   alert('2,3');
// }

// switch (a) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3');
//         break;
// }

// Lab 1.9.3
// switch (browser) {
//     case 'Edge':
//         alert("You've got the Edge!");
//         break;
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert('Okay we support these browsers too');
//         break;
//     default:
//         alert('We hope that this page looks ok!');
// }

// let browser = prompt('Enter your browser');
// if (browser === 'Edge') {
//     alert("You've got the Edge!");
// } else if (
//     browser === 'Chrome' ||
//     browser === 'Firefox' ||
//     browser === 'Safari' ||
//     browser === 'Opera'
// ) {
//     alert('Okay we support these browsers too');
// } else {
//     alert('We hope that this page looks ok!');
// }

// Lab 1.10.1
// let i = 3;
// // Ans.1
// while (i) {
//     alert(i--);
// }

// Lab 1.10.2
// let i = 0;
// while (++i < 5) alert(i);
// 1,2,3,4

// let i = 0;
// while (i++ < 5) alert(i);
//1,2,3,4,5

// Lab 1.10.3
// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
// }

// let i = 0;
// while (i <= 100) {
//     console.log(i);
//     i += 2;
// }

// Lab 1.10.4
// let sum = 0;
// let sumOdd = 0;
// let sumEven = 0;
// let sumDevideTwo = 0;
// let sumDevideThree = 0;

// for (let i = 0; i <= 100; i++) {
//     sum += i;
//     if (i % 2 === 1) {
//         sumOdd += i;
//     }
//     if (i % 2 === 0) {
//         sumEven += i;
//     }
//     if (i % 2 === 0) {
//         sumDevideTwo += i ** 2; //2**2 + 4**2 +....
//     }
//     if (i % 3 === 0) {
//         sumDevideThree += i ** 2; //3**2 + 6**2 + ...
//     }
// }

// console.log(sum);
// console.log(sumOdd);
// console.log(sumEven);
// console.log(sumDevideTwo - sumDevideThree);

// Lab 1.10.5
// let initialMoney = 100000;
// for (let i = 1; i <= 10; i++) {
//     let interest = initialMoney * (2.5 / 100);
//     initialMoney += interest;
// }
// console.log(initialMoney.toFixed(2));

// let amount = 100000;
// for (let i = 0; i < 10; i++) {
//     amount += (amount * 2.5) / 100;
// }
// console.log(amount.toFixed(2));

//Lab 1.10.6
// let acc = '';
// for (let i = 1; i <= 4; i++) {
//     for (let j = 1; j <= i; j++) {
//         acc += '* ';
//     }
//     acc += '\n';
// }
// console.log(acc);

// Lab 1.10.7
// for (let i = 2; i <= 12; i++) {
//     for (let j = 1; j <= 12; j++) {
//         console.log(`${i} X ${j} = ${i * j}`);
//     }
//     console.log('\n');
// }

// Lab 1.10.8
// let input = prompt('Enter number');
// let sum = 0;
// let count = 0;
// while (!(input === '0' || input === '' || input === null || +input < 0)) {
//     sum += +input;
//     count += 1;
//     input = prompt('Enter number');
// }

// console.log(sum);
// console.log(sum / count);

// Lab 1.10.9
// let setNum = prompt('Enter some number');
// let guestNum = prompt('Guest number');
// let guestTime = 0;
// while (!(+guestNum === +setNum)) {
//     if (+guestNum < +setNum) {
//         alert('Less than set value');
//     } else {
//         alert('More than set value');
//     }
//     guestTime += 1;
//     guestNum = prompt('Guest number');
// }
// alert('You are correct');
// alert('You guest ' + guestTime + ' times');

// Lab 1.10.10
// function isPrime(number) {
//     for (let i = 2; i <= number / 2; i++) {
//         if (number % i === 0) {
//             // console.log(i);
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(10));
// console.log(isPrime(11));
// console.log(isPrime(11111));

// for (let i = 2; i <= 100; i++) {
//     if (isPrime(i)) {
//         console.log(i);
//     }
// }

// Lab 1.11.1
// alert(null || 2 || undefined);
// alert(alert(1) || 2 || alert(3));
// alert(1 && null && 2);
// alert(alert(1) && alert(2));
// alert(null || (2 && 3) || 4);

// Lab 1.11.2
// if (-1 || 0) alert('first');
// if (-1 && 0) alert('second');
// if (null || -1 && 1) alert('third');

// Lab 1.11.3
// let user = prompt('Enter username') || 'Guest'
// // if(user ==='' || user === null) {user = 'Guest}

// if(user === 'codecamp'){
//     let password = prompt('Enter password')
//     if(password !== '123456'){
//         alert('Wrong password')
//     }
// } else {
//     user = 'guest'
// }

// alert(user)

// Function
// Lab 2.1.2
// function sayHelloUser(username) {
//     alert(`Hello ${username}`);
// }
// const user = prompt('Enter user');
// sayHelloUser(user);

//Lab 2.1.3
// let message = 'Welcome to Thailand';

// function logMessage(message) {
//     message = 'Hello everybody';
//     console.log(message); // *
// }

// logMessage(message);
// console.log(message); // **

// let name = 'John';

// function sayHi(input) {
//     console.log(name); // ***
//     name = input;
// }

// sayHi();
// console.log(name); // ****

// Lab 2.1.4
// function sayHi(name) {
//     let name = 'Guest';
//     console.log(name); // *
// }

// sayHi('Jim');

// Lab 2.1.5
// const sender = 'Matt';

// function sendTo(from, to) {
//     console.log(`From ${from} to ${to}`);
// }

// sendTo(sender, 'Sarah'); // *
// sendTo(null); // **

// const sender = 'Matt';

// function sendTo(to, from = 'CC') {
//     console.log(`From ${from} to ${to}`);
// }

// sendTo('Max'); // ***
// sendTo('Ben', 'Jay'); // ****

// Lab 2.1.6
// function Multiply(num1, num2) {
//     return num1 * num2;
// }
// console.log(Multiply(1, 3));

// Lab 2.1.7
// function min(num1, num2) {
//     return num1 > num2 ? num2 : num1;
// }
// console.log(min(20, 30));

// Lab 2.1.8
// function login(username, password) {
//     if (username === 'admin' && password === 'P@ssw0rd') {
//         alert('Success Login');
//     } else {
//         alert('Incorrect username or password');
//     }
// }

// login('admin', 'P@ssw0rd');
// login('admin', 'P@sswd');

// Lab 2.1.9
// function isPrime(number) {
//     for (let i = 2; i <= number / 2; i++) {
//         if (number % i === 0) {
//             // console.log(i);
//             return false;
//         }
//     }
//     return true;
// }

// function showPrimeNumber(n) {
//     for (let i = 2; i <= n; i++) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }

// showPrimeNumber(5);

// Lab 2.1.10
// function squareNum(num) {
//     const result = num * num;
// }

// console.log(squareNum(2)); // undefined (no return)

// Lab 2.1.11
// function sayHi(age) {
//     if (age < 12) alert('Hi kid');
// }
// console.log(sayHi); // function
// console.log(sayHi(10)); // Hi kid

// function sayHi(name) {
//     if (name) {
//         alert('Hi ' + name);
//         return;
//     } else {
//         return 'Who are you';
//     }
// }
// console.log(sayHi('John')); // Hi John
// console.log(sayHi()); // Who are you

// Lab 2.1.12
// function getLongText() {
//     return 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
// }

// console.log(getLongText()); // Lorem Ipsum is simply dummy text of the printing and typesetting industry.

// Lab 2.1.13
// function checkAge(age) {
// if(age>18){
//     return true
// } else{
//     return confirm('Did parent allow you?')
// }
//first form
// if(age>18){
//     return true
// }
// return confirm('Did parent allow you?')
// second form
// return age > 18 ? true : confirm('Did parent allow you?');
// third form
// return age > 18 || confirm('Did parent allow you?');
// }

// Lab 2.1.14

// function siValidNumber(number) {
//     if (
//         number === null ||
//         String(number).trim() === '' ||
//         isNaN(number) ||
//         typeof number === 'boolean'
//     )
//         return false;
//     return true;
// }
// function max(a, b, c, d) {
// Math.max(a,b,c)
// if (b === undefined) {
//     if (isValidNumber(a)) return a;
//     else return NaN;
// } else {
//     if (isValidNumber(a) && isValidNumber(b)) {
//         return a > b ? a : b;
//     } else return NaN;
// }

//     if (a === undefined) return undefined;
//     if (b === undefined) return Math.max(a);
//     else {
//         if (c === undefined) return Math.max(a, b);
//         else {
//             if (d === undefined) return Math.max(a, b, c);
//             else return Math.max(a, b, c, d);
//         }
//     }
// }

// console.log(max()); // undefined
// console.log(max(2)); // 2
// console.log(max(3, 1)); // 3
// console.log(max(7, 3, 9, 2)); // 9

// Lab 2.2.1

// const multiply = function (a, b) {
//     return a * b;
// };
// const result = multiply(17, 7);
// console.log(result);

// Lab 2.2.2
// const showModal = alert;
// showModal('Execute modal'); // alert('Execute modal')

// const showModal = alert();
// showModal('Execute modal'); // error showmodel is not function

// Lab 2.2.3
// const checkPermission = function (role, yes, no) {
//     if (role === 'ADMIN') {
//         yes();
//     } else {
//         no();
//     }
// };

// checkPermission(
//     'ADMIN',
//     function () {
//         alert('ACCESS GRANTED');
//     },
//     function () {
//         alert('ACCESS DENIED');
//     }
// );

// Lab 2.2.4
// function magic() {
//     return function (x) {
//         return x * 42;
//     };
// }
// const answer = magic();
// console.log(answer); // function(x){return x * 42}
// console.log(answer(1337)); // 56154 => 1337 * 42
// console.log(magic(1337)(42)); // magic no parameter 1337 notthing happen 42*42 = 1764

// Lab 2.3.1
// const multiply = (num1, num2) => num1 * num2;
// console.log(multiply(23, 9));

// Lab 2.3.2
// const isPrime = (number) => {
//     for (let i = 2; i < number / 2; i++) {
//         if (number % i === 0) return false;
//     }
//     return true;
// };
// console.log(isPrime(13));

// Lab 2.3.3
// const square = (n) => {
//     n ** 2;
// };

// console.log(square(7)); // undefined

// const calcCircleArea = (r) => Math.PI * r ** 2;
// console.log(calcCircleArea(3)); // 28.274333882308138

// Lab 2.3.4
// const logName = (name) => console.log(name);
// const logName = name => console.log(name);

// Lab 2.3.5
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }

// ask('Do you agree?',
// function () { alert('You agreed.'); },
// function () { alert('You canceled the execution.'); }
// );

// const ask = (question, yes, no) => (confirm(question) ? yes() : no());

// ask(
//     'Do you agree?',
//     () => alert('You agreed.'),
//     () => alert('You canceled the execution.')
// );

// Lab 2.3.6
// const convertDayToSecond = (day) => day * 24 * 60 * 60;
// console.log(convertDayToSecond(1));

// Lab 2.3.7
// const devidedBySeven = (number) => (number % 7 === 0 ? true : false);
// const devidedBySeven = (number) => number % 7 === 0;
// console.log(devidedBySeven(14));

// Lab 2.3.8
// const calcScore = (win, draw) => win * 3 + draw;
// console.log(calcScore(1, 3));

// Lab 2.3.9
// const isLeapYear = (year) => {
//     if (year % 4 !== 0) return false;
//     if (year % 100 !== 0) return true;
//     // if (year % 400 === 0) return true;
//     // return false;
//     //or
//     return year % 400 === 0;
// };

// if (year % 4 === 0) {
//     return year % 100 !== 0 ? true : year % 400 === 0;
//     return year % 100 !== 0 || year % 400 === 0;
// }

// Lab 2.3.10
// const calcAge = (year) => {
//     let totalDay = 0;
//     for (let i = year; year <= 2020; i++) {
//         if (isLeapYear(i)) {
//             totalDay += 366;
//         } else {
//             totalDay += 365;
//         }
//     }
//     return totalDay;
// };

// Lab 2.3.11
// const convertFahrenheitToCelsius = (value) => ((value - 32) / 9) * 5;
// console.log(convertFahrenheitToCelsius(1100));

// Lab 2.3.12
// const factorial = (number) => {
//     if (number === 0 || number === 1) return 1;
//     let result = 1;
//     for (let i = number; i >= 2; i--) {
//         result *= i;
//     }
//     return result;
// };
// console.log(factorial(10));

// const factRecursive = (number) =>
//     number === 0 || number === 1 ? 1 : number * factRecursive(number - 1);
// console.log(factRecursive(5));
