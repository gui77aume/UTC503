let numbers = [100, 34, 5, 67, 72];
// Sans boucle ni récursion, écrivez le code permettant de trouver le min et le max de cette liste

let minimum = numbers.reduce((a,b)=>a<b?a:b);
let maximum = numbers.reduce((a,b)=>a>b?a:b);
console.log(`Min is ${minimum}, max is ${maximum}`);


//Version longue
//prototype de reduce:
//reduce(previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number'

let minimum2 = numbers.reduce( function(previous,current) {
    return previous>current?current:previous;
});

let maximum2 = numbers.reduce( function(previous,current) {
    return previous<current?current:previous;
});

console.log(`Min is ${minimum2}, max is ${maximum2}`);