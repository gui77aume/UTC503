let numbers = [100, 34, 5, 67, 72];
// Sans boucle ni récursion, écrivez le code permettant de trouver le min et le max de cette liste
let minimum = numbers.reduce((a,b)=>a<b?a:b);
let maximum = numbers.reduce((a,b)=>a>b?a:b);
console.log(`Min is ${minimum}, max is ${maximum}`);