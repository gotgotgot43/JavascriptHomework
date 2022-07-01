// // 01-access 01
// let friend = ['got', 'good', 'game', 'gift', 'gap'];

// // 01-access 02
// const arr = [1, 2, 4];
// const newArr = arr;

// arr[0] = 3;
// console.log(newArr[0]); // 3

// // 01-access 03
// // สร้างตัวแปร Array ชื่อ styles และให้มี element คือ Jazz และ Blues ตามลำดับ
// // เพิ่ม Rock-n-Roll ต่อท้ายเข้าไปใน styles
// // แก้ไขค่าตรงกลางของ styles ให้เป็น Classic
// // ลบ element ตัวแรก โดยใช้คำสั่ง delete
// // จงหาความยาวของ styles หลังจากทำครบตามขั้นตอนที่กำหนด i

// let styles = ['Jazz', 'Blues'];
// styles[styles.length] = 'Rock-n-Roll';
// styles[1] = 'Classic';
// delete styles[0];
// console.log(styles.length);

// 02-loop-through-array 01

// function calcSumInArr() {
//     let arr = [];
//     let input = 0;
//     while (!isNaN(input) && !(input == null) && !(input === '')) {
//         input = prompt('Enter number:');
//         if (!isNaN(input) && input !== null && input !== '') {
//             arr[arr.length] = input;
//         }
//     }
//     console.log(arr);

//     let sum = 0;
//     for (let element of arr) {
//         sum += Number(element);
//     }
//     return sum;
// }

// console.log(calcSumInArr());

// Alternative
// const isValidNumber = (number) => {
//     if (number === null || number.trim() === '' || isNaN(number)) return false;
//     return true;
// };
// const resultArr = [];
// while (1) {
//     const input = prompt('Enter number');
//     if (!isValidNumber(input)) {
//         break;
//     }
//     resultArr[resultArr.length] = +input;
// }

// let sum = 0;
// resultArr.forEach((element) => (sum += element));
// console.log(sum);

// 02-loop-through-array 02

// ให้เขียนฟังก์ชัน squareArr(arr) เพื่อคืนค่า Array ที่มี element เป็นเลขยกกำลังสองของแต่ละ element ใน arr
// ตัวอย่างผลลัพธ์

// const squareArr = (arr) => {
//     let newArr = [];
//     for (let keys in arr) {
//         newArr[keys] = arr[keys] ** 2;
//     }
//     return newArr;
// };

// console.log(squareArr([1, 2, 3, 4]));

// 02-loop-through-array 03
// จงสร้างตัวแปร summary โดยใช้ค่าจากตัวแปร sales
// netPrice = price x discount (ถ้าไม่มี discount ให้ถือว่า netPrice = price)

// const sales = [{ price: 1000, discount: 0.1 }, { price: 500, discount: 0.05 }, { price: 100 }];

// const summary = [
//     { netPrice: 900 },
//     { netPrice: 475 },
//     { netPrice: 100 }
//   ];

// const summary = [];
// for (let keys in sales) {
//     let temp = 0;
//     temp = sales[keys].price * sales[keys].discount;
//     !isNaN(temp)
//         ? (summary[keys] = { netPrice: sales[keys].price - temp })
//         : (summary[keys] = { netPrice: sales[keys].price });
// }
// console.log(summary);
//
// alternative
// const summary = [];
// for (let el of sales) {
//     summary[summary.length] = { netPrice: el.price * (1 - (el.discount ?? 0)) };
// }
// console.log(summary);

// 02-loop-through-array 04
// const array = [29, 17, 13, 47, 23, 31];
// let sum = 0;
// array.forEach((element) => (sum += element));
// console.log(sum);

// 02-loop-through-array 05
// ให้ใช้ forEach และ console.log ให้ได้ผลลัพธ์แบบใน comment ด้านล่าง

// const names = ['Mike', 'Sid', 'Jack', 'Bill'];
// // // 1. Mike
// // // 2. Sid
// // // 3. Jack
// // // 4. Bill

// names.forEach((element, index) => console.log(`${index + 1}. ${element}`));

// // 03-modify-method 01
// let fruits = ['Apples', 'Pear', 'Orange'];
// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push('Banana');
// // what's in fruits?
// console.log(fruits.length); //3

