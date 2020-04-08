interface Iterateur<T>{
    aUnSuivant(): boolean;
    suivant(): T;
}

class Fibonacci implements Iterateur<number> {
    

    private nMax : number;
    private index : number;
    private nMoinsUn : number;
    private nMoinsDeux : number


    constructor (n:number){
        this.nMax=n;
        this.index=0;
        this.nMoinsDeux=0;
        this.nMoinsUn=1;
    }

    suivant ():number {
        // fibonacci(n) = fibonnacci(n-1) + fibonnacci(n-2)
        var resultat:number;
        

        if (this.index==1 || this.index==0){
            resultat=this.index;
        } else {
            resultat=this.nMoinsUn + this.nMoinsDeux;
            this.nMoinsDeux=this.nMoinsUn;
            this.nMoinsUn= resultat;
            }
        
        this.index++;

        return resultat;
    }

    aUnSuivant():boolean  {
      return this.index != this.nMax;
    }

    


}




// Affiche les 10 premiers éléments de la suite de Fibonacci :
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// Fin (*)
var f: Fibonacci ;
f = new Fibonacci(10); // (**)
while(f.aUnSuivant()){
    console.log(`${f.suivant()},`);
}

// (*)  Ex2 : l'observeur affiche 'Fin' à la fin de la série
// (**) Ex3 : remplacer ce code par une initialisation par Singleton
