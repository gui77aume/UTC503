var generale = function (max) { return function (v) { return v > max ? max : v; }; };
var particuliere3 = generale(3);
var particuliere4 = generale(4);
console.log("retour = ", particuliere3(1));
console.log("retour = ", particuliere3(6));
console.log("retour = ", particuliere4(1));
console.log("retour = ", particuliere4(6));