// 03-modify-method 02

// let arr = ['a', 'b'];

// arr.push(function () {
//     alert(this);
// });

// arr[2](); //alert a,b, function () {alert(this);});

// 03-modify-method 03

// จงสร้างตัวแปร Array ชื่อ animals โดยมี element 3 ตัว คือ Dog, Cat, Rat
// ให้เพิ่ม Fish ต่อท้ายเข้าไปใน animals
// ให้เพิ่ม Horse เข้าไปข้างหน้า animals
// ให้เพิ่ม Giraffe และ Snake ต่อท้าย animals โดยต้องเพิ่มเข้าไปพร้อมกัน
// ให้เอา Horse ออกจาก animals
// ให้เอา Snake ออกจาก animals
// ให้เอา Dog ออกจาก animals
// ผลลัพธ์สุดท้ายของ animals คืออะไร

// const animals = ['Dog', 'Cat', 'Rat'];
// animals.push('Fish');
// animals.unshift('Horse');
// animals.push('Giraffe', 'Snake');
// animals.shift();
// animals.pop();
// animals.shift();
// console.log(animals);//['Cat', 'Rat', 'Fish', 'Giraffe']

// 03-modify-method 04
// จงสร้างฟังก์ชัน first(arr, n) ให้ return ค่าตามเงื่อนไขต่อไป
// n เป็น undefined หรือ 1 ให้ return element ตัวแรกของ arr
// n มากกว่า 1 ให้ return ค่าเป็น array ที่มี element ของ arr n ตัวแรก
// ตัวอย่างผลลัพธ์

// function first(arr, n = 1) {
//     if (n === 1) {
//         return arr.shift();
//     } else if (+n > 1) {
//         return arr.slice(0, n);
//     }
// }

// console.log(first([7, 9, 0, -2])); // 7
// console.log(first([], 3)); // []
// console.log(first([7, 9, 0, -2], 3)); // [7, 9 ,0]

// 03-modify-method 05
// จงสร้างฟังก์ชัน clone(arr) เพื่อ return ค่า Array ที่มี element เหมือน arr ทุกตัว

// function clone(arr) {
//     return arr.slice();
// }

// let origin = [1, 2, 3, 4];
// let clone1 = clone(origin);
// console.log(origin === clone1);
// console.log(clone1);

// 03-modify-method 06
// ให้สร้างตัวแปร Array ที่เกิดจากการนำค่า element ใน a และ b มาต่อกัน

// const a = [1, 5, 7, 11];
// const b = [2, 3, 6];

// const Array = a.concat(b);
// console.log(Array);

// 03-modify-method 07
// ให้เขียนโค้ดเพื่อ remove element ในตัวแปร fish ออกให้หมด

// let fish = ['angel', 'clown', 'mandarin', 'sturgeon'];
// fish.splice(0, fish.length);
// console.log(fish);

// 03-modify-method 08
// ให้เขียนโค้ดเพื่อลบ Jay ออกและใส่ Jack และ Joe เข้าไปแทน

// const person = ['John', 'Jay', 'Jim', 'Jame'];
// console.log(person.splice(1, 1, 'Jack', 'Joe'));
// console.log(person);

// 03-modify-method 09
// ให้สร้างตัวแปร Array โดยเอาค่ามาจาก sports ในตำแหน่ง index 1 ถึง 3

// const sports = ['football', 'volleyball', 'tennis', 'basketball', 'judo'];
// const Array = sports.slice(1, 4);
// console.log(Array);

// 03-modify-method 10
// ให้เพิ่ม mazda bmw และ nissan เข้าไปใน cars โดยให้อยู่ข้างหลัง honda

// const cars = ['volvo', 'toyota', 'honda', 'ford'];
// cars.splice(3, 0, 'mazda', 'bmw', 'nissan');
// console.log(cars);

// extra excercise fibonacci
// const fibonacci = (n) => {
//     let resultFibo = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         resultFibo[i] = resultFibo[i - 1] + resultFibo[i - 2];
//     }
//     return resultFibo;
// };
// console.log(fibonacci(20));

