let generale= max => v=> v>max ? max : v;
let particuliere3=generale(3);
let particuliere4=generale(4);


console.log("retour = ",particuliere3(1));
console.log("retour = ",particuliere3(6));

console.log("retour = ",particuliere4(1));
console.log("retour = ",particuliere4(6))
