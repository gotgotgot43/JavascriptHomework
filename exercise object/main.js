// Lab 3.1.1
// const person = {
//     name: 'john',
//     age: 20,
//     gender: 'Male',
//     address: '719 Bantadthong, Bangkok',
//     phoneNumber: '0858187701',
// };

// Lab 3.1.2
// const user = {};
// // user.name = 'John'; //user =>{name:'John'}
// user['name'] = 'John';
// user.surname = 'Doe';
// user.name = 'Matt';
// delete user.name;
// console.log(user);

// Lab 3.1.3
// const isEmptyObject = (obj) => {
//     for (let key in obj) {
//         // execute
//         return false;
//     }
//     return true;
// };
// const obj = {};
// console.log(isEmptyObject(obj));

// Lab 3.1.4
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// function sumSalary(obj) {
//     let sum = 0;
//     for (let key in obj) {
//         sum += obj[key];
//     }
//     return sum;
// }
// console.log(sumSalary(salaries));

// Lab 3.1.5
// const multiplyNumeric = (obj, num) => {
//     const result = {};
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             result[key] = obj[key] * num;
//         } else {
//             result[key] = obj[key];
//         }
//     }
//     return result;
// };

// let menu = {
//     width: 200,
//     height: 300,
//     title: 'My menu',
// };
// const resultObj = multiplyNumeric(menu, 3);
// console.log(menu);
// console.log(resultObj);

// Lab 3.1.6
// const username = prompt('Enter username');
// const email = prompt('Enter email');
// const password = prompt('Enter password');

// const user = {
//     username, //username:username
//     email, //email:email
//     password, //password:password
// };

// Lab 3.1.7
// let key = prompt('Enter key');
// if (key !== 'stop') {
//     let value = prompt('Enter value');
//     if (value !== 'stop') {
//         while (key !== 'stop' && value !== 'stop') {

//         }
//     }
// }

// let result = {};
// while (1) {
//     let key = prompt('Enter key');
//     if (key === 'stop') break;
//     let value = prompt('Enter value');
//     if (value === 'stop') break;
//     result[key] = value;
// }

// console.log(result);

// Lab 3.1.8
// let result = {};
// while (1) {
//     let key = prompt('Enter key');
//     if (key === 'stop') break;
//     let value = prompt('Enter value');
//     if (value === 'stop') break;
//     if (value > 1) {
//         result[key + 's'] = value;
//     } else {
//         result[key] = value;
//     }
// }

// console.log(result);

// Lab 3.1.9
// let name = prompt('Enter name');
// let amount = prompt('Enter amount');
// let price = prompt('Enter price');
// let discount = prompt('Enter discount');

// const product = {
//     name,
//     amount,
//     price,
// };

// if (discount > 0) {
//     product.discount = discount;
// }

// const calcPrice = (obj) => {
//     // if (obj.discount) {
//     //     return (
//     //         // obj.price * obj.amount - (obj.discount / 100) * obj.price * obj.amount
//     //         obj.price * obj.amount * (1 - obj.discount / 100)
//     //     );
//     // }
//     // return obj.price * obj.amount;
//     // short hand
//     return obj.price * obj.amount * (1 - (obj.discount || 0) / 100);
// };

// const calcPrice = (obj) => obj.price * obj.amount * (1 - (obj.discount || 0) / 100);

// Lab 3.1.10
// const employees = {
//     john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
//     peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
//     mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
//     sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } },
// };

// const name = prompt('Enter employee name');
// if (employees[name]) {
//     console.log(
//         `Name: ${name}, salary:${employees[name].salary}, address:${employees[name].address.district}, province:${employees[name].address.province}`
//     );
// } else {
//     console.log('Not found');
// }

// Lab 3.1.11
// const user = {
//     email: 'cc@gmail.com',
//     isActive: true,
// };

// user.isActive = false;
// console.log(user); // {email: 'cc@gmail.com', isActive: false}
// user = {};
// console.log(user); // error const can't reassign value

// 04-Value-and-Reference 01
// บรรทัดที่มี * , ** , *** ให้ผลลัพธ์เป็นอะไร เพราะอะไร

// const product1 = { name: 'Coke', price: 18, size: '500mL' };

// const product2 = product1;
// product2.name = 'Pepsi';
// product2.price = 19;

// console.log(product1); // {name:'Pepci',price:19,size:'500mL'}
// console.log(product2); // {name:'Pepci',price:19,size:'500mL'}
// console.log(product1 === product2); // true