// Searching Array
// 05-searching-method 01
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.indexOf('bison')); // 1
// console.log(beasts.indexOf('bison', 2)); // 4
// console.log(beasts.indexOf('giraffe')); // -1

// 05-searching-method 02
// จงหา array ของตำแหน่ง (index) ของ 'a' ใน alphabets

// const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// let result = [];
// for (let i in alphabets) {
//     if (alphabets[i] === 'a') {
//         result.push(+i);
//     }
// }
// console.log(result);

// Use reduce
// const result = alphabets.reduce((acc, ele, index) => {
//     // console.log(ele);
//     if (ele === 'a') acc.push(index);
//     return acc;
// }, []);
// console.log(result);

// Alternative
// const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];

// let result = [];
// let foundIndex = alphabets.indexOf('a');
// do {
//   if (foundIndex !== -1) {
//     result.push(foundIndex);
//     foundIndex = alphabets.indexOf('a', foundIndex + 1);
//   }
// } while (foundIndex !== -1);
// console.log(result);

// expexted result: [0, 2, 4]

// 05-searching-method 03
// ผลจากการรันคำสั่งในบรรทัด * คืออะไร

// console.log([1, 2, 3].includes(2)); // true
// console.log([1, 2, 3].includes(4)); // false
// console.log([1, 2, 3].includes(3, 3)); // false
// console.log([1, 2, 3].includes(3, -1)); // true
// console.log([1, 2, NaN].includes(NaN)); // true
// console.log(['1', '2', '3'].includes(3)); // flase

// 05-searching-method 04
// จงหา element ตัวแรก ใน nums ที่มีค่าน้อยกว่า 0

// const nums = [7, 9, -5, -1, 0, 3];
// // expexted result: -5
// const result = nums.find((element) => {
//     if (element < 0) return true;
//     return false;
// });

// console.log(result);

// 05-searching-method 05
// จงหา element ตัวแรก ใน inventory ที่มี name เท่ากับ cherries

// const inventory = [
//     { name: 'apples', quantity: 2 },
//     { name: 'bananas', quantity: 0 },
//     { name: 'cherries', quantity: 5 },
// ];
// // expected result: { name: 'cherries', quantity: 5 }
// const result = inventory.find((element) => element.name === 'cherries');

// console.log(result);

// 05-searching-method 06
// จงหา index ใน tasks ที่มี id เท่ากับ 2

// const tasks = [
//     { id: 1, name: 'Fishing' },
//     { id: 2, name: 'Shopping' },
//     { id: 3, name: 'Swimming' },
// ];
// // expexted result: 1

// const result = tasks.findIndex((element) => element.id === 2);
// console.log(result);

// 05-searching-method 07
// จงเขียนฟังก์ชัน updateTask(id, newName) เพื่อแก้ไขค่า element ใน tasks ที่มี property ชื่อ id เท่ากับ id โดยแก้ไข name ให้มีค่าเป็น newName
// execute updateTask(2, 'Travelling')
// const tasks = [
//     { id: 1, name: 'Fishing' },
//     { id: 2, name: 'Shopping' },
//     { id: 3, name: 'Swimming' },
// ];

// function updateTask(id, newName) {
//     const resultIndex = tasks.findIndex((element) => element.id === id);
//     if (resultIndex !== -1) {
//         tasks[resultIndex].name = newName;
//     } else {
//         console.log('Task with this id is not found');
//     }
// }

// updateTask(2, 'Travelling');
// updateTask(4, 'Singing');
// console.log(tasks);

// 05-searching-method 08
// จงเขียนฟังก์ชัน deleteTask(id) เพื่อลบ element ใน tasks ที่มี property ชื่อ id เท่ากับ id
// execute deleteTask(1)
// const tasks = [
//     { id: 1, name: 'Fishing' },
//     { id: 2, name: 'Shopping' },
//     { id: 3, name: 'Swimming' },
// ];

// function deleteTask(id) {
//     const resultIndex = tasks.findIndex((element) => element.id === id);
//     console.log(resultIndex);
//     if (resultIndex !== -1) tasks.splice(resultIndex, 1);
// }
// deleteTask(1);
// console.log(tasks);

// 05-searching-method 09
// ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter

// const array = [9, 17, 23, 5];
// // ค่าที่มากกว่า 10
// const result = array.filter((element) => element > 10);
// console.log(result);

