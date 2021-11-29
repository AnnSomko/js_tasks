/* 1. Вводиш N чисел. Програма має вивести числа більші за 5 */
function getNum(...args) {
  return args.filter(num => num > 5);
}
getNum(1,3,6,8,9);

/* 2. Вводиш N чисел, програма має вивести тіки парні числа. */
function even(...args) {
return args.filter(num => num%2 == 0);
}
getNum(4,6,9,10);

/* 3. Вводиш N чисел, програма має вивести суму чисел */
function sum(...args) {
   return args.reduce((a,b) => a + b,0);
}

sum(2,5,6);

/* 4. Вводиш N чисел, програма має вивести суму чисел, які більше за 5 */
function sum(...args) {
    let num = args.reduce((a,b) => a + b,0);
    return num > 5?num:false;
}
sum(2,5,6);

/* 5. Вводиш координати точок прямокутника на двовимірній площині. І координати довільних точок.
 Виводити інфу, чи ці точки  є в середині прямокутника */
function triangle() {
    
}