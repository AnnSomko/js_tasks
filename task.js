/* 1. Вводиш N чисел. Програма має вивести числа більші за 5 */
function getNum(...args) {
  /*return args.filter(num => num > 5);*/
  let arr = [];
  for(let arg of args) {
    if(arg > 5) arr.push(arg);
  }
  return arr;
}
getNum(1,3,6,8,9);


/* 2. Вводиш N чисел, програма має вивести тіки парні числа. */
function even(...args) {
/*return args.filter(num => num%2 == 0);*/
let arr = [];
for(let arg of args) {
  if(arg%2 == 0) arr.push(arg);
}
return arr;
}
even(4,6,9,10);

/* 3. Вводиш N чисел, програма має вивести суму чисел */
function countSum(...args) {
   /*return args.reduce((a,b) => a + b,0);*/
   let sum = 0;
   for(let arg of args) sum += arg;
   return sum;
}
countSum(2,5,6);

/* 4. Вводиш N чисел, програма має вивести суму чисел, які більше за 5 */
function fifthSum(...args) {
    /*let num = args.reduce((a,b) => a + b,0);*/
    let sum = 0;
    for(let arg of args){
     if(arg > 5) sum += arg;
    } 
    return sum;
}
fifthSum(2,5,6,9);

/* 6. Вводиш координати точок прямокутника на двовимірній площині. І координати довільних точок.
 Виводити інфу, чи ці точки  є всередині прямокутника */
function rectangle(x1,x2,y1,y2,ax,ay) {
   return((ax >= x1 & ax <= x2)&(ay >= y1 & ay <= y2))?true:false;
}
rectangle(2,7,1,5,3,3);

/* 7. задається координата двох прямокутників, перевір, чи вони пересікаються */
function rectangles(x1,x2,y1,y2,x3,x4,y3,y4) {
 
  /*if(x3>x2 || x1>x4) { // right & left
  console.log('not cross');
} else if (y3>y2 || y1>y4) { // top & bottom
  console.log('not cross');
} else {
  console.log('cross');
}*/

return (x3>x2 || x1>x4 || y3>y2 || y1>y4)?false:true;

}
rectangles(1,4,1,3,3,6,2,4); //true