// const array = [1, 2, 3, 4];
// // ค่าที่เป็นเลขคี่
// const result = array.filter((element) => element % 2 === 1);
// console.log(result);

// const array = [1, '1', 2, {}];
// // ค่าที่ประเภทข้อมูลเป็น Number
// const result = array.filter((element) => typeof element === 'number');
// console.log(result);

// const array = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// // ค่าที่มีตัวอักษรมากกว่า 6 ตัว
// const result = array.filter((element) => element.length > 6);
// console.log(result);

// const array = [1, -3, 2, 8, -4, 5];
// // ค่าที่เป็นเลขบวก
// const result = array.filter((element) => element > 0);
// console.log(result);

// const array = [1, 3, 4, 5, 6, 7, 8];
// // ค่าที่หาร 3 ลงตัว
// const result = array.filter((element) => element % 3 === 0);
// console.log(result);

// const array = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// // ค่าที่ขึ้นต้นด้วยตัว E
// const result = array.filter((element) => element.startsWith('E'));
// console.log(result);

// const array = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// // ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
// const result = array.filter((element) => element === element.toUpperCase());
// console.log(result);

// const array = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi', 'Phrae'];
// // ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
// const result = array.filter((element) => element.toLowerCase().includes('buri'));
// console.log(result);

// const array = [
//     { name: 'Ben', age: 14 },
//     { name: 'Phil', age: 18 },
//     { name: 'John', age: 32 },
//     { name: 'Ann', age: 16 },
//     { name: 'Paul', age: 24 },
// ];
// อายุไม่น้อยกว่า 18
// const result = array.filter((element) => element.age >= 18);
// console.log(result);

// const array = [
//     { id: 1, name: 'Pepsi' },
//     { id: 2, name: 'Mirinda' },
//     { id: 3, name: 'Coke' },
//     { id: 4, name: 'Fanta' },
//     { id: 5, name: 'Sprite' },
// ];
// // id ไม่เท่ากับ 4
// const result = array.filter((element) => element.id !== 4);
// console.log(result);

// const array = [
//     { name: 'John', birth: '2001-07-31' },
//     { name: 'Jack', birth: '1990-06-24' },
//     { name: 'Jim', birth: '1984-12-13' },
//     { name: 'Jeff', birth: '1996-02-05' },
//     { name: 'Joe', birth: '2002-06-13' },
// ];
// // เกิดเดือน 6
// const result = array.filter((element) => element.birth.includes('06'));
// console.log(result);

// 05-searching-method 10
// จงเขียนฟังก์ชัน filterRange(arr, a, b) เพื่อ return array ที่ประกอบด้วย element ของ arr ที่มีค่าอยู่ระหว่าง a กับ b

// function filterRange(arr, a, b) {
//     return arr.filter((element) => element >= a && element <= b);
// }

// const array1 = [10, 20, 30, 40, 50, 60];
// console.log(filterRange(array1, 1, 50));

// 06-transform-method 01
// ให้สร้าง array result จาก array ที่กำหนด โดยใช้ arr.map(fn)

// const array = [1, 2, 30, 400];
// result: [2, 4, 60, 800]
// const result = array.map((element) => element * 2);
// console.log(result);

// const array = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]
// const result = array.map((element) => String(element));
// console.log(result);

// const array = [1, '1', 2, {}];
// // result: ["number", "string", "number", "object"]
// const result = array.map((element) => typeof element);
// console.log(result);

// const array = ['apple', 'banana', 'orange'];
// // result: ["APPLE", "BANANA", "ORANGE"]
// const result = array.map((element) => element.toUpperCase());
// console.log(result);

// const array = [1, 3, 4, 5, 6, 7, 8];
// // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
// const result = array.map((element) => {
//     return element % 2 === 0 ? 'even' : 'odd';
// });
// console.log(result);

// const array = [1, -3, 2, 8, -4, 5];
// // result: [1, 3, 2, 8, 4, 5]
// const result = array.map((element) => {
//     return element < 0 ? element * -1 : element;
// });
// console.log(result);

// const array = [100, 200.25, 300.84, 400.3];
// // result: ["100.00", "200.25", "300.84", "400.30"]
// const result = array.map((element) => element.toFixed(2));
// console.log(result);

