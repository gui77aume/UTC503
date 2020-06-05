var numbers = [100, 34, 5, 67, 72];
// Sans boucle ni récursion, écrivez le code permettant de trouver le min et le max de cette liste
var minimum = numbers.reduce(function (a, b) { return a < b ? a : b; });
var maximum = numbers.reduce(function (a, b) { return a > b ? a : b; });
console.log("Min is " + minimum + ", max is " + maximum);