// 04-Value-and-Reference 02
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// const user = { name: 'Jack', role: 'ADMIN' };
// const admin = { name: 'Jack', role: 'ADMIN' };
// console.log(user === admin); // false

// ให้สร้าง Object ที่มี key และ value เหมือน notebook โดยวิธี for ... in loop และ Object.assign
// 05-Clone-Object 01

// const notebook = {
//     brand: 'ASUS',
//     model: 'Vivobook D413IA-EB303TS',
//     processor: 'AMD Ryzen 7 4700U 3.6GHz',
//     graphics: 'Integrated Graphics : AMD Radeon Graphics',
//     ram: '8GB DDR4 Onboard',
//     storage: '512GB PCIe NVMe M.2 SSD',
// };

// const cloneFor = {};
// for (let i in notebook) {
//     cloneFor[i] = notebook[i];
// }
// console.log(cloneFor);

// const cloneAssign = {};
// Object.assign(cloneAssign, notebook);
// console.log(cloneAssign);

// 05-Clone-Object 02
// ให้สร้าง Object ที่มี property เหมือน state1 แต่ loading ให้มีค่าเป็น false point มีค่า 75 และให้เพิ่ม property success เข้าไปโดยให้มีค่าเป็น true

// const state1 = { username: 'john', point: 100, loading: true };
// const cloneState = Object.assign({}, state1, { point: 75, loading: false, success: true });
// console.log(cloneState);

// 05-Clone-Object 03
// ให้ merge Object ทั้ง 4 เข้าด้วยกัน แล้วเก็บไว้ในตัวแปรชื่อ permission
// หาก key ซ้ำกันให้ใช้ค่าของตัวแปรที่มีตัวเลขสูงกว่า
// const permission1 = { canView: false, canDelete: false };
// const permission2 = { canUpdate: true, canCreate: true };
// const permission3 = { canCreate: false, canDelete: true };
// const permission4 = { canView: true };

// const merge = Object.assign({}, permission1, permission2, permission3, permission4);
// console.log(merge);

// 06,07-Method-and-this 01
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// let user = {
//     name: 'John',
//     sayHi: function () {
//         console.log(this.name);
//     },
// };

// user.sayHi(); // John

// 06,07-Method-and-this 02
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// var name = 'Joe';
// function makeUser() {
//     return {
//         name: 'John',
//         ref: this,
//     };
// }
// let user = makeUser();
// console.log(user.ref.name); // Joe => this refer to user which is Window Object which name = 'Joe'

// 06,07-Method-and-this 03
// ให้สร้าง Object calculator ซึ่งมี 3 method
// read() ให้รับค่า input 2 ค่า
// sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// mul() ให้ return ค่าผลคูณของเลขทั้งสอง
// let calculator = {
//     // ... your code ...
//     input1: 0,
//     input2: 0,
//     read() {
//         this.input1 = +prompt('Enter number1');
//         this.input2 = +prompt('Enter number2');
//     },
//     sum() {
//         return this.input1 + this.input2;
//     },
//     mul() {
//         return this.input1 * this.input2;
//     },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// 08-Constructor-function 01
// ให้สร้าง Object calculator ซึ่งมี 3 method (ให้ใช้วิธี Constructor Function)

// read() ให้รับค่า input 2 ค่า
// sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// mul() ให้ return ค่าผลคูณของเลขทั้งสอง

// function Calculator() {
//     this.num1 = 0;
//     this.num2 = 0;
//     this.read = function () {
//         this.num1 = +prompt('Enter number1');
//         this.num2 = +prompt('Enter number2');
//     };
//     this.sum = function () {
//         return this.num1 + this.num2;
//     };
//     this.mul = function () {
//         return this.num1 * this.num2;
//     };
// }

// const cal = new Calculator();
// cal.read();
// console.log(cal.sum());
// console.log(cal.mul());

// 08-Constructor-function 02
// ให้สร้าง Constructor Function: Accumulator(startingValue)

// มี property ชื่อ currentValue ไว้เก็บค่าสะสม (มีค่าเท่ากับ startingValue ตอน Object ถูกสร้าง)
// มี method read() ให้รับค่า input และให้บวกเข้ากับค่า currentValue
// มี method show() ให้ alert ค่า currentValue

// function Accumulator(startingValue) {
//     this.currentValue = startingValue;
//     this.input = 0;
//     this.read = function () {
//         this.input = +prompt('Enter number');
//         this.currentValue += this.input;
//     };
//     this.show = function () {
//         alert(this.currentValue);
//     };
// }

// const result = new Accumulator(1000);
// result.read();
// result.show();
// console.log(result);