// const array = [0, 5, 10, 7, 6, 5, 0];
// // result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
// const result = array.map((element) => {
//     switch (element) {
//         case 0:
//             return 'Jan';
//         case 1:
//             return 'Feb';
//         case 2:
//             return 'Mar';
//         case 3:
//             return 'April';
//         case 4:
//             return 'May';
//         case 5:
//             return 'Jun';
//         case 6:
//             return 'Jul';
//         case 7:
//             return 'Aug';
//         case 8:
//             return 'Sep';
//         case 9:
//             return 'Oct';
//         case 10:
//             return 'Nov';
//         case 11:
//             return 'Dec';
//     }
// });
// console.log(result);
// Alternative way
// const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// result = array.map((ele) => month[ele]);
// console.log(result);

// const array = [1, 16, 81, 256, 625, 1296];
// // result: [1, 2, 3, 4, 5, 6]
// const result = array.map((element) => {
//     return Math.sqrt(Math.sqrt(element));
// });
// console.log(result);

// const array = [
//     { name: 'apple', age: 14 },
//     { name: 'banana', age: 18 },
//     { name: 'watermelon', age: 32 },
// ];
// // // result: ["apple", "banana", "watermelon"]
// const result = array.map((element) => element.name);
// console.log(result);

// const array = [
//     { name: 'apple', age: 14 },
//     { name: 'banana', age: 18 },
//     { name: 'watermelon', age: 32 },
// ];
// // result: [14, 18, 32]
// const result = array.map((element) => element.age);
// console.log(result);

// const array = [
//     { name: 'apple', surname: 'London' },
//     { name: 'banana', surname: 'Bangkok' },
//     { name: 'watermelon', surname: 'Singapore' },
// ];
// // result: ["apple London", "banana Bangkok", "watermelon Singapore"]
// const result = array.map((element) => `${element.name} ${element.surname}`);
// console.log(result);

// const array = [
//     { name: 'apple', birth: '2000-01-01' },
//     { name: 'banana', birth: '1990-10-01' },
//     { name: 'watermelon', birth: '1985-12-01' },
// ];
// // result: [
// //   { name: "apple", birth: "2000-01-01", age: 21 },
// //   { name: "banana", birth: "1990-10-01", age: 31 },
// //   { name: "watermelon", birth: "1985-12-01", age: 36 },
// // ]
// const result = array.map((element) => {
//     return { name: element.name, birth: element.birth, age: 2021 - +element.birth.substring(0, 4) };
// });
// console.log(result);

// const array = [
//     { name: 'apple', birth: '2000-01-01' },
//     { name: 'banana', birth: '1990-10-10' },
//     { name: 'watermelon', birth: '1985-12-30' },
// ];
// // result: [
// //     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
// //     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
// //     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// // ]
// const Month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// const result = array.map((element) => {
//     return `<tr><td>${element.name}</td><td>${element.birth.slice(8, 10)} ${
//         Month[+element.birth.slice(5, 7) - 1]
//     } ${element.birth.slice(0, 4)}</td></tr>`;
// });
// console.log(result);

// 06-transform-method 02
// จงเขียนฟังก์ชันในการแปลงคำที่อยู่ในรูปแบบ dash-separated เช่น background-color ให้อยู่ในรูปแบบ camelCase เช่น backgroundColor
// function camelCase(word) {
//     const wordArr = word.split('-');
//     const tranformArr = wordArr
//         .map((element) => element.replace(element[0], element[0].toUpperCase()))
//         .join('');
//     return tranformArr.replace(tranformArr[0], tranformArr[0].toLowerCase());
// }

// console.log(camelCase('background-color'));
// console.log(camelCase('border-top-right-radius'));

// // Alternative way
// function firstUc(str) {
//     return str.slice(0, 1).toUpperCase() + str.slice(1);
// }

// function convertToCamel(dashSeparated) {
//     return dashSeparated
//         .split('-')
//         .map(function (el, index) {
//             return index ? firstUc(el) : el;
//         })
//         .join('');
// }

// console.log(convertToCamel('dash-separated'));
// console.log(convertToCamel('border-top-right-radius'));

