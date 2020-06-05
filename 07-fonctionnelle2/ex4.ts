let numbers = [100, 34, 5, 67, 72];
// En utilisant la récursion, écrivez le code permettant de trouver le min et le max de cette liste

let rMin = liste => n => n==1?liste[0]:Math.min(liste[n-1],rMin(liste)(n-1)) ;
let rMax = liste => n => n==1?liste[0]:Math.max(liste[n-1],rMax(liste)(n-1)) ;
let minimum = rMin(numbers)(numbers.length);
let maximum = rMax(numbers)(numbers.length);


//let minimum = numbers.rMin());
//let maximum = numbers.// ...
console.log(`Min is ${minimum}, max is ${maximum}`);