
let mapDouble= tab=>tab.map(x=>x*2);
let mapTriple= tab=>tab.map(x=>x*3);
let mapSquare= tab=>tab.map(x=>x*x);
let mapMaximize3= tab=>tab.map(x=>x<3?x:3);

const tableau =[1,2,3,4,5];
console.log(mapDouble(tableau));
console.log(mapTriple(tableau));
console.log(mapSquare(tableau));
console.log(mapMaximize3(tableau));