// 06-transform-method 03
// จงเรียงข้อมูลใน arr จากมากไปหาน้อย

// const arr = [11, 17, 23, 13, 7, 19];
// arr.sort((a, b) => (a > b ? -1 : 1));
// console.log(arr);

// 06-transform-method 04
// จงเรียงข้อมูลใน arr โดยเรียงตามค่า element ยกกำลัง 2 จากน้อยไปหามาก

// const arr = [-3, 2, 0, -7, 4, 6];
// arr.sort((a, b) => (a ** 2 > b ** 2 ? 1 : -1));
// console.log(arr);

// 06-transform-method 05
// จงเรียงข้อมูล object ใน arr โดยเรียงตามค่า age จากน้อยไปหามาก

// const arr = [
//     { name: 'John', age: 25 },
//     { name: 'Leon', age: 26 },
//     { name: 'Mick', age: 29 },
//     { name: 'Pete', age: 30 },
//     { name: 'Mary', age: 28 },
// ];

// arr.sort((a, b) => a.age - b.age); //30-18 > 0 => switch
// console.log(arr);

// 06-transform-method 06
// จงเขียนฟังก์ชัน copySorted(arr) เพื่อ return array ที่เรียงข้อมูลใน arr จากน้อยไปหามาก โดยที่ arr ต้องมีค่าเหมือนเดิม
// ตัวอย่างผลลัพธ์
// let arr = ['React', 'Vue', 'Angular'];
// let sorted = copySorted(arr);

// function copySorted(arr) {
//     // const clone = arr.slice();
//     const clone = [...arr];
//     clone.sort();
//     return clone;
// }

// let arr = ['React', 'Vue', 'Angular'];
// let sorted = copySorted(arr);
// console.log(sorted); // Angular, React, Vue
// console.log(arr); // React, Vue, Angular (no changes)

// 06-transform-method 07
// จงหาผลคูณของ element ใน nums

// const nums = [-3, 2, 11, -7, 4, 6];
// const result = nums.reduce((acc, element) => acc * element, 1);
// console.log(result);

// 06-transform-method 08
// จงหาคะแนนเฉลี่ยแบบถ่วงน้ำหนัก

// const scores = [
//     { score: 90, subject: 'HTML', weight: 0.2 },
//     { score: 95, subject: 'CSS', weight: 0.3 },
//     { score: 85, subject: 'JavaScript', weight: 0.5 },
// ];
// // expected result: 89

// const result = scores.reduce((acc, element) => (acc += element.score * element.weight), 0);
// console.log(result);

// 06-transform-method 09
// จงหาค่ามากสุดและน้อยสุดใน arr

// let arr = [3.24, 2.78, 3.86, 1.37, 0.52];
// arr.sort((a, b) => (a > b ? 1 : -1));
// console.log(arr);
// const max = arr[arr.length - 1];
// const min = arr[0];
// console.log(max);
// console.log(min);

// alternative way
// let arr = [3.24, 2.78, 3.86, 1.37, 0.52];
// // const initialValue = [arr[0], arr[0]];
// const initialValue = { max: arr[0], min: arr[0] };

// const result = arr.reduce((acc, el) => {
//     if (acc.max < el) {
//         acc.max = el;
//     }
//     if (acc.min > el) {
//         acc.min = el;
//     }
//     return acc;
// }, initialValue);
// console.log(result);

// 06-transform-method 10

// จงนับชื่อที่ปรากฏใน names

// let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// // expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}
// let result = names.reduce((acc, element) => {
//     if (acc[element]) {
//         acc[element] += 1;
//     } else {
//         acc[element] = 1;
//     }
//     return acc;
// }, {});
// console.log(result);

// let test = { john: 1 };

// 06-transform-method 11
// จงหาและนับจำนวนตัวอักษรที่ปรากฏใน str

// let str = 'I live in Thailand';
// // expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}
// str = str.split('');
// console.log(str);
// const result = str.reduce((acc, element) => {
//     if (element.toLowerCase() in acc) {
//         acc[element.toLowerCase()] += 1;
//     } else {
//         acc[element.toLowerCase()] = 1;
//     }
//     return acc;
// }, {});
// delete result[' '];
// console.log(result);

