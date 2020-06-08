// Ecrivez en lambda la fonction de composition f o g 
const square = x => x * x;
const double = x => x * 2;

//Jolie façon de faire trouvee sur https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const fog =  compose(square,double)
console.log("f o g (10) = " + fog(10));

//Marche aussi, mais avec un nombre fixe de fonctions (ici 2)
const fog2 = f => g => x => f(g(x));
console.log('f o g 2(10) = ' + fog2(square)(double)(10));