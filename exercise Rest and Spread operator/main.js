// Rest Operator
// /01-rest-parameter/01/
// จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด

// function multiply(...numbers) {
//     return numbers.reduce((acc, ele) => (acc *= ele), 1);
// }
// console.log(multiply(1, 2, 4));

// 01-rest-parameter/02/
// จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่
// function filterOutOdds(...numbers) {
//     return numbers.filter((element) => element % 2 === 0);
// }

// console.log(filterOutOdds(2, 3, 5, 64, 3, 24, 86, 5, 9, 2, 344));

// 01-rest-parameter/03/
// จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด และให้ return ค่าเป็น Object ที่เกิดจาก
// Object ในพารามิเตอร์มา merge กัน (ในกรณีที่ Object ในพารามิเตอร์มี key ซ้ำกันให้ยึดค่าพารามิเตอร์ตัวที่มาก่อนเป็นหลัก)

// function mergeObjects(...objs) {
//     console.log(objs);
//     return Object.assign({}, ...objs.reverse());
// }

// console.log(mergeObjects({ name: 'M' }, { age: 12, name: 'Ton' }, { name: 'Pipe', age: 15 }));

// Spread operator
// 02-spread-operator/01/
// จงรวม nums1 และ num2 เข้าด้วยกัน
// จงสร้าง array ที่ได้จากการนำ nums1 และ nums2 มารวมกัน แต่ให้เพิ่ม 5 เข้าไปก่อน nums1 และเพิ่ม -6, -1 เข้าไประหว่าง nums1 กับ nums2
// หาผลรวมของทุก element ใน Array ที่ได้
// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];
// const concat = [5, ...nums1, -6, -1, ...nums2];
// console.log(concat.reduce((acc, ele) => (acc += ele), 0));

// JS10-NewGenJS/02-spread-operator/02/
// จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1 แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3 ให้มีค่าเท่ากับ ค่าเดิมยกกำลัง 2 โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง

// function spreadArray(arr) {
//     const clone = [...arr];
//     return clone.reduce((acc, ele, index) => {
//         acc.push(index === 3 ? ele ** 2 : ele);
//         return acc;
//     }, []);
// }

// const arr1 = spreadArray([1, 2, 3, 4, 5, 6]);
// console.log(arr1);

// console.log(spreadArray([]));
// console.log(spreadArray([1, 3, 5, 2, 9]));

// JS10-NewGenJS/02-spread-operator/03/
// จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้
// แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ rest operator

// function user(firstName, lastName, ...hobby) {
//     return { firstName, lastName, numHobby: hobby.length, hobby };
// }

// console.log(user('got', 'good', 'reading', 'play football', 'play game'));

// const person = (firstName, lastName, ...hobbies) => ({
//     firstName,
//     lastName,
//     hobbies,
//     numHobby: hobbies.length,
// });
// console.log(person('got', 'good', 'reading', 'play football', 'play game'));

// JS10-NewGenJS/02-spread-operator/04/
// จงเขียนฟังก์ชัน doubleAndReturnArgs โดยรับพารามิเตอร์มาเป็น Array และตัวเลขกี่ตัวก็ได้ และ return ค่าเป็น Array
// ที่ประกอบด้วยค่าเดิมในพารามิเตอร์ที่เป็น Array และค่าพารามิเตอร์ที่เป็นตัวเลขคูณสอง

// function doubleAndReturnArgs(arr, ...numbers) {
//     return [...arr, ...numbers.map((ele) => ele * 2)];
// }
// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
// // expexted result: [1, 2, 3, 8, 8]
// console.log(doubleAndReturnArgs([2], 10, 4));
// // expexted result: [2, 20, 8]

// JS10-NewGenJS/02-spread-operator/05/
// จงเขียนฟังก์ชัน removeRandom โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element ถูกลบออกไปหนึ่งตัวโดยตำแหน่งที่ลบให้เกิดจากการสุ่ม
// function removeRandom(arr) {
//     arr.splice(Math.floor(Math.random() * arr.length), 1);
//     return [...arr];
// }

// console.log(removeRandom([1, 2, 3, 4, 5]));

// JS10-NewGenJS/02-spread-operator/06/
// จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัวi

// function cloneArray(arr) {
//     return [...arr];
// }

// const arr = [10, 20, 30, 40];
// const clone = cloneArray(arr);
// console.log(arr);
// console.log(clone);
// console.log(clone === arr);

// JS10-NewGenJS/02-spread-operator/07/
// จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object และ return ค่าเป็น Object ที่มี key-value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว
// const cloneObject = (obj) => ({ ...obj });

// const obj1 = { firstName: 'John', lastName: 'Doe' };
// const cloneObj1 = cloneObject(obj1);
// console.log(obj1);
// console.log(cloneObj1);
// console.log(cloneObj1 === obj1);
