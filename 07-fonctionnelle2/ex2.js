var list = [1, 9, 2, 8, 5];
var nombrePair = function (n) { return n % 2 == 0; };
// Ecrivez la fonction 'and' sous sa forme curryfiée qui permet au code ci-dessous de fonctionner
var and = function (f1) { return function (f2) { return function (n) { return (f1(n) && f2(n)); }; }; };
var result = list.filter(and(nombrePair)(function (n) { return n > 4; }));
console.log(result); // [8]
