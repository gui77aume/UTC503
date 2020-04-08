interface Iterateur<T>{
    first():void;
    next():void;
    isDone(): boolean;
    currentItem(): T;
}

class Fibonacci implements Iterateur<number> {
    // fibonacci(n) = fibonnacci(n-1) + fibonnacci(n-2)

    private nMax : number;
    private index : number;
    private nMoinsUn : number;
    private nMoinsDeux : number
   

    constructor (n:number){
        this.nMax=n;
        this.index=0;
        this.nMoinsDeux=-1;
        this.nMoinsUn=1;
    
    }

    first():void{
        this.index=0;
        this.nMoinsDeux=0;
        this.nMoinsUn=1;
    }

    
    next():void{
        var passage=this.nMoinsUn + this.nMoinsDeux;
        this.nMoinsDeux=this.nMoinsUn;
        this.nMoinsUn=passage;   
        this.index++;

    }

    isDone():boolean  {
      return this.index == this.nMax;
    }

    currentItem ():number {
        var resultat;
        if (this.index==1 || this.index==0){
            resultat=this.index;
        } else {
            resultat= this.nMoinsUn + this.nMoinsDeux;
        }
        return resultat;
    }


}




// Affiche les 10 premiers éléments de la suite de Fibonacci :
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// Fin (*)
var f: Fibonacci ;
f = new Fibonacci(10); // (**)
while(!f.isDone()){
    console.log(`${f.currentItem()},`);
    f.next();
}

// (*)  Ex2 : l'observeur affiche 'Fin' à la fin de la série
// (**) Ex3 : remplacer ce code par une initialisation par Singleton
