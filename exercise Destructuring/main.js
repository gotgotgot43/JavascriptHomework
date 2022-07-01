// JS10-NewGenJS/03-destructure/01/
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // 'Maya'
// console.log(second); // 'Marisa'
// console.log(third); // 'Chi'

// JS10-NewGenJS/03-destructure/02/
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     'Raindrops on roses',
//     'whiskers on kittens',
//     'Bright copper kettles',
//     'warm woolen mittens',
// ];
// console.log(raindrops); // 'Raindrops on roses'
// console.log(whiskers); // 'whiskers on kittens'
// console.log(aFewOfMyFavoriteThings); // ['Bright copper kettles','warm woolen mittens']

// JS10-NewGenJS/03-destructure/03/
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered); // 1846

// JS10-NewGenJS/03-destructure/04/
// บรรทัด * ให้ผลลัพธ์เป็นอะไร เพราะอะไร
// function sayHi(name) {
//     let name = 'Guest';
//     console.log(name); // Error
// }

// sayHi('Jim');

// JS10-NewGenJS/03-destructure/05/
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659,
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// JS10-NewGenJS/03-destructure/06/
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// function getUserData({ firstName, favoriteColor = 'green' }) {
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
// }

// console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })); // 'Your name is Alejandro and you like purple'
// console.log(getUserData({ firstName: 'Melissa' })); // 'Your name is Melissa and you like green'
// console.log(getUserData({})); // 'Your name is undefined and you like green'

// JS10-NewGenJS/03-destructure/07/
// ให้ใช้ Array destructuring ในการสลับค่าตัวแปร guest กับ admin

// let guest = 'Jane';
// let admin = 'Pete';
// console.log(guest);
// console.log(admin);
// [admin, guest] = [guest, admin];

// console.log(guest);
// console.log(admin);

// JS10-NewGenJS/03-destructure/08/
// จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys เป็น firstName lastName และ age โดยถ้า user มีอายุมาก 18
// ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ-นามสกุล ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน (ใช้ destructuring)

// function checkAge({ firstName, lastName, age = 10 }) {
//     return age > 18 ? `Hello ${firstName} ${lastName}` : 'You are not allow to use this program';
// }

// console.log(checkAge({ firstName: 'got', lastName: 'good', age: 20 }));
// console.log(checkAge({ firstName: 'game', lastName: 'bad', age: 9 }));

// JS10-NewGenJS/03-destructure/09/
// จงเขียน Object destructuring โดยกำหนดให้
// ตัวแปร name เก็บค่า name property
// ตัวแปร age เก็บค่า years property
// ตัวแปร isAdmin เก็บค่า isAdmin property หากไม่มีค่าให้ default value เป็น true
// let user = {
//     name: 'John',
//     years: 27,
// };

// let { name, years: age, isAdmin = true } = user;

// console.log(name);
// console.log(age);
// console.log(isAdmin);

// JS10-NewGenJS/03-destructure/10/
// จงเขียนฟังก์ชัน topSalaries(salaries) เพื่อ return ชื่อคนที่มี salary สูงสุด
// ถ้า salaries เป็น empty object ให้ return null
// ถ้ามีคนที่ได้ salary มากสุดให้ return ชื่อคนใดคนหนึ่ง
// let salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250,
// };

// function topSalaries(sal) {
//     let highestSalaries = 0;
//     let name = '';
//     for (let [key, value] of Object.entries(sal)) {
//         // console.log(key, value);
//         if (value > highestSalaries) {
//             name = key;
//             highestSalaries = value;
//         }
//     }
//     return name || null;
// }

// console.log(topSalaries(salaries));
// console.log(topSalaries({}));

// JS10-NewGenJS/03-destructure/11/
// ให้ใช้ Array destructuring โดยให้ a, b, c, d, e และ f มีค่า 1, 2, 3, 4, 5, และ 6 ตามลำดับ

// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let [a, [b, [[[c, d], e], f]]] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

// JS10-NewGenJS/03-destructure/12/
// ให้ใช้ Object destructuring โดยให้ a เท่ากับ 5 และ b เท่ากับ 10

// const obj = { prop: 5, prop2: 10 };
// const { prop: a, prop2: b } = obj;
// console.log(a, b);

// JS10-NewGenJS/03-destructure/13/
// a และ b มีค่าเท่าไร

// let a, b;
// { a, b } = {a: 1, b: 2};
// Error accoding to not declairation statment

// JS10-NewGenJS/03-destructure/14/
// a และ b มีค่าเท่าไหร่

// const [, , , a, b] = [1, 2, 3];
// console.log(a); //undefined
// console.log(b); //undefined

// JS10-NewGenJS/03-destructure/15/
// ให้ใช้ destructuring โดยให้ x เท่ากับ 5 และ y เท่ากับ 100

// const q = { prop: 5, prop2: [10, 100] };
// const {
//     prop: x,
//     prop2: [, y],
// } = q;
// console.log(x);
// console.log(y);

// JS10-NewGenJS/03-destructure/16/
// ให้ใช้ destructuring โดยให้ x เท่ากับ Hello และ y เท่ากับ b

// const q = {
//     prop: 'Hello',
//     prop2: {
//         prop2: {
//             nested: ['a', 'b', 'c'],
//         },
//     },
// };

// const {
//     prop: x,
//     prop2: {
//         prop2: {
//             nested: [, y],
//         },
//     },
// } = q;
// console.log(x);
// console.log(y);

// JS10-NewGenJS/03-destructure/17/
// ให้ใช้ for … of กับ names (ให้ destructuring object ในแต่ละ iteration)
// ในแต่ละ iteration ให้ console.log ค่า Full name ออกมา

// const names = [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jack', lastName: 'Dann' },
//     { firstName: 'Joe', lastName: 'Dunne' },
// ];

// for (let { firstName, lastName } of names) {
//     console.log(`Fullname: ${firstName} ${lastName}`);
// }

// JS10-NewGenJS/03-destructure/18/
// ให้ใช้ for … of กับ users (ให้ destructuring object ในแต่ละ iteration)
// ในแต่ละ iteration ให้ console.log ค่า user ตามด้วย age หาก age ไม่มีค่าให้ใช้ unknown
// const users = [
//     { user: 'Name1' },
//     { user: 'Name2', age: 2 },
//     { user: 'Name2' },
//     { user: 'Name3', age: 4 },
// ];

// for (let { user, age = 'unknown' } of users) {
//     console.log(user, age);
// }
