// // JS09-Class-and-Prototype/01-class 01
// // ให้สร้าง Class ชื่อ Calculator มี property และ method ดังนี้
// // value คือค่าตัวเลขปัจจุบัน (เริ่มต้นเป็น 0 หรือตามที่กำหนด) เช่น new Calculator(10) ให้ value มีค่าเท่ากับ 10
// // sum() ให้รับค่าตัวเลขและรวมผลรวมเข้าใน value
// // subtract() ให้รับค่าตัวเลขและหักออกจาก value
// // multiply() ให้รับค่าตัวเลขและคูณตัวเลขกับ value
// // divide() ให้รับค่าตัวเลขและนำไปหาร value
// // show() ให้ alert ค่า value

// class Calculator {
//     constructor(value = 0) {
//         this.value = value;
//     }

//     sum(numPlus) {
//         this.value += numPlus;
//         return this;
//     }

//     subtract(numSub) {
//         this.value -= numSub;
//         return this;
//     }

//     multiply(numMul) {
//         this.value *= numMul;
//         return this;
//     }

//     divide(numDiv) {
//         this.value /= numDiv;
//         return this;
//     }

//     show() {
//         return console.log(this.value);
//     }
// }

// const calculator = new Calculator(10);
// calculator.sum(30);
// calculator.show();
// calculator.subtract(30);
// calculator.show();
// calculator.multiply(3);
// calculator.show();
// calculator.divide(3);
// calculator.show();

// const calculator1 = new Calculator();
// calculator1.sum(4).subtract(9).divide(3).show();

// JS09-Class-and-Prototype/01-class 02
// ให้สร้าง Class Sale มี property ชื่อ name และมี method calcPrice() เพื่อคำนวณราคาสุทธิหลังหักส่วนลด
// ให้สร้าง Class Beverage มี property ชื่อ amount, price และ discount
// ให้ Beverage สืบทอดมาจาก Sale
// ให้สร้าง object ชื่อ beverage จาก Class Beverage โดยมี name, amount, price และ discount เท่ากับ Pepsi, 3, 19 และ 10% ตามลำดับ
// ให้ beverage เรียก method calcPrice()

// class Sale {
//     constructor(name) {
//         this.name = name;
//     }

//     calcPrice() {
//         return (this.price * this.amount * (1 - this.discount / 100).toFixed(2)).toFixed(2);
//     }
// }

// class Beverage extends Sale {
//     constructor(name, amount, price, discount) {
//         super(name);
//         this.amount = amount;
//         this.price = price;
//         this.discount = discount.slice(0, discount.length - 1);
//     }
// }

// const beverage = new Beverage('Pepsi', 3, 19, '10%');
// console.log(beverage.calcPrice());

// JS09-Class-and-Prototype/02-prototype/01
// ให้เพิ่ม Method max และ sum เข้าไปใน Prototype ของ Array โดย

// max ให้ return ค่ามากสุดของตัวเลขใน Array
// sum ให้ return ผลรวมของตัวเลขใน Array

// Array.prototype.max = function () {
//     const max = this.reduce((acc, element) => {
//         element > acc ? (acc = element) : acc;
//         return acc;
//     }, 0);
//     return max;
// };
// console.log([1, 2, 3, 4].max());

// Array.prototype.sum = function () {
//     return this.reduce((acc, element) => (acc += element), 0);
// };

// console.log([1, 2, 3, 4].sum());

// JS09-Class-and-Prototype/02-prototype/02
// ให้เพิ่ม Method defer เข้าไปใน Prototype ของ Function โดยให้ได้ผลลัพธ์ตามด้านล่าง (Hint: setTimeout)

// function f() {
//     alert('Hello!');
// }

// Function.prototype.defer = function (deley) {
//     return setTimeout(this, deley);
// };

// f.defer(1000); // shows "Hello!" after 1 second