// 06-transform-method 12
// จงกระจาย element ที่ซ้อนกันอยู่ภายใน array ให้กระจายออกมาที่ element ชั้นนอกสุด

// let flattened = [
//     [0, 1],
//     [2, 3],
//     [4, 5],
// ];
// // expected result: [0, 1, 2, 3, 4, 5]
// const result = flattened.reduce((acc, element) => {
//     for (let i in element) {
//         acc[acc.length] = element[i];
//     }
//     return acc;
// }, []);

//Alternative way
// const result = flattened.reduce((acc, ele) => acc.concat(ele), []);
// const result = flattened.reduce((acc, ele) => [...acc, ...ele], []);
// console.log(result);

// console.log(result);

// Using rest operator
// let flattened = [
//     [0, 1],
//     [2, 3],
//     [4, 5]
//   ];
//   const result = [];
//   for (let i = 0; i < flattened.length; i++) {
//     result.push(...flattened[i]);
//   }
//   console.log(result);

//   const result1 = flattened.reduce((acc, el) => {
//     acc.push(...el);
//     return acc;
//   }, []);
//   console.log(result1);

// 06-transform-method 12
// จงหา unique array element ของ alphabets

// let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// // expected result: ['a', 'b', 'c', 'e', 'd']
// let result = alphabets.reduce((acc, element) => {
//     if (!acc.includes(element)) acc.push(element);
//     return acc;
// }, []);

// console.log(result);

// 06-transform-method 14
// จงสร้าง object โดยมี key เป็น id ของ product และ value เป็น product name

const products = [
    { id: 1, name: 'Crystal' },
    { id: 4, name: 'Namthip' },
    { id: 5, name: 'Nestle' },
];
// { 1: { name: 'Crystal' }, 4: { name: 'Namthip' }, 5: { name: 'Nestle' } };

// const result = products.reduce((acc, element) => {
//     const nameElement = {};
//     nameElement.name = element.name;
//     acc[element.id] = nameElement;
//     return acc;
// }, {});

// console.log(result);

// Alternative way
// const result = products.reduce((acc, ele) => {
//     if (acc[ele.id]) return acc;
//     acc[ele.id] = { name: ele.name };
//     return acc;
// }, {});
// console.log(result);

// // 06-transform-method 15
// // จงสร้างฟังก์ชัน getAverageAge(arr) เพื่อหาอายุเฉลี่ยของ array

// let john = { name: 'John', age: 27 };
// let jo = { name: 'Jo', age: 21 };
// let jin = { name: 'Jin', age: 25 };

// let arr = [john, jo, jin];

// function getAverageAge(arr) {
//     const result = arr.reduce((acc, element) => {
//         acc += element.age;
//         return acc;
//     }, 0);
//     return arr.length === 0 ? 0 : (result / arr.length).toFixed(2);
// }

// console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33

// 06-transform-method 16
// จง Group คนที่มีเพศเดียวกันเข้าด้วยกัน

// const persons = [
//     { name: 'John', sex: 'M' },
//     { name: 'Jody', sex: 'M' },
//     { name: 'Susan', sex: 'F' },
//     { name: 'Kate', sex: 'F' },
//     { name: 'Sid', sex: 'M' },
// ];
// // // expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }

// const result = persons.reduce((acc, element) => {
//     if (acc[element.sex] === undefined) {
//         acc[element.sex] = [element.name];
//     } else {
//         // acc[element.sex].push(element.name);
//         acc[element.sex] = [...acc[element.sex], element.name];
//     }
//     return acc;
// }, {});

// console.log(result);

// 06-transform-method 17

// จงหาผลรวมของเลขที่มีค่าน้อยกว่า 40 ที่อยู่ในตัวแปร str

// let str = '31 45 12 67 34 86 23 37 19 41';
// let splited = str.split(' ');
// let sum = 0;
// for (let i = 0; i < splited.length; i++) {
//     +splited[i] < 40 ? (sum += +splited[i]) : null;
// }
// console.log(sum);

// // Alternative way
// let str = '31 45 12 67 34 86 23 37 19 41';
// const result = str
//     .split(' ')
//     .filter((el) => el < 40)
//     .reduce((acc, el) => acc + +el, 0);
// console.log(result);
