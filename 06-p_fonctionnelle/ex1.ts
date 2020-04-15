let maximize= max => v=> v>max ? max : v;
let maximize3=maximize(3);
let maximize4=maximize(4);


console.log("retour = ",maximize3(1));
console.log("retour = ",maximize3(6));

console.log("retour = ",maximize4(1));
console.log("retour = ",maximize4(6));


